import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  safeGet, safeSet, safeRemove,
  getExpandedCards, setExpandedCard,
  getScrollPosition, setScrollPosition,
  getEarlierExpanded, setEarlierExpanded,
  clearAll,
} from "@/lib/persistence";

describe("Persistence Layer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("safeGet returns fallback for missing key", () => {
    expect(safeGet("nonexistent", 42)).toBe(42);
  });

  it("safeSet and safeGet round-trip", () => {
    safeSet("test_key", { a: 1 });
    expect(safeGet("test_key", {})).toEqual({ a: 1 });
  });

  it("safeRemove clears a key", () => {
    safeSet("test_key", "hello");
    safeRemove("test_key");
    expect(safeGet("test_key", "default")).toBe("default");
  });

  it("handles corrupted JSON gracefully", () => {
    localStorage.setItem("aw_resume_bad", "{broken json");
    expect(safeGet("bad", "fallback")).toBe("fallback");
  });

  it("handles localStorage unavailable", () => {
    const orig = Storage.prototype.getItem;
    Storage.prototype.getItem = () => { throw new Error("Blocked"); };
    expect(safeGet("test", 99)).toBe(99);
    Storage.prototype.getItem = orig;
  });

  it("expanded cards persist", () => {
    setExpandedCard("drata", true);
    setExpandedCard("snappy", false);
    const cards = getExpandedCards();
    expect(cards.drata).toBe(true);
    expect(cards.snappy).toBe(false);
  });

  it("scroll position persists", () => {
    setScrollPosition(450);
    expect(getScrollPosition()).toBe(450);
  });

  it("earlier expanded persists", () => {
    setEarlierExpanded(true);
    expect(getEarlierExpanded()).toBe(true);
  });

  it("clearAll removes all keys", () => {
    setExpandedCard("test", true);
    setScrollPosition(100);
    setEarlierExpanded(true);
    clearAll();
    expect(getExpandedCards()).toEqual({});
    expect(getScrollPosition()).toBe(0);
    expect(getEarlierExpanded()).toBe(false);
  });
});
