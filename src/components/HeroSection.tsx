import { motion } from "framer-motion";
import headshot from "@/assets/alexis-headshot.jpg";
import { Mail, Phone, MapPin, Scale } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-muted/30 shadow-2xl shadow-black/30">
              <img src={headshot} alt="Alexis Werth" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight font-heading text-primary"
          >
            Alexis Werth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-sm font-body font-medium tracking-[0.25em] uppercase text-muted-foreground"
          >
            Esq.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-lg md:text-xl font-heading italic text-navy-light leading-relaxed">
              Your Next{" "}
              <span className="text-accent font-semibold not-italic">Frontier Counsel</span>
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed font-body">
              In-house counsel with 8+ years at the intersection of AI, privacy, and technology law.
              Deep expertise in privacy program design, AI compliance, complex commercial transactions,
              and legal ops.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-body"
          >
            <a href="mailto:awerth13@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> awerth13@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="tel:5163198772" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> 516.319.8772
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> New York, NY
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Scale className="w-4 h-4" /> NY & NJ Bar
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <a
              href="#why-anthropic"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/20"
            >
              Why I'm Your Frontier Counsel ↓
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
