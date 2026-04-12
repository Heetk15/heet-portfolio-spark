import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import useTypingAnimation from "@/hooks/useTypingAnimation";
import ScrollReveal from "@/components/ScrollReveal";

const roles = [
  "Full Stack Developer",
  "AI Systems Builder",
  "Machine Learning Enthusiast",
  "Data-Driven Product Developer",
];

const HeroSection = () => {
  const typedText = useTypingAnimation(roles, 70, 40, 2200);

  return (
    <ScrollReveal>
      <section
        className="min-h-[90vh] flex items-center pt-14 relative overflow-hidden"
      >
        <div className="section-container w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div
              className="md:col-span-5 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] as const }}
            >
              <div className="relative">
                <div className="absolute -inset-12 rounded-full avatar-radial-light" />
                <div
                  className="relative w-[340px] h-[340px] rounded-2xl overflow-hidden border border-white/10 avatar-float"
                  style={{ boxShadow: "0 0 40px rgba(34, 211, 238, 0.15)" }}
                >
                  <img src="/developer-workspace.png" alt="Developer Workspace" className="w-full h-full object-cover rounded-2xl opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 shadow-[0_0_30px_rgba(34,211,238,0.15)] border border-white/5" />
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-7 flex flex-col gap-10 text-center md:text-left">
              <motion.h1
                className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0, 0, 1] as const }}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Heet Kothari.</span>
              </motion.h1>

              <motion.div
                className="h-9 md:h-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] as const }}
              >
                <span className="text-lg md:text-xl font-normal text-primary">
                  {typedText}
                </span>
                <span className="inline-block w-0.5 h-5 md:h-6 ml-0.5 animate-pulse align-middle bg-primary" />
              </motion.div>

              <motion.p
                className="max-w-[54ch] text-lg leading-relaxed mx-auto md:mx-0 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] as const }}
              >
                Computer Engineering student building intelligent systems, data-driven products, and AI powered applications. Interested in full stack architecture, machine learning and financial technology.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0, 0, 1] as const }}
              >
                <a
                  href="#projects"
                  className="hero-button glow-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-foreground font-semibold text-sm"
                >
                  <ArrowDown size={16} /> View Projects
                </a>
                <a
                  href="/Heet_Kothari_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button glow-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-foreground font-medium text-sm"
                >
                  <FileText size={16} /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="cta-button inline-flex items-center gap-2"
                >
                  <Mail size={16} /> Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default HeroSection;
