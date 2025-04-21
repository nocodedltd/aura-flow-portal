
// Common animation variants for Framer Motion
export const fadeIn = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.215, 0.61, 0.355, 1], // cubic-bezier for more refined movement
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const slideInRight = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Advanced animations
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.2,
      ease: [0.215, 0.61, 0.355, 1], // cubic-bezier for more refined movement
    },
  }),
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const slideInBottom = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export const popIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const staggerContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
  exit: { 
    opacity: 0,
    x: -10,
    transition: { duration: 0.3 }
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    y: 0,
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    y: 0,
  },
};

export const buttonHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { scale: 0.98, y: 0 },
};

export const textReveal = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (custom = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: custom * 0.2,
      ease: [0.33, 1, 0.68, 1], // custom ease
    },
  }),
};

export const parallaxScroll = {
  initial: { y: 0 },
  animate: (custom = 0) => ({
    y: custom,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 30,
    },
  }),
};

export const fadeInStagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    },
    exit: { opacity: 0, y: 10 },
  },
};

export const heroTextReveal = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier
    },
  },
};
