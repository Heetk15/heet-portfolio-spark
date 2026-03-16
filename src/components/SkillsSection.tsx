import { motion } from "framer-motion";
import {
  Code2, Cpu, Server, Database, Wrench,
} from "lucide-react";
import { type ReactNode } from "react";

interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    name: "Programming",
    icon: <Code2 size={20} />,
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    name: "Machine Learning",
    icon: <Cpu size={20} />,
    skills: ["TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Random Forest"],
  },
  {
    name: "Backend",
    icon: <Server size={20} />,
    skills: ["FastAPI", "Node.js"],
  },
  {
    name: "Databases",
    icon: <Database size={20} />,
    skills: ["MongoDB", "SQL", "Supabase"],
  },
  {
    name: "Tools",
    icon: <Wrench size={20} />,
    skills: ["GitHub", "Figma", "Jupyter", "Colab"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const }}
        className="mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted-foreground mt-2">Technologies I work with</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className="card-surface p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0, 0, 1] as const }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {cat.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <motion.span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm text-foreground border border-border/50 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(59,130,246,0.4)",
                    boxShadow: "0 0 15px rgba(59,130,246,0.15)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
