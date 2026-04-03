import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Whether to add the secondary background */
  altBg?: boolean;
  /** Center the section heading */
  centerHeading?: boolean;
  heading?: string;
  showAccentLine?: boolean;
}

const SectionWrapper = ({
  id,
  children,
  className = "",
  altBg = false,
  heading,
  showAccentLine = true,
}: SectionWrapperProps) => {
  return (
    <section id={id} className={`py-24 ${altBg ? "bg-secondary/50" : ""} ${className}`}>
      <div className="container max-w-5xl mx-auto px-6">
        {heading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="section-heading">{heading}</h2>
            {showAccentLine && <div className="accent-line mt-4" />}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
