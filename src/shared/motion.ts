import { Variants } from "framer-motion";

export const DURATION = {
  fast: 0.12,
  base: 0.18,
  slow: 0.24,
} as const;

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};
