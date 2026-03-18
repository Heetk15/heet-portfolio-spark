import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "MindBridge",
    description: "AI-powered eldercare companion featuring multilingual voice interaction, caregiver monitoring, SOS alerts and cognitive health tracking dashboard.",
    stack: ["MERN Stack", "Twilio", "Groq AI", "Socket.io"],
  },
  {
    title: "MoneyMitra",
    description: "Financial literacy platform with AI assistants and automated market news analysis to help users understand investments and financial planning.",
    stack: ["Python", "AI/LLM Integration", "Web Scraping"],
  },
  {
    title: "Child Screen Monitoring",
    description: "Privacy-first monitoring system using federated learning to analyse on-screen text via OCR and NLP pipelines.",
    stack: ["Python", "TensorFlow Federated", "EasyOCR", "FastAPI"],
  },
  {
    title: "DigiLocker Redesign",
    description: "UI/UX redesign of DigiLocker platform focusing on usability improvements and better digital document management experience.",
    stack: ["Figma", "UI/UX Design"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32">
    <div className="section-container">
      <ScrollReveal className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">A selection of things I've built</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="group relative cursor-pointer">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass-card project-card p-8 flex flex-col gap-4 h-full relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <motion.div
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    whileHover={{ x: 2, y: -2 }}
                  >
                    <ExternalLink size={16} />
                  </motion.div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono text-[10px] uppercase tracking-wider border border-primary/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
