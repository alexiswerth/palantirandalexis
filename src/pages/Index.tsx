import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LazyWhenVisible from "@/components/LazyWhenVisible";
import { getScrollPosition, setScrollPosition } from "@/lib/persistence";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-load heavy sections for better initial load
const NavBar = lazy(() => import("@/components/NavBar"));
const HeroSection = lazy(() => import("@/components/HeroSection"));
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
  // Restore scroll position on mount
  useEffect(() => {
    const savedY = getScrollPosition();
    if (savedY > 0) {
      requestAnimationFrame(() => window.scrollTo(0, savedY));
    }

    // Persist scroll position on unload
    const handleUnload = () => setScrollPosition(window.scrollY);
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
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
      <footer className="py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent" aria-hidden="true" /> by Alexis Werth
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
