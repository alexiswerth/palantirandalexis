import type { Plugin } from "vite";
import { readFileSync } from "fs";
import { resolve, join } from "path";

/**
 * Injects values from the active TargetRole into index.html placeholders.
 *
 * Placeholders supported (use anywhere in index.html):
 *   {{seoTitle}}, {{seoDescription}}, {{seoOgImageAlt}},
 *   {{company}}, {{role}}, {{location}}, {{url}}
 *
 * Strategy:
 *   1. Read src/lib/siteConfig.ts as text and find which role file it imports
 *      (e.g. `const targetRole: TargetRole = palantirCommercialCounsel;`).
 *   2. Resolve that export's source file under src/lib/targetRoles/ via the
 *      barrel file (index.ts).
 *   3. Parse the exported object literal with regex to extract string fields.
 *
 * This avoids transpiling TS at config time and keeps the plugin in lockstep
 * with whichever role siteConfig.ts is currently targeting.
 */
export function targetRoleSeoPlugin(): Plugin {
  const libDir = resolve(__dirname, "../src/lib");
  const configPath = join(libDir, "siteConfig.ts");
  const rolesDir = join(libDir, "targetRoles");

  function unescape(raw: string): string {
    return raw
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\")
      .replace(/\\n/g, "\n");
  }

  function parseObjectLiteral(body: string): Record<string, string> {
    const fields: Record<string, string> = {};
    const re = /(\w+)\s*:\s*(["'])((?:\\.|(?!\2).)*)\2\s*,/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(body)) !== null) {
      fields[m[1]] = unescape(m[3]);
    }
    return fields;
  }

  function loadActiveRole(): Record<string, string> {
    const config = readFileSync(configPath, "utf-8");

    // Find the active assignment: `const targetRole: TargetRole = <identifier>;`
    const activeMatch = config.match(/const\s+targetRole\s*:\s*TargetRole\s*=\s*(\w+)\s*;/);
    if (!activeMatch) return {};
    const exportName = activeMatch[1];

    // Use the barrel to map exportName -> file
    const barrelPath = join(rolesDir, "index.ts");
    const barrel = readFileSync(barrelPath, "utf-8");
    const barrelRe = /export\s*\{\s*(\w+)\s*\}\s*from\s*["']\.\/(\w+)["']/g;
    const exportToFile = new Map<string, string>();
    let bm: RegExpExecArray | null;
    while ((bm = barrelRe.exec(barrel)) !== null) {
      exportToFile.set(bm[1], bm[2]);
    }
    const fileName = exportToFile.get(exportName);
    if (!fileName) return {};

    const rolePath = join(rolesDir, `${fileName}.ts`);
    const roleSrc = readFileSync(rolePath, "utf-8");
    const literalRe = new RegExp(
      `export\\s+const\\s+${exportName}\\s*:\\s*TargetRole\\s*=\\s*\\{([\\s\\S]*?)\\n\\};`,
    );
    const literalMatch = roleSrc.match(literalRe);
    if (!literalMatch) return {};
    return parseObjectLiteral(literalMatch[1]);
  }

  function escapeAttr(v: string): string {
    return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  return {
    name: "target-role-seo",
    transformIndexHtml(html) {
      const fields = loadActiveRole();
      return html.replace(/\{\{(\w+)\}\}/g, (full, key) => {
        const v = fields[key];
        return v == null ? full : escapeAttr(v);
      });
    },
  };
}
