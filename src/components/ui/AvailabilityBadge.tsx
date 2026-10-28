import { motion } from "motion/react";

const AvailabilityBadge = () => {
  return (
    <motion.a
      href="/#contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-neutral-800"
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-label="Available for work. Go to contact section"
    >
      <span className="h-2 w-2 rounded-full bg-green-400" />
      <span>Available for work</span>
    </motion.a>
  );
};

export default AvailabilityBadge;
