import { motion } from "framer-motion";
import headshot from "@/assets/alexis-headshot.webp";
import ImageWithFallback from "@/components/ImageWithFallback";
import siteConfig from "@/lib/siteConfig";
import { Mail, Phone, MapPin, Scale, Download, Globe } from "lucide-react";

const sparkles = [
  { emoji: "\u2728", x: -120, y: -15, delay: 0, duration: 3 },
  { emoji: "\ud83c\udf3f", x: 130, y: -10, delay: 0.5, duration: 3.5 },
  { emoji: "\u2728", x: -80, y: 20, delay: 1.2, duration: 2.8 },
  { emoji: "\ud83c\udf38", x: 100, y: 15, delay: 0.8, duration: 3.2 },
  { emoji: "\u2728", x: -150, y: 5, delay: 1.5, duration: 3 },
  { emoji: "\ud83c\udf43", x: 160, y: -5, delay: 0.3, duration: 3.4 },
  { emoji: "\u2728", x: -50, y: -20, delay: 2, duration: 2.6 },
  { emoji: "\u2728", x: 60, y: 22, delay: 1.8, duration: 3.1 },
];

const HeroSection = () => {
  const { name, suffix, tagline, bio, email, phone, phoneDisplay, location, barAdmissions, community, resumePath, ctaLabel, ctaAnchor } = siteConfig;

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
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
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <motion.div
                className="absolute inset-0 blur-2xl bg-accent rounded-full scale-110"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative w-full h-full overflow-hidden shadow-2xl shadow-black/30"
                style={{ borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%' }}
                animate={{
                  boxShadow: [
                    '0 0 0 1px hsla(var(--accent) / 0.2), 0 0 15px hsla(var(--accent) / 0.05)',
                    '0 0 0 1px hsla(var(--accent) / 0.45), 0 0 25px hsla(var(--accent) / 0.15)',
                    '0 0 0 1px hsla(var(--accent) / 0.2), 0 0 15px hsla(var(--accent) / 0.05)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ImageWithFallback src={headshot} alt={name} className="w-full h-full object-cover" width={416} height={416} loading="eager" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
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
                transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
              >
                {s.emoji}
              </motion.span>
            ))}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-heading text-primary">
              {name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-sm font-body font-medium tracking-[0.25em] uppercase text-muted-foreground"
          >
            {suffix}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-lg md:text-xl font-heading italic leading-relaxed font-semibold bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(234,179,8,0.3)] animate-shimmer"
              style={{ backgroundImage: 'linear-gradient(90deg, hsl(var(--accent)), #fde68a, hsl(var(--accent)), #fde68a, hsl(var(--accent)))' }}
            >
              ✦ {tagline} ✦
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed font-body">
              {bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-body"
          >
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> {email}
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> {phoneDisplay}
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> {location}
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Scale className="w-4 h-4" /> {barAdmissions.join(" & ")} Bar
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4" /> {community}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={ctaAnchor}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent text-accent-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/20 whitespace-nowrap"
            >
              {ctaLabel} ↓
            </a>
            <a
              href={resumePath}
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
