import { lazy, Suspense, useEffect, useState } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LazyWhenVisible from "@/components/LazyWhenVisible";
import { getScrollPosition, setScrollPosition } from "@/lib/persistence";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Linkedin, Github } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import siteConfig from "@/lib/siteConfig";

const NavBar = lazy(() => import("@/components/NavBar"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
const JobMatchSection = lazy(() => import("@/components/JobMatchSection"));
const ValuePropositionSection = lazy(() => import("@/components/ValuePropositionSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ParallaxElements = lazy(() => import("@/components/ParallaxElements"));

const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger branded fade-in after a brief moment
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const savedY = getScrollPosition();
    if (savedY > 0) {
      requestAnimationFrame(() => window.scrollTo(0, savedY));
    }
    const handleUnload = () => setScrollPosition(window.scrollY);
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <AnimatePresence>
      {!loaded ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-4"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="text-3xl font-heading font-bold text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            AW
          </motion.span>
          <div className="w-12 h-0.5 bg-accent rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-background relative"
        >
          <Suspense fallback={null}>
            <ParallaxElements />
          </Suspense>

          <ErrorBoundary section="nav" inline>
            <Suspense fallback={null}>
              <NavBar />
            </Suspense>
          </ErrorBoundary>

          <main>
            <ErrorBoundary section="hero" inline>
              <Suspense fallback={<SectionFallback />}>
                <HeroSection />
              </Suspense>
            </ErrorBoundary>

            <LazyWhenVisible fallback={<SectionFallback />} rootMargin="300px">
              <ErrorBoundary section="job-match" inline>
                <Suspense fallback={<SectionFallback />}>
                  <JobMatchSection />
                </Suspense>
              </ErrorBoundary>
            </LazyWhenVisible>

            <LazyWhenVisible fallback={<SectionFallback />} rootMargin="300px">
              <ErrorBoundary section="value-proposition" inline>
                <Suspense fallback={<SectionFallback />}>
                  <ValuePropositionSection />
                </Suspense>
              </ErrorBoundary>
            </LazyWhenVisible>

            <LazyWhenVisible fallback={<SectionFallback />} rootMargin="300px">
              <ErrorBoundary section="experience" inline>
                <Suspense fallback={<SectionFallback />}>
                  <ExperienceSection />
                </Suspense>
              </ErrorBoundary>
            </LazyWhenVisible>

            <LazyWhenVisible fallback={<SectionFallback />} rootMargin="300px">
              <ErrorBoundary section="education" inline>
                <Suspense fallback={<SectionFallback />}>
                  <EducationSection />
                </Suspense>
              </ErrorBoundary>
            </LazyWhenVisible>
          </main>

          {/* Footer */}
          <footer className="py-16 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="container max-w-5xl mx-auto px-6"
            >
              <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                {/* Brand */}
                <div>
                  <span className="text-2xl font-heading font-bold text-primary">AW</span>
                  <p className="mt-3 text-sm text-muted-foreground font-body leading-relaxed max-w-xs">
                    In-house counsel at the intersection of legal, product, and innovation.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body mb-4">Navigation</h4>
                  <ul className="space-y-2">
                    {siteConfig.navLinks.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="text-sm text-muted-foreground hover:text-accent transition-colors font-body">
                          {l.label}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={siteConfig.resumePath} download className="text-sm text-muted-foreground hover:text-accent transition-colors font-body">
                        Download Resume
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body mb-4">Let's Connect</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <a href={`mailto:${siteConfig.email}`} className="p-2 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-200" aria-label="Email">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-200" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-200" aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium font-body hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-3.5 h-3.5" /> Get in Touch
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                  Built with <Heart className="w-3 h-3 text-accent fill-accent" aria-hidden="true" /> by Alexis Werth
                </p>
                <p className="text-xs text-muted-foreground/50 font-body">
                  &copy; {new Date().getFullYear()} Alexis Werth. All rights reserved.
                </p>
              </div>
            </motion.div>
          </footer>
          <ScrollToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
