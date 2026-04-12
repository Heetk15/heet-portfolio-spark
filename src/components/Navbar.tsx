import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 backdrop-blur-xl bg-background/60 border-b border-border/30">
      <div className="section-container h-full flex items-center justify-between">
        <Link to="/" aria-label="Heet Kothari" className="text-foreground hover:text-primary transition-all duration-300">
          <svg
            viewBox="0 0 120 48"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-auto text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] hover:opacity-80 transition-opacity cursor-pointer"
            fill="none"
          >
            <path d="M8 40V8C8 5.8 9.8 4 12 4H16C18.2 4 20 5.8 20 8V20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M44 40V8C44 5.8 45.8 4 48 4H52C54.2 4 56 5.8 56 8V20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 24C32 22.5 44 22 56 20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M64 40L82 22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M64 8L82 22" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M82 22L112 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M96 10L112 6L102 20" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M82 22L110 40" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {isHome && (
            <div className="flex items-center gap-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
          {!isHome && (
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300">
              ← Back to Portfolio
            </Link>
          )}
          <div className="flex items-center gap-1">
            {[
              { href: "https://github.com/Heetk15", icon: Github },
              { href: "https://linkedin.com/in/heet-kothari-03584a277", icon: Linkedin },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 px-6 pb-4 pt-2 flex flex-col gap-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isHome && navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            {!isHome && (
              <Link to="/" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to Portfolio
              </Link>
            )}
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/Heetk15" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Github size={18} /></a>
              <a href="https://linkedin.com/in/heet-kothari-03584a277" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin size={18} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
