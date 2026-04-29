import { Brain, TrendingUp, Server, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const interests = [
  { icon: <Brain size={20} />, label: "AI Systems" },
  { icon: <TrendingUp size={20} />, label: "Financial Technology" },
  { icon: <Server size={20} />, label: "Backend Architecture" },
  { icon: <Users size={20} />, label: "Human Centered Design" },
];

const AboutSection = () => (
  <section id="about" className="py-14 md:py-16">
    <div className="section-container">
      <ScrollReveal className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          About <span className="text-gradient">Me</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4 text-lg text-muted-foreground leading-relaxed">
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
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3">
          {interests.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.15 + i * 0.08}>
              <div className="glass-card p-4 flex flex-col items-center gap-2 text-center h-full">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
