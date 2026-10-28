import type { Variants } from "motion/react";

// Reveal each element once, when about 20% of it is on screen.
export const viewportOnce = { once: true, amount: 0.2 } as const;

// Fade up. Pass a delay (in seconds) through the `custom` prop to stagger items.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

// For a parent whose children use `fadeUp` and should appear one after another.
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
