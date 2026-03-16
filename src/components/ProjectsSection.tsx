import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.2, 0, 0, 1] as const },
};

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="section-container">
      <motion.h2
        className="text-3xl font-bold tracking-tight text-foreground mb-12"
        {...fadeInUp}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="card-surface p-8 flex flex-col gap-4 group cursor-pointer"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
