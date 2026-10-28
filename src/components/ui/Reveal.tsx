import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeUp, viewportOnce } from "../../lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    variants={fadeUp}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
  >
    {children}
  </motion.div>
);

export default Reveal;
