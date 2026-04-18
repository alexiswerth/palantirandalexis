// Site data configuration: single source of truth for all content
// Edit here to update the entire site

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
  requirement: string;
  proof: string;
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

// Define the targeted role first; the rest of siteConfig derives from it.
const targetRole: TargetRole = {
  company: "Palantir Technologies",
  role: "Commercial Counsel",
  location: "New York, NY (Hybrid)",
  url: "https://jobs.lever.co/palantir/12e174ac-e32a-4990-b21e-6abc49b5fb8d",

  heroSuffix: "Esq. | Commercial Counsel Candidate, Palantir",
  tagline: "Commercial Contracting, IP & Scalable Legal Infrastructure",
  bio: "In-house commercial counsel with 8+ years at high-growth SaaS companies. Lead negotiator on complex SaaS, licensing, and IP-heavy transactions, with a track record of building scalable legal infrastructure that lets engineering and business teams move faster. Ready to own Palantir's most strategic commercial and IP work from day one.",

  ctaLabel: "See Why I Fit Palantir",
  navLabel: "Why Palantir",

  badgeLabel: "Tailored Application",
  sectionHeading: "Why I'm Built for This Role",
  matches: [
    {
      requirement: "Lead drafting and negotiation of commercial customer contracts",
      proof: "Currently handles the majority of Drata's commercial deal flow; closed Snappy deals driving 50%+ of 2024 revenue.",
    },
    {
      requirement: "IP subject matter expert: strategic licensing and complex IP transactions",
      proof: "Negotiated IP, licensing, and data rights provisions across SaaS, procurement, and partner agreements at four in-house roles.",
    },
    {
      requirement: "Build scalable legal infrastructure for a rapidly expanding customer portfolio",
      proof: "Designed an Ironclad x Salesforce workflow that cut sales-request processing time by 30%; deploying AI tooling across Drata Legal.",
    },
    {
      requirement: "Open source management, in-licensed components, product marketing support",
      proof: "Embedded with Product and Engineering at Drata and Snappy; advises on third-party components and go-to-market materials.",
    },
    {
      requirement: "Collaborate cross-functionally with Business, Ops, Finance, and Engineering",
      proof: "Sole Legal rep on Snappy's Procurement Committee ($14M+ annual spend); daily partner to Sales, Security, and Product.",
    },
    {
      requirement: "Attorney in good standing, 3-7 years transactional experience",
      proof: "Admitted in NY and NJ; 8+ years of transactional and in-house experience across SaaS, cybersecurity, and assessment platforms.",
    },
  ],

  seoTitle: "Alexis Werth | Commercial Counsel Candidate, Palantir",
  seoDescription: "Alexis Werth, Esq.: tailored application for Palantir's Commercial Counsel role. 8+ years in-house at high-growth SaaS leading commercial contracting, IP/licensing, and scalable legal infrastructure.",
  seoOgImageAlt: "Alexis Werth, Esq.: Commercial Counsel candidate for Palantir Technologies",
};

