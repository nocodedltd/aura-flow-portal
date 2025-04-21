
import { Variants } from "framer-motion";

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1, type: "spring" },
  },
};

export const heroButtons: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 18 },
  visible: custom => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 7,
      delay: custom * 0.18 + 0.2,
    },
  }),
};
