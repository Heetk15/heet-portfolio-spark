import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Palette,
  MousePointerClick,
  Users,
  Sun,
  Languages,
  Wallet,
  LayoutGrid,
  LogIn,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectGallery, { GalleryImage } from "@/components/ProjectGallery";

const galleryImages: GalleryImage[] = [
  { src: "/digilocker/dl-landingpg1.png", caption: "Landing Page 1" },
  { src: "/digilocker/dl-landingpg2.png", caption: "Landing Page 2" },
  { src: "/digilocker/dl-landingpg3.png", caption: "Landing Page 3" },
  { src: "/digilocker/dl-loginpg.png", caption: "Login Screen" },
  { src: "/digilocker/dl-homepg.png", caption: "Home Dashboard" },
  { src: "/digilocker/dl-issueddocpg.png", caption: "Issued Documents" },
  { src: "/digilocker/dl-explorepg.png", caption: "Explore Catalog" },
  { src: "/digilocker/dl-settingspg.png", caption: "Settings" },
  { src: "/digilocker/dl-darkmode.png", caption: "Dark Mode" },
  { src: "/digilocker/dl-helppg.png", caption: "Help & Support" },  
];

/* ── Hero ─────────────────────────────────── */
const Hero = () => (
  <section className="pt-28 pb-16">
    <div className="section-container text-center flex flex-col items-center gap-8">
      <ScrollReveal>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          DigiLocker App Redesign
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A complete UI/UX overhaul of the government DigiLocker app to enhance accessibility,
          simplify document management, and modernize the user experience.
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

/* ── Role & Scope ─────────────────────────── */
const roleItems = [
  { icon: <Palette size={24} />, title: "UI/UX Design", description: "End-to-end visual and experience design across all screens." },
  { icon: <MousePointerClick size={24} />, title: "Interactive Prototyping", description: "Fully interactive Figma prototype simulating real user flows." },
  { icon: <Users size={24} />, title: "User Research", description: "Studied existing pain points to drive accessibility improvements." },
];

const RoleScope = () => (
  <section className="py-16">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Role & <span className="text-gradient">Scope</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roleItems.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <div className="glass-card p-8 h-full flex flex-col gap-4 group">
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ── Key Features ─────────────────────────── */
const features = [
  {
    icon: <Sun size={24} />,
    title: "Light & Dark Mode Toggle",
    description: "Built-in theme switching for accessibility in low-light environments.",
  },
  {
    icon: <Languages size={24} />,
    title: "Multi-Language Support",
    description: "Added a language change feature to cater to diverse demographics.",
  },
  {
    icon: <Wallet size={24} />,
    title: "Unified Credentials Wallet",
    description: "A secure, organized space for verified documents.",
  },
  {
    icon: <LayoutGrid size={24} />,
    title: "Modern UI Kit & Prototyping",
    description: "Assigned a strict UI kit for consistency and built a fully interactive prototype.",
  },
  {
    icon: <LogIn size={24} />,
    title: "Simplified Navigation & Login",
    description: "Reorganized the architecture and added Username/PIN login options.",
  },
];

const KeyFeatures = () => (
  <section className="py-16">
    <div className="section-container">
      <ScrollReveal className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Key <span className="text-gradient">Features</span>
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

const DigiLockerProject = () => (
  <div className="min-h-screen relative">
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <RoleScope />
      <ProjectGallery
        images={galleryImages}
        frameClassName="h-64 sm:h-72"
        imageClassName="object-contain bg-[#0b1220]"
        cardClassName="w-[72vw] sm:w-[320px]"
      />
      <KeyFeatures />
      <Footer />
    </div>
  </div>
);

export default DigiLockerProject;
