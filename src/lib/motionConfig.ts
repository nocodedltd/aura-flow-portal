
import { Variants } from "framer-motion";

// More obvious, pronounced hero animations
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // More delay for staged appearance
    },
  },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 1.3,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, type: "spring", stiffness: 60 },
  },
};

export const heroButtons: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 36 },
  visible: custom => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 7,
      delay: custom * 0.3 + 0.55,
    },
  }),
};
