import { motion } from "framer-motion";

const achievements = [
  { badge: "Hackathon Finalist", title: "LaserHack", detail: "Lasell University" },
  { badge: "Finalist", title: "Odoo Hackathon", detail: "Top teams among 1900" },
  { badge: "Finalist", title: "Aftermath Hackathon", detail: "1000+ teams" },
];

const AchievementsSection = () => (
  <section className="py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const }}
        className="mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-muted-foreground mt-2">Competitions & recognitions</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-purple-500/30 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0, 0, 1] as const }}
        />

        <div className="flex flex-col gap-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="relative flex items-start gap-6 pl-8 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0, 0, 1] as const }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2">
                <div className="w-[22px] h-[22px] rounded-full border-2 border-accent/50 bg-background flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-shadow duration-300" />
                </div>
              </div>

              {/* Card */}
              <div className="card-surface p-5 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {a.badge}
                </span>
                <h3 className="text-foreground font-semibold mt-1 text-lg">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
