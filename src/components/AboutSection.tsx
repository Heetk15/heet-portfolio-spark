import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="section-container max-w-3xl">
      <motion.h2 className="text-3xl font-bold tracking-tight text-foreground mb-8" {...fadeInUp}>
        About
      </motion.h2>

      <motion.div className="flex flex-col gap-4 text-lg text-muted-foreground leading-relaxed" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
        <p>
          Computer Engineering student at Sardar Patel Institute of Technology with interests in artificial intelligence, systems engineering, and data driven product development.
        </p>
        <p>
          Currently exploring <span className="text-foreground">AI systems</span>,{" "}
          <span className="text-foreground">financial technology</span>,{" "}
          <span className="text-foreground">scalable backend architectures</span>, and{" "}
          <span className="text-foreground">human centered product design</span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
