import { motion } from "framer-motion";
import { CheckCircle2, Brain, Shield, Zap, Globe } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

const iconMap: Record<string, React.ElementType> = { Brain, Shield, Zap, Globe };

const ValuePropositionSection = () => {
  return (
    <section id="value-proposition" className="py-16 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="section-heading">What I Bring to Your Team</h2>
          <div className="accent-line mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.fitItems.map((fi, i) => {
            const Icon = iconMap[fi.iconName] || Brain;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="experience-card flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-muted-foreground/10 text-muted-foreground shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body">
                      {fi.label}
                    </p>
                  </div>
                  <p className="text-base font-semibold text-accent font-body leading-snug mb-5">
                    {fi.jobReq}
                  </p>
                  <div className="w-full h-px bg-border mb-5" />
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body">
                      What I Bring
                    </p>
                  </div>
                  <p className="text-sm text-accent/85 font-body leading-relaxed">
                    {fi.myFit}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                  {fi.tags.map((tag) => (
                    <span key={tag} className="fit-badge">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
