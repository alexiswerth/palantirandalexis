// Site data configuration: single source of truth for all content
// Edit here to update the entire site
//
// To target a different posting:
//   1. Add or edit a file in src/lib/targetRoles/
//   2. Export it from src/lib/targetRoles/index.ts
//   3. Swap the import below from `palantirCommercialCounsel` to your role
import { palantirCommercialCounsel } from "./targetRoles";
// Example alternate role (kept for reference):
// import { stripeCommercialCounsel } from "./targetRoles";


export interface ExperienceData {
  id: string;
  company: string;
  subtitle: string;
  title: string;
  period: string;
  highlights: string[];
}

export interface FitItem {
  iconName: string;
  label: string;
  jobReq: string;
  myFit: string;
  tags: string[];
}

export interface EducationData {
  degree: string;
  field?: string;
  school: string;
  location: string;
}

export interface JobMatchPoint {
  iconName: string;
  label: string;
  requirement: string;
  proof: string;
  tags: string[];
}

export interface TargetRole {
  // Identity
  company: string;
  role: string;
  location: string;
  url: string;

  // Hero copy
  heroSuffix: string;
  tagline: string;
  bio: string;

  // CTA + nav
  ctaLabel: string;
  navLabel: string;

  // Job-match section
  badgeLabel: string;
  sectionHeading: string;
  matches: JobMatchPoint[];

  // SEO (consumed by Vite plugin to inject into index.html at build time)
  seoTitle: string;
  seoDescription: string;
  seoOgImageAlt: string;
}

export interface SiteConfig {
  name: string;
  suffix: string;            // derived from targetRole.heroSuffix
  tagline: string;           // derived from targetRole.tagline
  bio: string;               // derived from targetRole.bio
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  barAdmissions: string[];
  community: string;
  resumePath: string;
  ctaLabel: string;          // derived from targetRole.ctaLabel
  ctaAnchor: string;
  targetRole: TargetRole;
  experiences: ExperienceData[];
  earlierRoles: string[];
  fitItems: FitItem[];
  education: EducationData[];
  navLinks: { label: string; href: string }[];
}

// Active target role - swap the import at the top of this file to retarget.
const targetRole: TargetRole = palantirCommercialCounsel;

const siteConfig: SiteConfig = {
  name: "Alexis Werth",
  // Derived from targetRole
  suffix: targetRole.heroSuffix,
  tagline: targetRole.tagline,
  bio: targetRole.bio,
  ctaLabel: targetRole.ctaLabel,

  linkedin: "https://www.linkedin.com/in/alexis-werth-80496b30/",
  github: "https://github.com/alexiswerth",
  email: "awerth13@gmail.com",
  phone: "5163198772",
  phoneDisplay: "516.319.8772",
  location: "New York, NY",
  barAdmissions: ["New York", "New Jersey"],
  community: "Counselwell Region Lead (NYC)",
  resumePath: "/Alexis_Werth_Resume.pdf",
  ctaAnchor: "#job-match",

  targetRole,

  // Derived: first nav link uses targetRole.navLabel
  navLinks: [
    { label: targetRole.navLabel, href: "#job-match" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ],

  experiences: [
    {
      id: "drata",
      company: "Drata Inc.",
      subtitle: "Agentic Trust Management Platform",
      title: "Senior Corporate Counsel",
      period: "2025 \u2013 Present",
      highlights: [
        "Day-to-day operational lead and second to SVP, Legal in a two-person legal team driving execution across commercial, privacy, AI compliance, and legal ops.",
        "Designed and implemented Drata's privacy program end-to-end, including building the intake and response system, configuring DataGrail workflows, and managing cookie, pixel, and AI compliance.",
        "Drata Legal's resident AI architect: identifying, stress-testing, and deploying AI tools across the legal function to reshape how legal work gets done.",
        "Handles the majority of Drata's commercial deal flow, negotiating hundreds of agreements including DPAs, MSAs, and NDAs.",
        "Driving comprehensive revamp of GTM-Legal process, including establishing elevated negotiation thresholds and building AI-powered legal ops workflows.",
      ],
    },
    {
      id: "snappy",
      company: "Snappy App, Inc.",
      subtitle: "Series D SaaS E-Commerce Gifting Platform",
      title: "Corporate Counsel",
      period: "2023 \u2013 2025",
      highlights: [
        "Go-to-market legal lead, negotiating complex commercial agreements with focus on AI, data privacy, security, and IP.",
        "Instrumental in closing customer deals that drove over 50% of the company's total annual sales revenue for 2024.",
        "Managed review and negotiation of $14M+ in annual procurement as Legal's representative for Procurement Committee.",
        "Reduced sales request processing time by 30% after leading the design and implementation of an Ironclad-Salesforce workflow integration.",
      ],
    },
    {
      id: "mimecast",
      company: "Mimecast",
      subtitle: "PE-Backed SaaS Cybersecurity Platform",
      title: "Fractional Commercial Counsel",
      period: "2022",
      highlights: [
        "Redlined and negotiated SaaS Agreements, NDAs, DPAs, RFPs, MSAs, and more.",
        "Improved internal processes through customer and vendor contract template creation.",
      ],
    },
    {
      id: "prometric",
      company: "Prometric",
      subtitle: "PE-Backed SaaS Assessment Platform",
      title: "Fractional Corporate Counsel",
      period: "2022",
      highlights: [
        "Supported VP of Legal Affairs with redline and negotiation of SaaS Agreements and RFPs.",
        "Drafted SOWs, MSAs, DPAs, and SLAs. Reviewed and updated company terms and conditions.",
      ],
    },
    {
      id: "cision",
      company: "Brandwatch (now Cision)",
      subtitle: "Global SaaS Consumer Intelligence Platform",
      title: "Commercial & Product Counsel",
      period: "2021",
      highlights: [
        "Commercial and product counsel supporting SaaS contracting, product launches, and go-to-market initiatives across a global consumer intelligence platform.",
        "Negotiated SaaS agreements, DPAs, and partner deals with a focus on data rights, IP, and privacy.",
      ],
    },
  ],

  earlierRoles: [
    "Director, Legal & Business Affairs \u2013 Kasirer LLC",
    "Counsel \u2013 United Federation of Teachers",
    "Litigation Associate \u2013 Gottlieb & Janey",
    "Law Clerk \u2013 EEOC, Administrative Judge's Division",
    "Peggy Browning Fellow \u2013 Meyer, Suozzi, English & Klein, P.C.",
    "Law Clerk \u2013 NLRB, Region 2",
  ],

  fitItems: [],

  education: [
    { degree: "Juris Doctor", school: "City University of New York", location: "New York, NY" },
    { degree: "Bachelor of Science", field: "Industrial & Labor Relations", school: "Cornell University", location: "Ithaca, NY" },
  ],
};

export default siteConfig;
