import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import WhyAnthropicSection from "@/components/WhyAnthropicSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <WhyAnthropicSection />
      <ExperienceSection />
      <EducationSection />

      {/* Footer */}
      <footer className="py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container max-w-5xl mx-auto px-6"
        >
          <p className="text-sm text-muted-foreground font-body flex items-center justify-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> for Anthropic
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Index;
