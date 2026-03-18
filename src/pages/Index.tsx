import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="section-container">
    <motion.div
      className="h-px w-full"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(139,92,246,0.2), transparent)",
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] as const }}
    />
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-transparent relative">
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
