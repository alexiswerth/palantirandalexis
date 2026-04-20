// Lightweight performance + logging utilities for production monitoring

interface PerfEntry {
  name: string;
  duration: number;
  timestamp: number;
}

interface ErrorEntry {
  message: string;
  stack?: string | null;
  timestamp: number;
}

interface PerfMetrics {
  renders: PerfEntry[];
  errors: ErrorEntry[];
  navigations: PerfEntry[];
  startTime: number;
}

// Global metrics store
const metrics: PerfMetrics = {
  renders: [],
  errors: [],
  navigations: [],
  startTime: Date.now(),
};

// Expose for ErrorBoundary and debugging (dev-only to avoid leaking error/stack data to third-party scripts in production)
if (typeof window !== "undefined" && import.meta.env.DEV) {
  (window as any).__perf_metrics = metrics;
}

export function logRender(componentName: string, durationMs: number) {
  const entry: PerfEntry = {
    name: componentName,
    duration: durationMs,
    timestamp: Date.now(),
  };
  metrics.renders.push(entry);

  if (durationMs > 16) {
    console.warn(`[Perf] Slow render: ${componentName} took ${durationMs.toFixed(1)}ms (> 16ms frame budget)`);
  }
}

export function logNavigation(section: string) {
  metrics.navigations.push({
    name: section,
    duration: Date.now() - metrics.startTime,
    timestamp: Date.now(),
  });
}

export function logError(message: string, stack?: string | null) {
  metrics.errors.push({ message, stack, timestamp: Date.now() });
  console.error(`[App Error] ${message}`);
}

export function getMetricsSummary() {
  const avgRender = metrics.renders.length
    ? metrics.renders.reduce((s, r) => s + r.duration, 0) / metrics.renders.length
    : 0;
  const slowRenders = metrics.renders.filter(r => r.duration > 16);

  return {
    totalRenders: metrics.renders.length,
    avgRenderMs: Number(avgRender.toFixed(2)),
    slowRenders: slowRenders.length,
    totalErrors: metrics.errors.length,
    totalNavigations: metrics.navigations.length,
    uptimeMs: Date.now() - metrics.startTime,
  };
}

// Web Vitals logging (if Performance API available)
export function logWebVitals() {
  if (typeof window === "undefined" || !window.performance) return;

  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  if (nav) {
    console.log(`[Vitals] DOM Interactive: ${nav.domInteractive.toFixed(0)}ms`);
    console.log(`[Vitals] DOM Complete: ${nav.domComplete.toFixed(0)}ms`);
    console.log(`[Vitals] Load Event: ${nav.loadEventEnd.toFixed(0)}ms`);
  }

  // LCP observer
  if ("PerformanceObserver" in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        console.log(`[Vitals] LCP: ${last.startTime.toFixed(0)}ms`);
      });
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // Not supported
    }
  }
}

export { metrics };
