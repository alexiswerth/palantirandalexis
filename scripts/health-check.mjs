#!/usr/bin/env node

/**
 * CLI Health Check: validates the resume site for production readiness.
 *
 * Usage: node scripts/health-check.mjs
 */

import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

const ROOT = process.cwd();
const PASS = "\x1b[32m\u2713\x1b[0m";
const FAIL = "\x1b[31m\u2717\x1b[0m";
const WARN = "\x1b[33m!\x1b[0m";

let exitCode = 0;
const results = [];

function check(label, fn) {
  try {
    const result = fn();
    if (result === true) {
      results.push({ status: "pass", label });
    } else {
      results.push({ status: "fail", label, detail: result });
      exitCode = 1;
    }
  } catch (e) {
    results.push({ status: "fail", label, detail: e.message });
    exitCode = 1;
  }
}

function warn(label, msg) {
  results.push({ status: "warn", label, detail: msg });
}

// 1. Check critical files exist
check("index.html exists", () => existsSync(join(ROOT, "index.html")) || "Missing index.html");
check("Resume PDF exists", () => existsSync(join(ROOT, "public/Alexis_Werth_Resume.pdf")) || "Missing public/Alexis_Werth_Resume.pdf");
check("Site config exists", () => existsSync(join(ROOT, "src/lib/siteConfig.ts")) || "Missing siteConfig.ts");

// 2. Check for em dashes in source files
check("No em dashes in source", () => {
  const violations = [];
  function scanDir(dir) {
    if (dir.includes("node_modules") || dir.includes(".git")) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        scanDir(full);
      } else if (/\.(tsx?|jsx?|css|html|md)$/.test(entry)) {
        const content = readFileSync(full, "utf-8");
        if (content.includes("\u2014")) {
          violations.push(full.replace(ROOT + "/", ""));
        }
      }
    }
  }
  scanDir(join(ROOT, "src"));
  if (violations.length > 0) return `Em dashes found in: ${violations.join(", ")}`;
  return true;
});

// 3. Check siteConfig has all required fields
check("siteConfig completeness", () => {
  const config = readFileSync(join(ROOT, "src/lib/siteConfig.ts"), "utf-8");
  const required = ["name", "email", "phone", "resumePath", "experiences", "education"];
  const missing = required.filter(f => !config.includes(`${f}:`));
  if (missing.length > 0) return `Missing fields: ${missing.join(", ")}`;
  return true;
});

// 4. Check index.html has SEO basics
check("SEO: title tag", () => {
  const html = readFileSync(join(ROOT, "index.html"), "utf-8");
  return html.includes("<title>") || "Missing <title> tag";
});
check("SEO: meta description", () => {
  const html = readFileSync(join(ROOT, "index.html"), "utf-8");
  return html.includes('name="description"') || "Missing meta description";
});
check("SEO: og:title", () => {
  const html = readFileSync(join(ROOT, "index.html"), "utf-8");
  return html.includes('og:title') || "Missing og:title";
});

// 5. Check bundle size (rough estimate)
check("Source file count reasonable", () => {
  let count = 0;
  function countFiles(dir) {
    if (dir.includes("node_modules") || dir.includes(".git")) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) countFiles(full);
      else if (/\.(tsx?|jsx?)$/.test(entry)) count++;
    }
  }
  countFiles(join(ROOT, "src"));
  if (count > 100) return `Too many source files (${count}), consider code splitting`;
  return true;
});

// 6. Check ErrorBoundary is used
check("ErrorBoundary wraps app", () => {
  const main = readFileSync(join(ROOT, "src/main.tsx"), "utf-8");
  return main.includes("ErrorBoundary") || "ErrorBoundary not found in main.tsx";
});

// Print results
console.log("\n\x1b[1m  Resume Site Health Check\x1b[0m\n");
for (const r of results) {
  const icon = r.status === "pass" ? PASS : r.status === "warn" ? WARN : FAIL;
  console.log(`  ${icon} ${r.label}${r.detail && r.status !== "pass" ? ` (${r.detail})` : ""}`);
}
console.log(`\n  ${results.filter(r => r.status === "pass").length}/${results.length} checks passed\n`);
process.exit(exitCode);
