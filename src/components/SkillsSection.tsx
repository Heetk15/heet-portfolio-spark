import { motion } from "framer-motion";

const categories: Record<string, string[]> = {
  Programming: ["Python", "C++", "JavaScript"],
  "Machine Learning": ["TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "Random Forest"],
  Backend: ["FastAPI", "Node.js"],
  Databases: ["MongoDB", "SQL", "Supabase"],
  Tools: ["GitHub", "Figma", "Jupyter", "Colab"],
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] },
};

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="section-container">
      <motion.h2 className="text-3xl font-bold tracking-tight text-foreground mb-12" {...fadeInUp}>
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([cat, skills], i) => (
          <motion.div
            key={cat}
            className="flex flex-col gap-3"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 bg-muted/50 rounded-full text-sm text-foreground border border-transparent hover:border-accent/30 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
