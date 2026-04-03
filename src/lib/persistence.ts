// Persistence layer: localStorage with fallback for SSR/incognito

const PREFIX = "aw_resume_";

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeSet<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage full or unavailable (incognito)
  }
}

function safeRemove(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {}
}

// Specific persistence helpers
export function getExpandedCards(): Record<string, boolean> {
  return safeGet("expanded_cards", {});
}

export function setExpandedCard(id: string, expanded: boolean): void {
  const cards = getExpandedCards();
  cards[id] = expanded;
  safeSet("expanded_cards", cards);
}

export function getScrollPosition(): number {
  return safeGet("scroll_y", 0);
}

export function setScrollPosition(y: number): void {
  safeSet("scroll_y", y);
}

export function getEarlierExpanded(): boolean {
  return safeGet("earlier_expanded", false);
}

export function setEarlierExpanded(expanded: boolean): void {
  safeSet("earlier_expanded", expanded);
}

export function clearAll(): void {
  const keys = ["expanded_cards", "scroll_y", "earlier_expanded"];
  keys.forEach(safeRemove);
}

export { safeGet, safeSet, safeRemove };
