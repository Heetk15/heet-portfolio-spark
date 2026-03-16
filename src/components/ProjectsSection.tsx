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

const ProjectsSection = () => (
  <section id="projects" className="py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] as const }}
        className="mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-2">A selection of things I've built</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0, 1] as const }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="card-surface p-8 flex flex-col gap-4 h-full relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>
                <motion.div
                  className="text-muted-foreground group-hover:text-accent transition-colors"
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
                    className="px-2.5 py-1 rounded-md bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-wider border border-accent/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
