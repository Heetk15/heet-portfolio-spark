import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity,
  Mic,
  ShieldAlert,
  Brain,
  ArrowLeft,
  ExternalLink,
  Pill,
  Heart,
  Phone,
  MessageSquare,
  Cpu,
  Server,
  Zap,
  Volume2,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery, { GalleryImage } from "@/components/ProjectGallery";

const galleryImages: GalleryImage[] = [
  { src: "/mindbridge/mb-landing.png", caption: "Landing Experience" },  
  { src: "/mindbridge/mb-features.png", caption: "Feature Highlights" },  
  { src: "/mindbridge/mb-elderdash.png", caption: "Elder View Dashboard" },
  { src: "/mindbridge/mb-dash-dark.png", caption: "Dark Mode Dashboard" },
  { src: "/mindbridge/mb-sos.png", caption: "SOS Alerts" },
  { src: "/mindbridge/mb-chatbot.png", caption: "AI Chat Companion" },
  { src: "/mindbridge/mb-games.png", caption: "Cognitive Games" },
  { src: "/mindbridge/mb-gameeg.png", caption: "Game Example" },
  { src: "/mindbridge/mb-caredash.png", caption: "Caregiver Dashboard" },  
  { src: "/mindbridge/mb-care-analytics.png", caption: "Caregiver Analytics" },
  { src: "/mindbridge/mb-care-analytics2.png", caption: "Caregiver Analytics Detail" },
  { src: "/mindbridge/mb-care-profile.png", caption: "Caregiver Profile" },
  { src: "/mindbridge/mb-care-tasks.png", caption: "Caregiver Add Tasks" },
];

/* ── Section A: Hero ────────────────────────── */
const Hero = () => (
  <section className="pt-28 pb-20">
    <div className="section-container text-center flex flex-col items-center gap-8">
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          MindBridge
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          AI-powered eldercare companion featuring multilingual voice interaction, caregiver
          monitoring, SOS alerts, and a cognitive health tracking dashboard.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <button
            type="button"
            onClick={() => toast("Demo currently not available")}
            className="cta-button inline-flex items-center gap-2"
          >
            <ExternalLink size={16} /> View Live Demo
          </button>
          <Link
            to="/"
            className="hero-button glow-button inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-foreground font-medium text-sm"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Section B: Challenge & Solution ─────────── */
const ChallengeAndSolution = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ScrollReveal>
          <div className="glass-card p-8 h-full">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              The Challenge
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Eldercare requires continuous monitoring, but caregivers cannot be present 24/7.
              Furthermore, aging individuals often struggle with complex user interfaces, leading
              to tech isolation and delayed emergency responses.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 h-full">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              The Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              An intuitive, voice-first companion driven by Groq AI for near-instant multilingual
              communication. Coupled with a real-time MERN stack dashboard, caregivers can
              remotely track cognitive health markers and receive immediate SOS alerts via Twilio.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

/* ── Section C: Tech Stack ───────────────────── */
const techStack = ["React", "Node.js", "Express", "MongoDB", "Groq AI", "Twilio", "Socket.io"];

const TechStack = () => (
  <section className="py-20">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Tech <span className="text-gradient">Stack</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="glass-card px-5 py-2.5 font-mono text-sm uppercase tracking-wider text-primary border border-primary/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Section D: Core Features ────────────────── */
const features = [
  {
    icon: <Activity size={24} />,
    title: "Real-Time Caregiver Dashboard",
    description:
      "Built with React and Socket.io to push live status updates, telemetry, and activity logs instantly to caregivers with zero-refresh latency.",
  },
  {
    icon: <Mic size={24} />,
    title: "Multilingual Voice AI",
    description:
      "Leverages Groq AI's high-speed inference for natural, conversational voice interactions in multiple languages at the edge.",
  },
  {
    icon: <ShieldAlert size={24} />,
    title: "Emergency SOS Routing",
    description:
      "Integrated Twilio API pipeline to automatically detect distress phrases and instantly dispatch SMS and voice alerts to registered contacts.",
  },
  {
    icon: <Brain size={24} />,
    title: "Cognitive Health Tracking",
    description:
      "Analyzes conversation metadata over time using NLP, flagging potential cognitive decline markers on the caregiver dashboard.",
  },
];

const CoreFeatures = () => (
  <section className="py-20">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Core <span className="text-gradient">Features</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 0.08}>
            <div className="glass-card p-8 h-full flex flex-col gap-4 group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── Section E: Architecture Flow ────────────── */
const steps = [
  { icon: <MessageSquare size={20} />, title: "User Input", description: "Voice-to-Text conversion at the edge." },
  { icon: <Cpu size={20} />, title: "AI Inference", description: "Groq API processes intent and sentiment." },
  { icon: <Server size={20} />, title: "Event Gateway", description: "Node.js backend analyzes for critical events." },
  { icon: <Zap size={20} />, title: "Action Dispatch", description: "Socket.io updates UI / Twilio triggers SMS." },
  { icon: <Volume2 size={20} />, title: "Response", description: "Text-to-Speech system converses back to the user." },
];

const ArchitectureFlow = () => (
  <section className="py-20">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          System <span className="text-gradient">Architecture</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[15px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, hsl(var(--primary) / 0.5), hsl(var(--accent) / 0.2), transparent)" }}
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] as const }}
        />

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="relative flex items-start gap-6 pl-10 group">
                <div className="absolute left-0 top-1">
                  <div className="w-[30px] h-[30px] rounded-full border-2 border-primary/30 bg-background flex items-center justify-center group-hover:border-primary transition-all duration-300">
                    <div className="text-primary scale-75">{step.icon}</div>
                  </div>
                </div>
                <div className="glass-card p-5 flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    Step {i + 1}
                  </span>
                  <h3 className="text-foreground font-semibold mt-1 text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── Section F: Future Scope ─────────────────── */
const futureItems = [
  {
    icon: <Pill size={22} />,
    title: "Automated Medication Reminders",
    description: "Via Node-cron and conversational Groq prompts.",
  },
  {
    icon: <Heart size={22} />,
    title: "Emotional Wellbeing Tracking",
    description: "Via advanced sentiment analysis.",
  },
  {
    icon: <Phone size={22} />,
    title: "Direct Telehealth Bridging",
    description: "Using Twilio Programmable Voice.",
  },
];

const FutureScope = () => (
  <section className="py-20">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Future <span className="text-gradient">Scope</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {futureItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="glass-card p-8 h-full flex flex-col items-center text-center gap-4 group border-primary/10">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── Main Page ───────────────────────────────── */
const MindBridgeProject = () => (
  <div className="min-h-screen relative">
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <ChallengeAndSolution />
      <TechStack />
      <CoreFeatures />
      <ArchitectureFlow />
      <FutureScope />
      <ProjectGallery images={galleryImages} />
      <Footer />
    </div>
  </div>
);

export default MindBridgeProject;
