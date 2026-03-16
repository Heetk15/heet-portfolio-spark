import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import avatar from "@/assets/avatar.png";
import useTypingAnimation from "@/hooks/useTypingAnimation";

const roles = [
  "Full Stack Developer",
  "AI Systems Builder",
  "Machine Learning Enthusiast",
  "Data-Driven Product Developer",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const typedText = useTypingAnimation(roles, 70, 40, 2200);

  return (
    <section className="min-h-[90vh] flex items-center pt-14 relative overflow-hidden">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Avatar with glow */}
          <motion.div
            className="md:col-span-5 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] as const }}
          >
            <div className="relative">
              {/* Glow halo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 to-purple-500/20 blur-2xl scale-110" />
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-muted border border-border/50"
                style={{ boxShadow: "0 0 60px rgba(59,130,246,0.15), inset 0 2px 20px rgba(0,0,0,0.3)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={avatar} alt="Heet Kothari" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-7 flex flex-col gap-4 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tighter"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] as const }}
            >
              <span className="text-gradient">Heet Kothari</span>
            </motion.h1>

            <motion.div
              className="h-8 md:h-10"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0, 0, 1] as const }}
            >
              <span className="text-xl md:text-2xl font-medium text-accent">
                {typedText}
              </span>
              <span className="inline-block w-0.5 h-5 md:h-6 bg-accent ml-0.5 animate-pulse align-middle" />
            </motion.div>

            <motion.p
              className="max-w-[50ch] text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0, 0, 1] as const }}
            >
              Computer Engineering student building intelligent systems, data-driven products, and AI powered applications. Interested in full stack architecture, machine learning and financial technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0, 0, 1] as const }}
            >
              <a
                href="#projects"
                className="glow-button inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-all"
              >
                <ArrowDown size={16} /> View Projects
              </a>
              <a
                href="#"
                className="glow-button inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-medium text-sm hover:border-accent/50 transition-all bg-card/30 backdrop-blur-sm"
              >
                <FileText size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="glow-button inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 text-foreground font-medium text-sm hover:border-accent/50 transition-all bg-card/30 backdrop-blur-sm"
              >
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
