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

const FloatingBlob = ({ className }: { className: string }) => (
  <motion.div
    className={`floating-blob ${className}`}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -25, 15, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Index = () => (
  <div className="min-h-screen bg-background relative">
    {/* Background effects */}
    <div className="gradient-mesh-bg" />
    <div className="grain-overlay" />

    {/* Floating blobs */}
    <FloatingBlob className="w-[500px] h-[500px] bg-accent/5 top-[10%] -left-[10%]" />
    <FloatingBlob className="w-[400px] h-[400px] bg-purple-500/5 top-[40%] right-[-5%]" />
    <FloatingBlob className="w-[350px] h-[350px] bg-accent/4 bottom-[20%] left-[20%]" />

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
