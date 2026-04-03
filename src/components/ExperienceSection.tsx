import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Building2, Calendar } from "lucide-react";

interface Experience {
  company: string;
  subtitle: string;
  title: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Drata Inc.",
    subtitle: "Agentic Trust Management Platform",
    title: "Senior Corporate Counsel",
    period: "2025 – Present",
    highlights: [
      "Day-to-day operational backbone and second to SVP, Legal in a two-person legal team driving execution across commercial, privacy, AI compliance, and legal ops.",
      "Designed and implemented Drata's privacy program end-to-end, including building the intake and response system, configuring DataGrail workflows, and managing cookie, pixel, and AI compliance.",
      "Drata Legal's resident AI architect: identifying, stress-testing, and deploying AI tools across the legal function to reshape how legal work gets done.",
      "Handles the majority of Drata's commercial deal flow, negotiating hundreds of agreements including DPAs, MSAs, and NDAs.",
      "Driving comprehensive revamp of GTM-Legal process, including establishing elevated negotiation thresholds and building AI-powered legal ops workflows.",
    ],
  },
  {
    company: "Snappy App, Inc.",
    subtitle: "Series D SaaS E-Commerce Gifting Platform",
    title: "Corporate Counsel",
    period: "2023 – 2025",
    highlights: [
      "Go-to-market legal lead, negotiating complex commercial agreements with focus on AI, data privacy, security, and IP.",
      "Instrumental in closing customer deals that drove over 50% of the company's total annual sales revenue for 2024.",
      "Managed review and negotiation of $14M+ in annual procurement as Legal's representative for Procurement Committee.",
      "Reduced sales request processing time by 30% after leading the design and implementation of an Ironclad-Salesforce workflow integration.",
    ],
  },
  {
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
    company: "Prometric",
    subtitle: "PE-Backed SaaS Assessment Platform",
    title: "Fractional Corporate Counsel",
    period: "2022",
    highlights: [
      "Supported VP of Legal Affairs with redline and negotiation of SaaS Agreements and RFPs.",
      "Drafted SOWs, MSAs, DPAs, and SLAs. Reviewed and updated company terms and conditions.",
    ],
  },
];

const earlierRoles = [
  "Fractional Corporate Counsel – Axiom",
  "Commercial & Product Counsel – Cisson",
  "Counsel – United Federation of Teachers",
  "Litigation Associate – Gottlieb & Janey",
  "Law Clerk – EEOC, Administrative Judge's Division",
  "Peggy Browning Fellow – Meyer, Suozzi, English & Klein, P.C.",
  "Law Clerk – NLRB, Region 2",
  "Director, Legal & Business Affairs – Kasirer LLC",
];

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-6 top-16 bottom-0 w-px bg-border hidden md:block" />

      <div className="experience-card ml-0 md:ml-14">
        {/* Timeline dot */}
        <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background hidden md:block" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-accent" />
                <h3 className="text-lg font-semibold font-heading text-primary">{exp.company}</h3>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                {exp.subtitle}
              </p>
              <p className="text-base font-medium text-accent font-body">{exp.title}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                <Calendar className="w-3.5 h-3.5" /> {exp.period}
              </span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-3 border-t border-border pt-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground font-body leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0 mt-2" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        {/* Earlier roles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 ml-0 md:ml-14"
        >
          <button
            onClick={() => setShowEarlier(!showEarlier)}
            className="flex items-center gap-2 text-sm font-medium text-accent font-body hover:opacity-80 transition-opacity"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${showEarlier ? "rotate-180" : ""}`} />
            Earlier Experience (2015–2021)
          </button>
          <motion.div
            initial={false}
            animate={{ height: showEarlier ? "auto" : 0, opacity: showEarlier ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2">
              {earlierRoles.map((role) => (
                <li key={role} className="flex gap-3 text-sm text-muted-foreground font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-border shrink-0 mt-2" />
                  {role}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
