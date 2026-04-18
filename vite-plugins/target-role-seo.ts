import type { Plugin } from "vite";
import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * Injects values from siteConfig.targetRole into index.html placeholders.
 * Placeholders supported (use anywhere in index.html):
 *   {{seoTitle}}, {{seoDescription}}, {{seoOgImageAlt}},
 *   {{company}}, {{role}}, {{location}}, {{url}}
 *
 * Reads src/lib/siteConfig.ts as text and extracts targetRole field values
 * via regex. This avoids transpiling TS at config time.
 */
export function targetRoleSeoPlugin(): Plugin {
  const configPath = resolve(__dirname, "../src/lib/siteConfig.ts");

  function loadTargetRole(): Record<string, string> {
    const src = readFileSync(configPath, "utf-8");
    // Find the targetRole literal block
    const blockMatch = src.match(/const\s+targetRole\s*:\s*TargetRole\s*=\s*\{([\s\S]*?)\n\};/);
    if (!blockMatch) return {};
    const body = blockMatch[1];
    const fields: Record<string, string> = {};
    // Match string literal fields: key: "value" or key: 'value'
    const re = /(\w+)\s*:\s*(["'])((?:\\.|(?!\2).)*)\2\s*,/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(body)) !== null) {
      const [, key, , raw] = m;
      // Unescape \" \' \\ \n
      fields[key] = raw
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'")
        .replace(/\\\\/g, "\\")
        .replace(/\\n/g, "\n");
    }
    return fields;
  }

  function escapeAttr(v: string): string {
    return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    name: "target-role-seo",
    transformIndexHtml(html) {
      const fields = loadTargetRole();
      return html.replace(/\{\{(\w+)\}\}/g, (full, key) => {
        const v = fields[key];
        return v == null ? full : escapeAttr(v);
      });
    },
  };
}
