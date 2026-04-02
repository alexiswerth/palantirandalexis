import { motion } from "framer-motion";
import { CheckCircle2, Brain, Shield, FileText, Users, Zap, Globe } from "lucide-react";

const fitItems = [
  {
    icon: Brain,
    jobReq: "Advise on AI data usage, privacy, and cross-border compliance",
    myFit: "Designed Drata's privacy program end-to-end — AI compliance, DataGrail workflows, cookie/pixel governance. Primary point of contact for all privacy requests, partnering with Product to embed legal at the development level.",
    tags: ["AI Compliance", "Privacy", "Data Governance"],
  },
  {
    icon: Shield,
    jobReq: "8+ years in-house with deep AI and technology law expertise",
    myFit: "8+ years spanning in-house roles at Drata, Snappy, Mimecast, and Prometric. Handles majority of commercial deal flow — DPAs, MSAs, NDAs. JD from CUNY, BS from Cornell ILR. NY & NJ bar admissions.",
    tags: ["8+ Years", "In-house", "Commercial"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyAnthropicSection = () => {
  return (
    <section id="why-anthropic" className="py-24 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Why I'm Your Frontier Counsel</h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto">
            A direct mapping of Anthropic's requirements to my experience — 
            every qualification, addressed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {fitItems.map((fi, i) => (
            <motion.div key={i} variants={item} className="experience-card flex flex-col justify-between min-h-[320px]">
              {/* Top: What Anthropic Needs */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                    <fi.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent font-body">
                    What Anthropic Needs
                  </p>
                </div>
                <p className="text-base font-semibold text-primary font-heading leading-snug mb-5">
                  {fi.jobReq}
                </p>
                <div className="w-full h-px bg-border mb-5" />
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-primary/40" />
                  <p className="text-xs font-medium uppercase tracking-wider text-primary/50 font-body">
                    What I Bring
                  </p>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {fi.myFit}
                </p>
              </div>

              {/* Bottom: Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                {fi.tags.map((tag) => (
                  <span key={tag} className="fit-badge">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAnthropicSection;
