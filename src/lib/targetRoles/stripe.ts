import type { TargetRole } from "../siteConfig";

/**
 * Example role - kept as a reference template for swapping postings.
 * To activate, change the import in src/lib/siteConfig.ts.
 */
export const stripeCommercialCounsel: TargetRole = {
  company: "Stripe",
  role: "Commercial Counsel, Enterprise",
  location: "New York, NY (Hybrid)",
  url: "https://stripe.com/jobs/listing/commercial-counsel-enterprise/0000000",

  heroSuffix: "Esq. | Commercial Counsel Candidate, Stripe",
  tagline: "Enterprise SaaS Contracting, Payments & Scalable Legal Ops",
  bio: "In-house commercial counsel with 8+ years at high-growth SaaS companies. Lead negotiator on enterprise SaaS and payments-adjacent transactions, with a track record of building scalable legal infrastructure that lets revenue teams move faster.",

  ctaLabel: "See Why I Fit Stripe",
  navLabel: "Why Stripe",

  badgeLabel: "Tailored Application",
  sectionHeading: "Why I'm Built for This Role",
  matches: [
    {
      iconName: "Shield",
      label: "Enterprise Commercial Contracts",
      requirement: "Lead enterprise commercial contract negotiations.",
      proof: "Handles the majority of Drata's commercial deal flow; closed Snappy deals driving 50%+ of 2024 revenue.",
      tags: ["SaaS Agreements", "Enterprise Deals"],
    },
    {
      iconName: "Globe",
      label: "Cross-Functional Partnership",
      requirement: "Partner with Sales, Product, and Finance on complex deals.",
      proof: "Sole Legal rep on Snappy's Procurement Committee ($14M+ annual spend); daily partner to Sales, Security, and Product at Drata.",
      tags: ["Cross-Functional", "Procurement"],
    },
    {
      iconName: "Zap",
      label: "Scalable Contracting Infrastructure",
      requirement: "Build scalable contracting infrastructure.",
      proof: "Designed an Ironclad x Salesforce workflow that cut sales-request processing time by 30%; deploying AI tooling across Drata Legal.",
      tags: ["AI Tooling", "Legal Ops", "Ironclad"],
    },
  ],

  seoTitle: "Alexis Werth | Commercial Counsel Candidate, Stripe",
  seoDescription: "Alexis Werth, Esq.: tailored application for Stripe's Enterprise Commercial Counsel role. 8+ years in-house at high-growth SaaS leading commercial contracting and scalable legal ops.",
  seoOgImageAlt: "Alexis Werth, Esq.: Commercial Counsel candidate for Stripe",
};
