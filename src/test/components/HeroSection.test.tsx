import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
}));

vi.mock("@/assets/alexis-headshot.jpg", () => ({ default: "mock-headshot.jpg" }));

import HeroSection from "@/components/HeroSection";

describe("HeroSection", () => {
  it("renders name and title", () => {
    render(<HeroSection />);
    expect(screen.getByText("Alexis Werth")).toBeInTheDocument();
    expect(screen.getByText("Esq.")).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<HeroSection />);
    expect(screen.getByText("awerth13@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("516.319.8772")).toBeInTheDocument();
    expect(screen.getByText("New York, NY")).toBeInTheDocument();
    expect(screen.getByText("NY & NJ Bar")).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Why I'm Your Frontier Counsel/)).toBeInTheDocument();
    expect(screen.getByText(/Download Resume/)).toBeInTheDocument();
  });

  it("has correct mailto link", () => {
    render(<HeroSection />);
    const emailLink = screen.getByText("awerth13@gmail.com").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:awerth13@gmail.com");
  });

  it("has correct tel link", () => {
    render(<HeroSection />);
    const phoneLink = screen.getByText("516.319.8772").closest("a");
    expect(phoneLink).toHaveAttribute("href", "tel:5163198772");
  });

  it("download resume button has correct attributes", () => {
    render(<HeroSection />);
    const downloadLink = screen.getByText(/Download Resume/).closest("a");
    expect(downloadLink).toHaveAttribute("href", "/Alexis_Werth_Resume.pdf");
    expect(downloadLink).toHaveAttribute("download");
  });

  it("headshot has alt text", () => {
    render(<HeroSection />);
    expect(screen.getByAlt("Alexis Werth")).toBeInTheDocument();
  });

  it("renders all sparkle elements", () => {
    const { container } = render(<HeroSection />);
    const sparkles = container.querySelectorAll("span.absolute");
    expect(sparkles.length).toBe(8);
  });

  // Edge case: no em dashes in content
  it("contains no em dashes anywhere", () => {
    const { container } = render(<HeroSection />);
    expect(container.textContent).not.toContain("—");
  });
});
