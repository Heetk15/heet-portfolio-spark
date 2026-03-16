import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="section-container text-center flex flex-col items-center gap-6">
      <motion.h2 className="text-3xl font-bold tracking-tight text-foreground" {...fadeInUp}>
        Get in Touch
      </motion.h2>

      <motion.a
        href="mailto:heetkothari011@gmail.com"
        className="text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground hover:text-accent transition-colors duration-200"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
      >
        heetkothari011@gmail.com
      </motion.a>

      <motion.div
        className="flex gap-4 mt-4"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.2 }}
      >
        <a
          href="https://github.com/Heetk15"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
        >
          <Github size={22} />
        </a>
        <a
          href="https://linkedin.com/in/heet-kothari-03584a277"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:heetkothari011@gmail.com"
          className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
        >
          <Mail size={22} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
