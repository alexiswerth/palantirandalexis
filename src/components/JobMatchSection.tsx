import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, CheckCircle2, ArrowRight, Brain, Shield, Zap, Globe, Handshake, FileText, type LucideIcon } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

const iconMap: Record<string, LucideIcon> = { Brain, Shield, Zap, Globe, Handshake, FileText };

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const JobMatchSection = () => {
  const { company, role, location, url, badgeLabel, sectionHeading, matches } = siteConfig.targetRole;

  return (
    <section id="job-match" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-body font-medium uppercase tracking-wider text-accent mb-4">
            <Briefcase className="w-3.5 h-3.5" /> {badgeLabel}
          </span>
          <h2 className="section-heading">{sectionHeading}</h2>
          <div className="accent-line mx-auto mt-4" />
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4" /> {company}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {role}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {location}</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {matches.map((m, i) => {
            const Icon = iconMap[m.iconName] ?? Shield;
            return (
              <motion.div key={i} variants={item} className="experience-card flex flex-col justify-between min-h-[340px]">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-accent font-heading leading-tight">
                      {m.label}
                    </p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body mb-2">
                    What {company.split(" ")[0]} Needs
                  </p>
                  <p className="text-sm text-foreground/85 font-body leading-relaxed mb-5">
                    {m.requirement}
                  </p>
                  <div className="w-full h-px bg-border mb-5" />
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body">
                      What I Bring
                    </p>
                  </div>
                  <p className="text-sm text-foreground/90 font-body leading-relaxed">
                    {m.proof}
                  </p>
                </div>

                {m.tags && m.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                    {m.tags.map((tag) => (
                      <span key={tag} className="fit-badge">{tag}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {url && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-accent transition-colors"
            >
              View the original job posting <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default JobMatchSection;
