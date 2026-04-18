import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, CheckCircle2, ArrowRight } from "lucide-react";

const jobMeta = {
  company: "Palantir Technologies",
  role: "Commercial Counsel",
  location: "New York, NY (Hybrid)",
  url: "https://jobs.lever.co/palantir/12e174ac-e32a-4990-b21e-6abc49b5fb8d",
};

const matches = [
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
];

const JobMatchSection = () => {
  return (
    <section id="job-match" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-body font-medium uppercase tracking-wider text-accent mb-4">
            <Briefcase className="w-3.5 h-3.5" /> Tailored Application
          </span>
          <h2 className="section-heading">Why I'm Built for This Role</h2>
          <div className="accent-line mx-auto mt-4" />
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {jobMeta.company}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {jobMeta.role}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {jobMeta.location}</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {matches.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="experience-card"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-primary font-body leading-snug">
                    {m.requirement}
                  </p>
                  <div className="flex items-start gap-2 mt-2">
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {m.proof}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href={jobMeta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
          >
            View the original job posting <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobMatchSection;
