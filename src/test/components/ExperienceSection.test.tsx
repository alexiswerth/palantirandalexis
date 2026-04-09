import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, animate, initial, whileInView, variants, ...props }: any) => <div {...props}>{children}</div>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
}));

import ExperienceSection from "@/components/ExperienceSection";

describe("ExperienceSection", () => {
  it("renders section heading", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders all experience companies", () => {
    render(<ExperienceSection />);
    expect(screen.getByText("Drata Inc.")).toBeInTheDocument();
    expect(screen.getByText("Snappy App, Inc.")).toBeInTheDocument();
    expect(screen.getByText("Mimecast")).toBeInTheDocument();
    expect(screen.getByText("Prometric")).toBeInTheDocument();
  });

  it("first card is expanded by default", () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/Day-to-day operational lead/)).toBeInTheDocument();
  });

  it("toggles experience card on click", () => {
    render(<ExperienceSection />);
    const drataButton = screen.getByText("Drata Inc.").closest("button");
    expect(drataButton).toBeTruthy();
    fireEvent.click(drataButton!);
  });

  it("shows earlier experience on toggle", () => {
    render(<ExperienceSection />);
    const toggle = screen.getByText(/Earlier Experience/);
    fireEvent.click(toggle);
    expect(screen.getByText(/Commercial & Product Counsel/)).toBeInTheDocument();
    expect(screen.getByText(/NLRB, Region 2/)).toBeInTheDocument();
  });

  it("renders correct number of earlier roles", () => {
    render(<ExperienceSection />);
    fireEvent.click(screen.getByText(/Earlier Experience/));
    const roles = screen.getAllByText(/Counsel|Director|Fellow|Clerk|Associate/);
    expect(roles.length).toBeGreaterThanOrEqual(7);
  });

  it("contains no em dashes", () => {
    render(<ExperienceSection />);
    fireEvent.click(screen.getByText(/Earlier Experience/));
    const { container } = render(<ExperienceSection />);
    expect(container.textContent).not.toContain("\u2014");
  });

  it("survives 100 rapid renders", () => {
    for (let i = 0; i < 100; i++) {
      const { unmount } = render(<ExperienceSection />);
      unmount();
    }
  });
});
