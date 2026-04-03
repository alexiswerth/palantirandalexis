import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

import NavBar from "@/components/NavBar";

describe("NavBar", () => {
  it("renders logo", () => {
    render(<NavBar />);
    expect(screen.getByText("AW")).toBeInTheDocument();
  });

  it("renders desktop nav links", () => {
    render(<NavBar />);
    expect(screen.getByText("Why Anthropic")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders Get in Touch button with correct href", () => {
    render(<NavBar />);
    const ctaButtons = screen.getAllByText("Get in Touch");
    ctaButtons.forEach(btn => {
      expect(btn.closest("a")).toHaveAttribute("href", "mailto:awerth13@gmail.com");
    });
  });

  it("toggles mobile menu", () => {
    render(<NavBar />);
    const toggle = screen.getByRole("button");
    fireEvent.click(toggle);
    // Mobile menu items rendered (duplicates of desktop)
    const links = screen.getAllByText("Why Anthropic");
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it("closes mobile menu on link click", () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole("button"));
    const mobileLinks = screen.getAllByText("Experience");
    // Click the mobile one (last)
    fireEvent.click(mobileLinks[mobileLinks.length - 1]);
  });

  // Edge: scroll state
  it("responds to scroll events", () => {
    render(<NavBar />);
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);
  });
});
