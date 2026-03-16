import { motion } from "framer-motion";
import { Brain, TrendingUp, Server, Users } from "lucide-react";

const interests = [
  { icon: <Brain size={20} />, label: "AI Systems" },
  { icon: <TrendingUp size={20} />, label: "Financial Technology" },
  { icon: <Server size={20} />, label: "Backend Architecture" },
  { icon: <Users size={20} />, label: "Human Centered Design" },
];

const AboutSection = () => (
  <section id="about" className="py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const }}
        className="mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          About <span className="text-gradient">Me</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <motion.div
          className="flex flex-col gap-4 text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] as const }}
        >
          <p>
            Computer Engineering student at Sardar Patel Institute of Technology with interests in artificial intelligence, systems engineering, and data driven product development.
          </p>
          <p>
            Currently exploring{" "}
            <span className="text-foreground font-medium">AI systems</span>,{" "}
            <span className="text-foreground font-medium">financial technology</span>,{" "}
            <span className="text-foreground font-medium">scalable backend architectures</span>, and{" "}
            <span className="text-foreground font-medium">human centered product design</span>.
          </p>
        </motion.div>

        {/* Interest cards */}
        <div className="grid grid-cols-2 gap-3">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              className="card-surface p-4 flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.2, 0, 0, 1] as const }}
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
