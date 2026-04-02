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
    icon: Users,
    jobReq: "Bridge technical and legal functions in a fast-moving startup",
    myFit: "Translates complex regulatory requirements into practical, scalable guidance for Product, GRC, GTM, and Engineering teams. Drata Legal's resident AI architect — deploying AI tools across the legal function. Reduced processing time 30% at Snappy via workflow automation.",
    tags: ["Cross-functional", "AI Tools", "Legal Ops"],
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
          className="grid gap-6"
        >
          {fitItems.map((fi, i) => (
            <motion.div key={i} variants={item} className="experience-card">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      <fi.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-accent font-body mb-1">
                        What Anthropic Needs
                      </p>
                      <p className="text-sm font-medium text-primary font-body leading-relaxed">
                        {fi.jobReq}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/5 text-primary shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary/60 font-body mb-1">
                        What I Bring
                      </p>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {fi.myFit}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {fi.tags.map((tag) => (
                          <span key={tag} className="fit-badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAnthropicSection;
