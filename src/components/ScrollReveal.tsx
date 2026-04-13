import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
}

const ScrollReveal = ({ children, delay = 0, ...props }: ScrollRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.2, 0, 0, 1] as const }}
    style={{ willChange: "transform, opacity" }}
    {...props}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
