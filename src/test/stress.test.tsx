import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div>{children}</div>,
    span: ({ children, ...props }: any) => <span>{children}</span>,
    p: ({ children, ...props }: any) => <p>{children}</p>,
    nav: ({ children, ...props }: any) => <nav>{children}</nav>,
    li: ({ children, ...props }: any) => <li>{children}</li>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
}));

vi.mock("@/assets/alexis-headshot.webp", () => ({ default: "mock.webp" }));

import Index from "@/pages/Index";

describe("Stress Tests", () => {
  it("full page renders without crashing", async () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    // Wait for the loader to transition
    await vi.waitFor(() => {
      expect(container.querySelector("footer")).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("survives 50 rapid full-page mounts/unmounts", () => {
    for (let i = 0; i < 50; i++) {
      const { unmount } = render(
        <MemoryRouter>
          <Index />
        </MemoryRouter>
      );
      unmount();
    }
  });

  it("handles window resize events during render", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    for (let w = 320; w <= 1920; w += 100) {
      Object.defineProperty(window, "innerWidth", { value: w, writable: true });
      window.dispatchEvent(new Event("resize"));
    }
  });

  it("handles rapid scroll events", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    for (let i = 0; i < 100; i++) {
      Object.defineProperty(window, "scrollY", { value: i * 50, writable: true });
      window.dispatchEvent(new Event("scroll"));
    }
  });

  it("all text content is non-empty", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const headings = container.querySelectorAll("h1, h2, h3");
    headings.forEach(h => {
      expect(h.textContent!.trim().length).toBeGreaterThan(0);
    });
  });

  it("all links have valid href", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const links = container.querySelectorAll("a[href]");
    links.forEach(link => {
      const href = link.getAttribute("href")!;
      expect(href.length).toBeGreaterThan(0);
      expect(href).not.toBe("#undefined");
      expect(href).not.toContain("undefined");
    });
  });

  it("entire page has zero em dashes", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    expect(container.textContent).not.toContain("\u2014");
  });
});
