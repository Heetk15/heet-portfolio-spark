import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const achievements = [
  { badge: "Hackathon Finalist", title: "LaserHack", detail: "Lasell University" },
  { badge: "Finalist", title: "Odoo Hackathon", detail: "Top teams among 1900" },
  { badge: "Finalist", title: "Aftermath Hackathon", detail: "1000+ teams" },
];

const AchievementsSection = () => (
  <section className="py-32">
    <div className="section-container">
      <ScrollReveal className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          <span className="text-gradient">Achievements</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">Competitions & recognitions</p>
      </ScrollReveal>

      <div className="relative">
        <motion.div
          className="absolute left-[11px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.3), transparent)" }}
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] as const }}
        />

        <div className="flex flex-col gap-8">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.15}>
              <div className="relative flex items-start gap-6 pl-8 group">
                <div className="absolute left-0 top-2">
                  <div className="w-[22px] h-[22px] rounded-full border-2 border-primary/40 bg-background flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_12px_hsl(217_100%_65%/0.6)] transition-shadow duration-300" />
                  </div>
                </div>

                <div className="glass-card p-5 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {a.badge}
                  </span>
                  <h3 className="text-foreground font-semibold mt-1 text-lg">{a.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{a.detail}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
