import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LandingScreenProps {
  entered: boolean;
}

const LandingScreen = ({ entered }: LandingScreenProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!entered) return;
    const timeoutId = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timeoutId);
  }, [entered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, delay: entered ? 0.55 : 0, ease: "easeInOut" }}
        >
          <div className="absolute inset-0" style={{ background: "#EAF2FF" }} />

          {entered && (
            <motion.div
              className="fixed inset-0 z-[120] pointer-events-none"
              style={{ background: "#FFFFFF" }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            <motion.span
              className="leading-none"
              style={{
                color: "#0B0F1A",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: entered ? 0 : 1, y: entered ? -100 : 0 }}
              transition={{ duration: 0.52, delay: entered ? 0.18 : 0.1, ease: "easeInOut" }}
            >
              HEET
            </motion.span>

            <motion.span
              className="leading-none -mt-1"
              style={{
                color: "#0B0F1A",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                letterSpacing: "0.05em",
                fontWeight: 600,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: entered ? 0 : 1, y: entered ? 100 : 0 }}
              transition={{ duration: 0.52, delay: entered ? 0.18 : 0.2, ease: "easeInOut" }}
            >
              KOTHARI
            </motion.span>

            <motion.p
              className="mt-6 uppercase font-medium"
              style={{
                color: "#0B0F1A",
                fontSize: "0.9rem",
                letterSpacing: "0.4em",
                opacity: 0.6,
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: entered ? 0 : 1, y: entered ? 30 : 0 }}
              transition={{ duration: 0.45, delay: entered ? 0.16 : 0.3, ease: "easeInOut" }}
            >
              Portfolio
            </motion.p>
          </div>

          <motion.div
            className="fixed inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: entered ? 1 : 0 }}
            transition={{ duration: 0.75, delay: entered ? 0.14 : 0, ease: "easeInOut" }}
            style={{ background: "#020617" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingScreen;
