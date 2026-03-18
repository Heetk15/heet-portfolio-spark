import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LandingScreenProps {
  visible: boolean;
  onEnter: () => void;
}

const ease = [0.2, 0, 0, 1] as const;

const LandingScreen = ({ visible, onEnter }: LandingScreenProps) => {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {/* Light background that fades to dark */}
          <motion.div
            className="absolute inset-0"
            initial={{ backgroundColor: "#EAF2FF" }}
            animate={{ backgroundColor: exiting ? "#0B0F1A" : "#EAF2FF" }}
            transition={{ duration: 0.7, ease }}
          />

          {/* Dark overlay for smooth transition */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: exiting ? 1 : 0 }}
            transition={{ duration: 0.6, ease }}
            style={{ backgroundColor: "#0B0F1A" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* HEET — moves up on exit */}
            <motion.span
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none"
              style={{ color: "#0B0F1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: exiting ? 0 : 1,
                y: exiting ? -80 : 0,
                color: exiting ? "#E2E8F0" : "#0B0F1A",
              }}
              transition={{ duration: 0.6, delay: exiting ? 0 : 0.2, ease }}
            >
              HEET
            </motion.span>

            {/* KOTHARI — moves down on exit */}
            <motion.span
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none -mt-1 sm:-mt-2"
              style={{ color: "#0B0F1A" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: exiting ? 0 : 1,
                y: exiting ? 80 : 0,
                color: exiting ? "#E2E8F0" : "#0B0F1A",
              }}
              transition={{ duration: 0.6, delay: exiting ? 0.05 : 0.3, ease }}
            >
              KOTHARI
            </motion.span>

            {/* PORTFOLIO subtitle */}
            <motion.p
              className="mt-5 text-sm sm:text-base tracking-[0.4em] uppercase font-medium"
              style={{ color: "#4a5568" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: exiting ? 0 : 1, y: exiting ? 30 : 0 }}
              transition={{ duration: 0.5, delay: exiting ? 0 : 0.5, ease }}
            >
              Portfolio
            </motion.p>

            {/* Enter button */}
            <motion.button
              onClick={handleEnter}
              className="mt-12 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm cursor-pointer border transition-all duration-300"
              style={{
                backgroundColor: "rgba(11, 15, 26, 0.08)",
                borderColor: "rgba(11, 15, 26, 0.15)",
                color: "#0B0F1A",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: exiting ? 0 : 1, y: exiting ? 20 : 0 }}
              transition={{ duration: 0.5, delay: exiting ? 0 : 0.7, ease }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(11, 15, 26, 0.12)" }}
              whileTap={{ scale: 0.97 }}
            >
              Enter <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingScreen;
