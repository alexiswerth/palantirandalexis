import { motion } from "framer-motion";
import headshot from "@/assets/alexis-headshot.jpg";
import { Mail, Phone, MapPin, Scale, Download, Globe } from "lucide-react";

const sparkles = [
  { emoji: "✨", x: -120, y: -15, delay: 0, duration: 3 },
  { emoji: "🌿", x: 130, y: -10, delay: 0.5, duration: 3.5 },
  { emoji: "✨", x: -80, y: 20, delay: 1.2, duration: 2.8 },
  { emoji: "🌸", x: 100, y: 15, delay: 0.8, duration: 3.2 },
  { emoji: "✨", x: -150, y: 5, delay: 1.5, duration: 3 },
  { emoji: "🍃", x: 160, y: -5, delay: 0.3, duration: 3.4 },
  { emoji: "✨", x: -50, y: -20, delay: 2, duration: 2.6 },
  { emoji: "✨", x: 60, y: 22, delay: 1.8, duration: 3.1 },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
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
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-black/30">
              <img src={headshot} alt="Alexis Werth" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Floating sparkles around name */}
            {sparkles.map((s, i) => (
              <motion.span
                key={i}
                className="absolute text-sm pointer-events-none select-none"
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: [s.x, s.x + 8, s.x - 5, s.x],
                  y: [s.y, s.y - 12, s.y + 6, s.y],
                  opacity: [0, 0.8, 0.4, 0],
                  scale: [0.5, 1, 0.7, 0.5],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  delay: s.delay,
                  ease: "easeInOut",
                }}
              >
                {s.emoji}
              </motion.span>
            ))}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading text-primary">
              Alexis Werth
            </h1>
          </motion.div>

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
            className="mt-6 max-w-2xl relative"
          >
            {/* Floating sparkles */}
            {sparkles.map((s, i) => (
              <motion.span
                key={i}
                className="absolute text-sm pointer-events-none select-none"
                style={{ left: '50%', top: '50%' }}
                animate={{
                  x: [s.x, s.x + 8, s.x - 5, s.x],
                  y: [s.y, s.y - 12, s.y + 6, s.y],
                  opacity: [0, 0.8, 0.4, 0],
                  scale: [0.5, 1, 0.7, 0.5],
                }}
                transition={{
                  duration: s.duration,
                  repeat: Infinity,
                  delay: s.delay,
                  ease: "easeInOut",
                }}
              >
                {s.emoji}
              </motion.span>
            ))}
            <p className="text-lg md:text-xl font-heading italic leading-relaxed font-semibold bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(234,179,8,0.3)] animate-shimmer"
              style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--accent)), #fde68a, hsl(var(--accent)), #fde68a, hsl(var(--accent)))' }}
            >
              ✦ Your Next Frontier Counsel ✦
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
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> Counselwell | Region Lead (NYC)
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#why-anthropic"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 whitespace-nowrap"
            >
              Why I'm Your Frontier Counsel ↓
            </a>
            <a
              href="/Alexis_Werth_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-primary/20 text-primary font-body font-medium text-sm hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