// ---------------------------------------------------------------------------
// EXAMPLE: To target a different posting, copy the block above, edit the
// fields below, and assign it to `targetRole` (rename this to `targetRole`
// and rename the current one to something else, or just swap the values).
// Everything downstream (hero suffix, tagline, bio, CTA, nav link, SEO meta,
// JSON-LD, and the Job Match section) updates automatically.
// ---------------------------------------------------------------------------
// const targetRoleExample: TargetRole = {
//   company: "Stripe",
//   role: "Commercial Counsel, Enterprise",
//   location: "New York, NY (Hybrid)",
//   url: "https://stripe.com/jobs/listing/commercial-counsel-enterprise/0000000",
//
//   heroSuffix: "Esq. | Commercial Counsel Candidate, Stripe",
//   tagline: "Enterprise SaaS Contracting, Payments & Scalable Legal Ops",
//   bio: "In-house commercial counsel with 8+ years at high-growth SaaS companies. Lead negotiator on enterprise SaaS and payments-adjacent transactions, with a track record of building scalable legal infrastructure that lets revenue teams move faster.",
//
//   ctaLabel: "See Why I Fit Stripe",
//   navLabel: "Why Stripe",
//
//   badgeLabel: "Tailored Application",
//   sectionHeading: "Why I'm Built for This Role",
//   matches: [
//     {
//       requirement: "Lead enterprise commercial contract negotiations",
//       proof: "Handles the majority of Drata's commercial deal flow; closed Snappy deals driving 50%+ of 2024 revenue.",
//     },
//     {
//       requirement: "Partner with Sales, Product, and Finance on complex deals",
//       proof: "Sole Legal rep on Snappy's Procurement Committee ($14M+ annual spend); daily partner to Sales, Security, and Product at Drata.",
//     },
//     {
//       requirement: "Build scalable contracting infrastructure",
//       proof: "Designed an Ironclad x Salesforce workflow that cut sales-request processing time by 30%; deploying AI tooling across Drata Legal.",
//     },
//     {
//       requirement: "Attorney in good standing, 5+ years transactional experience",
//       proof: "Admitted in NY and NJ; 8+ years of transactional and in-house experience across SaaS and cybersecurity.",
//     },
//   ],
//
//   seoTitle: "Alexis Werth | Commercial Counsel Candidate, Stripe",
//   seoDescription: "Alexis Werth, Esq.: tailored application for Stripe's Enterprise Commercial Counsel role. 8+ years in-house at high-growth SaaS leading commercial contracting and scalable legal ops.",
//   seoOgImageAlt: "Alexis Werth, Esq.: Commercial Counsel candidate for Stripe",
// };

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
    { label: "What I Bring", href: "#value-proposition" },
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
  ],

  earlierRoles: [
    "Commercial & Product Counsel \u2013 Cision",
    "Director, Legal & Business Affairs \u2013 Kasirer LLC",
    "Counsel \u2013 United Federation of Teachers",
    "Litigation Associate \u2013 Gottlieb & Janey",
    "Law Clerk \u2013 EEOC, Administrative Judge's Division",
    "Peggy Browning Fellow \u2013 Meyer, Suozzi, English & Klein, P.C.",
    "Law Clerk \u2013 NLRB, Region 2",
  ],

  fitItems: [
    {
      iconName: "Shield",
      label: "Commercial Contracting",
      jobReq: "Lead drafting and negotiation of commercial customer contracts at a high-growth SaaS company",
      myFit: "Go-to-market legal lead at Snappy and Drata: negotiated hundreds of SaaS agreements (MSAs, DPAs, NDAs, SOWs, SLAs). Closed deals driving 50%+ of Snappy's 2024 revenue and currently handle the majority of Drata's commercial deal flow.",
      tags: ["SaaS Agreements", "MSA / DPA / NDA", "Revenue-Critical Deals"],
    },
    {
      iconName: "Brain",
      label: "IP & Licensing",
      jobReq: "Own strategic licensing transactions, IP components of corporate transactions, and complex IP matters",
      myFit: "Negotiated IP, licensing, and data rights provisions across SaaS and procurement deals at Snappy, Drata, Mimecast, and Prometric. Comfortable advising product and engineering on in-licensed components, IP safeguards, and product marketing matters.",
      tags: ["Licensing", "IP Transactions", "Open Source"],
    },
    {
      iconName: "Zap",
      label: "Scalable Legal Infrastructure",
      jobReq: "Build infrastructure to deliver legal support at scale to a rapidly expanding customer portfolio",
      myFit: "Designed and shipped an Ironclad x Salesforce workflow that cut sales-request processing time by 30%. Drata's resident AI architect for Legal, deploying AI tooling and elevated negotiation thresholds to scale a two-person team across hundreds of deals.",
      tags: ["Legal Ops", "Ironclad", "AI Workflows"],
    },
    {
      iconName: "Globe",
      label: "Cross-Functional Partnership",
      jobReq: "Collaborate with Business, Operations, Finance, Engineering, Product, and Technical Implementation teams",
      myFit: "Embedded with Sales, Procurement, Product, and Security across every in-house role. Sole Legal rep on Snappy's Procurement Committee ($14M+ annual spend). Partner with Product at Drata to embed legal review at the development level, not as an afterthought.",
      tags: ["Cross-Functional", "Product Partnership", "Deal Execution"],
    },
  ],

  education: [
    { degree: "Juris Doctor", school: "City University of New York", location: "New York, NY" },
    { degree: "Bachelor of Science", field: "Industrial & Labor Relations", school: "Cornell University", location: "Ithaca, NY" },
  ],
};

export default siteConfig;
