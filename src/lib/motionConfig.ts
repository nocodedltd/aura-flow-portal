
import { Variants } from "framer-motion";

// More obvious, pronounced hero animations
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // More delay for staged appearance
      delayChildren: 0.3,
    },
  },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
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
    transition: { duration: 0.8, delay: 0.4, type: "spring", stiffness: 60 },
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
      delay: custom * 0.3 + 0.6,
    },
  }),
};

// Section animations
export const sectionTitle: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 50,
    },
  },
};

// Card animations
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 70,
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// List item animations
export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
};

// Parallax animations
export const parallax: Variants = {
  initial: { y: 0 },
  scroll: (custom: number) => ({
    y: custom,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 30,
    },
  }),
};

// Fade-up animations
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1]
    },
  }),
};

// Staggered container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};
