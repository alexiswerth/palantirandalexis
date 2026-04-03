import { describe, it, expect } from "vitest";
import siteConfig from "@/lib/siteConfig";

describe("Site Config Validation", () => {
  it("has non-empty name", () => {
    expect(siteConfig.name.length).toBeGreaterThan(0);
  });

  it("has valid email", () => {
    expect(siteConfig.email).toMatch(/@/);
  });

  it("has valid phone (digits only)", () => {
    expect(siteConfig.phone).toMatch(/^\d+$/);
  });

  it("has at least 1 experience", () => {
    expect(siteConfig.experiences.length).toBeGreaterThanOrEqual(1);
  });

  it("all experiences have unique ids", () => {
    const ids = siteConfig.experiences.map(e => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all experiences have highlights", () => {
    siteConfig.experiences.forEach(exp => {
      expect(exp.highlights.length).toBeGreaterThan(0);
    });
  });

  it("has at least 1 education entry", () => {
    expect(siteConfig.education.length).toBeGreaterThanOrEqual(1);
  });

  it("has nav links", () => {
    expect(siteConfig.navLinks.length).toBeGreaterThanOrEqual(1);
  });

  it("resume path starts with /", () => {
    expect(siteConfig.resumePath.startsWith("/")).toBe(true);
  });

  it("no em dashes in any text content", () => {
    const allText = JSON.stringify(siteConfig);
    expect(allText).not.toContain("\u2014");
  });
});
