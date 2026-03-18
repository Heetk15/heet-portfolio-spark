import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const socials = [
  { icon: <Github size={22} />, href: "https://github.com/Heetk15", label: "GitHub" },
  { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/heet-kothari-03584a277", label: "LinkedIn" },
  { icon: <Mail size={22} />, href: "mailto:heetkothari011@gmail.com", label: "Email" },
];

const ContactSection = () => (
  <section id="contact" className="py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

    <div className="section-container relative text-center flex flex-col items-center gap-8">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">Let's build something together</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <motion.a
          href="mailto:heetkothari011@gmail.com"
          className="glass-card px-8 py-5 inline-flex items-center gap-3 group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail size={20} className="text-primary" />
          <span className="text-lg md:text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            heetkothari011@gmail.com
          </span>
          <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.a>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-3 rounded-xl text-muted-foreground hover:text-foreground bg-card/40 border border-border/30 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
