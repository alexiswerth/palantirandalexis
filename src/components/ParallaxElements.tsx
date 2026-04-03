import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxElements = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft golden orb, top-right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[15%] right-[8%] w-64 h-64 rounded-full opacity-[0.04]"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-accent blur-3xl" />
      </motion.div>

      {/* Small diamond, left side */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] left-[5%] w-3 h-3 rotate-45 border border-accent/15 opacity-60"
        aria-hidden
      />

      {/* Thin ring, right side */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[60%] right-[12%] w-20 h-20 rounded-full border border-primary/10 opacity-40"
        aria-hidden
      />

      {/* Dot cluster, bottom-left */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[75%] left-[15%] flex gap-2 opacity-30"
        aria-hidden
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/10" />
      </motion.div>

      {/* Subtle line, mid-right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[30%] right-[25%] w-px h-24 bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-50"
        aria-hidden
      />
    </div>
  );
};

export default ParallaxElements;
