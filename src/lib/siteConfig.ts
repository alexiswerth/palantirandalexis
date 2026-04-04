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

export interface SiteConfig {
  name: string;
  suffix: string;
  tagline: string;
  bio: string;
  linkedin: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  barAdmissions: string[];
  community: string;
  resumePath: string;
  ctaLabel: string;
  ctaAnchor: string;
  experiences: ExperienceData[];
  earlierRoles: string[];
  fitItems: FitItem[];
  education: EducationData[];
  navLinks: { label: string; href: string }[];
}

const siteConfig: SiteConfig = {
  name: "Alexis Werth",
  suffix: "Esq.",
  tagline: "Where Legal Meets Product & Innovation",
  bio: "In-house counsel with 8+ years navigating high-growth tech companies. Deep expertise in AI compliance, data privacy, commercial transactions, and legal operations. Ready to lead your legal function from growth stage to IPO and beyond.",
  linkedin: "https://www.linkedin.com/in/alexis-werth-80496b30/",
  email: "awerth13@gmail.com",
  phone: "5163198772",
  phoneDisplay: "516.319.8772",
  location: "New York, NY",
  barAdmissions: ["New York", "New Jersey"],
  community: "Counselwell Region Lead (NYC)",
  resumePath: "/Alexis_Werth_Resume.pdf",
  ctaLabel: "See What I Bring",
  ctaAnchor: "#value-proposition",

  navLinks: [
    { label: "Why Me", href: "#value-proposition" },
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
        "Day-to-day operational backbone and second to SVP, Legal in a two-person legal team driving execution across commercial, privacy, AI compliance, and legal ops.",
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
    "Fractional Corporate Counsel \u2013 Axiom",
    "Commercial & Product Counsel \u2013 Cisson",
    "Counsel \u2013 United Federation of Teachers",
    "Litigation Associate \u2013 Gottlieb & Janey",
    "Law Clerk \u2013 EEOC, Administrative Judge's Division",
    "Peggy Browning Fellow \u2013 Meyer, Suozzi, English & Klein, P.C.",
    "Law Clerk \u2013 NLRB, Region 2",
    "Director, Legal & Business Affairs \u2013 Kasirer LLC",
  ],

  fitItems: [
    {
      iconName: "Brain",
      label: "AI & Privacy",
      jobReq: "Lead AI governance, privacy strategy, and cross-border data compliance",
      myFit: "Designed Drata's privacy program end-to-end: AI compliance, DataGrail workflows, cookie/pixel governance. Primary point of contact for all privacy requests, partnering with Product to embed legal at the development level.",
      tags: ["AI Governance", "Privacy Strategy", "Data Compliance"],
    },
    {
      iconName: "Shield",
      label: "Legal Operations",
      jobReq: "Scale legal operations from growth stage through IPO readiness",
      myFit: "8+ years spanning in-house roles at Drata, Snappy, Mimecast, and Prometric. Handles majority of commercial deal flow (DPAs, MSAs, NDAs). Built AI-powered legal ops workflows that cut processing time by 30%.",
      tags: ["Legal Ops", "Commercial", "Scalability"],
    },
    {
      iconName: "Zap",
      label: "Product & Innovation",
      jobReq: "Drive innovation at the intersection of product, engineering, and legal",
      myFit: "Resident AI architect for Legal: identifying, stress-testing, and deploying AI tools to reshape how legal work gets done. Partners with Product to embed legal review at the development level, not as an afterthought.",
      tags: ["Innovation Counsel", "Product Legal", "AI Tools"],
    },
    {
      iconName: "Globe",
      label: "Regulatory & Compliance",
      jobReq: "Navigate complex regulatory landscapes across jurisdictions",
      myFit: "NY & NJ bar admissions. JD from CUNY, BS from Cornell ILR. Deep experience with DPAs, cross-border data transfers, and multi-jurisdictional compliance frameworks for SaaS platforms.",
      tags: ["Regulatory", "Cross-Border", "Multi-Jurisdiction"],
    },
  ],

  education: [
    { degree: "Juris Doctor", school: "City University of New York", location: "New York, NY" },
    { degree: "Bachelor of Science", field: "Industrial & Labor Relations", school: "Cornell University", location: "Ithaca, NY" },
  ],
};

export default siteConfig;
