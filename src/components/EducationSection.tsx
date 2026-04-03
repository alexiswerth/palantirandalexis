import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">Education & Credentials</h2>
          <div className="accent-line mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="experience-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary">Juris Doctor</h3>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  City University of New York, New York, NY
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
            className="experience-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary">Bachelor of Science</h3>
                <p className="text-accent font-body text-sm font-medium mt-0.5">Industrial & Labor Relations</p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Cornell University, Ithaca, NY
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.24, duration: 0.6, ease: "easeOut" }}
            className="experience-card md:col-span-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary">Bar Admissions</h3>
                <div className="flex gap-3 mt-2">
                  <span className="fit-badge">New York</span>
                  <span className="fit-badge">New Jersey</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
