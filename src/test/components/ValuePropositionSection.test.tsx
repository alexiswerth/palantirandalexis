import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, variants, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

import ValuePropositionSection from "@/components/ValuePropositionSection";

describe("ValuePropositionSection", () => {
  it("renders section heading", () => {
    render(<ValuePropositionSection />);
    expect(screen.getByText("What I Bring to Your Team")).toBeInTheDocument();
  });

  it("renders fit cards", () => {
    render(<ValuePropositionSection />);
    expect(screen.getAllByText("What I Bring").length).toBeGreaterThanOrEqual(2);
  });

  it("renders tags", () => {
    render(<ValuePropositionSection />);
    expect(screen.getByText("AI Governance")).toBeInTheDocument();
    expect(screen.getByText("Privacy Strategy")).toBeInTheDocument();
  });

  it("contains no em dashes", () => {
    const { container } = render(<ValuePropositionSection />);
    expect(container.textContent).not.toContain("\u2014");
  });
});
