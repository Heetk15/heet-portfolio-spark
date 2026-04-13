import { motion } from "framer-motion";
import { Code2, Cpu, Server, Database, Wrench } from "lucide-react";
import { type ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  { name: "Programming", icon: <Code2 size={20} />, skills: ["Python", "C++", "JavaScript"] },
  { name: "Machine Learning", icon: <Cpu size={20} />, skills: ["TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Random Forest"] },
  { name: "Backend", icon: <Server size={20} />, skills: ["FastAPI", "Node.js"] },
  { name: "Databases", icon: <Database size={20} />, skills: ["MongoDB", "SQL", "Supabase"] },
  { name: "Tools", icon: <Wrench size={20} />, skills: ["GitHub", "Figma", "Jupyter", "Colab"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-16 md:py-20">
    <div className="section-container">
      <ScrollReveal className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">Technologies I work with</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.name} delay={i * 0.08}>
            <div className="glass-card p-6 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-badge px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-foreground border border-border/50 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
