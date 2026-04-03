import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

import EducationSection from "@/components/EducationSection";

describe("EducationSection", () => {
  it("renders heading", () => {
    render(<EducationSection />);
    expect(screen.getByText("Education & Credentials")).toBeInTheDocument();
  });

  it("renders degrees", () => {
    render(<EducationSection />);
    expect(screen.getByText("Juris Doctor")).toBeInTheDocument();
    expect(screen.getByText("Bachelor of Science")).toBeInTheDocument();
    expect(screen.getByText("Industrial & Labor Relations")).toBeInTheDocument();
  });

  it("renders bar admissions", () => {
    render(<EducationSection />);
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("New Jersey")).toBeInTheDocument();
  });

  it("renders schools", () => {
    render(<EducationSection />);
    expect(screen.getByText(/City University of New York/)).toBeInTheDocument();
    expect(screen.getByText(/Cornell University/)).toBeInTheDocument();
  });

  it("contains no em dashes", () => {
    const { container } = render(<EducationSection />);
    expect(container.textContent).not.toContain("—");
  });
});
