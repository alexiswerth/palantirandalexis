import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { ChevronDown, Building2, Calendar, Briefcase } from "lucide-react";
import { getExpandedCards, setExpandedCard, getEarlierExpanded, setEarlierExpanded } from "@/lib/persistence";
import siteConfig from "@/lib/siteConfig";
import type { ExperienceData } from "@/lib/siteConfig";

const ExperienceCard = ({ exp, index }: { exp: ExperienceData; index: number }) => {
  const savedState = getExpandedCards();
  const [isOpen, setIsOpen] = useState(savedState[exp.id] ?? index === 0);

  const handleToggle = useCallback(() => {
    const next = !isOpen;
    setIsOpen(next);
    setExpandedCard(exp.id, next);
  }, [isOpen, exp.id]);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute left-6 top-16 bottom-0 w-px bg-border hidden md:block" />

      <div className="experience-card ml-0 md:ml-14">
        <div className="absolute -left-[7px] top-8 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background hidden md:block" />

        <button onClick={handleToggle} className="w-full text-left">
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

const EarlierRoleItem = ({ role, index }: { role: string; index: number }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="relative flex items-start gap-4 pl-6"
  >
    <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
    <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full bg-muted-foreground/40 border border-border" />
    <div className="flex items-center gap-2 py-1.5">
      <Briefcase className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
      <span className="text-sm text-muted-foreground font-body">{role}</span>
    </div>
  </motion.li>
);

const ExperienceSection = () => {
  const [showEarlier, setShowEarlier] = useState(getEarlierExpanded());

  const handleEarlierToggle = useCallback(() => {
    setShowEarlier(prev => {
      const next = !prev;
      setEarlierExpanded(next);
      return next;
    });
  }, []);

  return (
    <section id="experience" className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="space-y-6">
          {siteConfig.experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 ml-0 md:ml-14"
        >
          <button
            onClick={handleEarlierToggle}
            className="flex items-center gap-2 text-sm font-medium text-accent font-body hover:opacity-80 transition-opacity"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${showEarlier ? "rotate-180" : ""}`} />
            Additional Experience
          </button>
          <motion.div
            initial={false}
            animate={{ height: showEarlier ? "auto" : 0, opacity: showEarlier ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-0 ml-2">
              {siteConfig.earlierRoles.map((role, i) => (
                <EarlierRoleItem key={role} role={role} index={i} />
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
