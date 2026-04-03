import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, variants, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

import WhyAnthropicSection from "@/components/WhyAnthropicSection";

describe("WhyAnthropicSection", () => {
  it("renders section heading", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getByText("Why I'm Your Next Frontier Counsel")).toBeInTheDocument();
  });

  it("renders both fit cards", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getAllByText("What Anthropic Needs")).toHaveLength(2);
    expect(screen.getAllByText("What I Bring")).toHaveLength(2);
  });

  it("renders tags", () => {
    render(<WhyAnthropicSection />);
    expect(screen.getByText("AI Compliance")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
    expect(screen.getByText("8+ Years")).toBeInTheDocument();
  });

  it("contains no em dashes", () => {
    const { container } = render(<WhyAnthropicSection />);
    expect(container.textContent).not.toContain("—");
  });
});
