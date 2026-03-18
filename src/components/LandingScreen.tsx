import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LandingScreenProps {
  visible: boolean;
  onEnter: () => void;
}

const LandingScreen = ({ visible, onEnter }: LandingScreenProps) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] as const }}
      >
        <motion.h1
          className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight hero-title-gradient leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0, 0, 1] as const }}
        >
          HEET KOTHARI
        </motion.h1>

        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.2, 0, 0, 1] as const }}
        >
          Portfolio
        </motion.p>

        <motion.button
          onClick={onEnter}
          className="mt-12 hero-button glow-button inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-foreground font-semibold text-sm cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.2, 0, 0, 1] as const }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Enter <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LandingScreen;
