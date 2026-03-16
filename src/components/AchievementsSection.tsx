import { motion } from "framer-motion";

const achievements = [
  { badge: "Hackathon Finalist", title: "LaserHack", detail: "Lasell University" },
  { badge: "Finalist", title: "Odoo Hackathon", detail: "Top teams among 1900" },
  { badge: "Finalist", title: "Aftermath Hackathon", detail: "1000+ teams" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const AchievementsSection = () => (
  <section className="py-24">
    <div className="section-container">
      <motion.h2 className="text-3xl font-bold tracking-tight text-foreground mb-12" {...fadeInUp}>
        Achievements
      </motion.h2>

      <div className="flex flex-col gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            className="flex items-start gap-4 p-5 card-surface"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{a.badge}</span>
              <h3 className="text-foreground font-semibold mt-0.5">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
