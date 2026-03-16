import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import avatar from "@/assets/avatar.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center pt-14">
    <div className="section-container w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          className="md:col-span-5 flex justify-center md:justify-start"
          {...fadeInUp}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-muted shadow-[inset_0_2px_20px_rgba(0,0,0,0.3)]">
            <img
              src={avatar}
              alt="Heet Kothari"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <div className="md:col-span-7 flex flex-col gap-4 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            Heet Kothari
          </motion.h1>

          <motion.p
            className="text-xl font-medium text-accent"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            Full Stack & AI Systems Developer
          </motion.p>

          <motion.p
            className="max-w-[45ch] text-lg text-muted-foreground leading-relaxed mx-auto md:mx-0"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            Computer Engineering student building intelligent systems, data-driven products, and AI powered applications. Interested in full stack architecture, machine learning and financial technology.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <ArrowDown size={16} /> View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <FileText size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
