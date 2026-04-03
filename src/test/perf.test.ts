import { describe, it, expect, vi } from "vitest";
import { logRender, logNavigation, logError, getMetricsSummary, metrics } from "@/lib/perf";

describe("Performance Metrics", () => {
  it("logs renders", () => {
    const before = metrics.renders.length;
    logRender("TestComponent", 5);
    expect(metrics.renders.length).toBe(before + 1);
    expect(metrics.renders[metrics.renders.length - 1].name).toBe("TestComponent");
  });

  it("warns on slow renders", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    logRender("SlowComponent", 20);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("Slow render"));
    warnSpy.mockRestore();
  });

  it("logs navigations", () => {
    const before = metrics.navigations.length;
    logNavigation("experience");
    expect(metrics.navigations.length).toBe(before + 1);
  });

  it("logs errors", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const before = metrics.errors.length;
    logError("Test error");
    expect(metrics.errors.length).toBe(before + 1);
    errorSpy.mockRestore();
  });

  it("returns valid summary", () => {
    const summary = getMetricsSummary();
    expect(summary).toHaveProperty("totalRenders");
    expect(summary).toHaveProperty("avgRenderMs");
    expect(summary).toHaveProperty("slowRenders");
    expect(summary).toHaveProperty("totalErrors");
    expect(summary).toHaveProperty("uptimeMs");
    expect(summary.uptimeMs).toBeGreaterThan(0);
  });
});
