
import React from "react";
import { motion, Variants } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "120,000+", label: "Hours Saved" },
  { value: "98%", label: "Client Satisfaction" },
];

interface StatPeekCardsProps {
  scrollTargetId?: string;
  isFixedToSectionTop?: boolean;
  onCardClick?: () => void;
}

const bounceAnim: Variants = {
  initial: { y: 32 },
  animate: {
    y: [32, 12, 24, 18, 32],
    transition: {
      duration: 2.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.75, 1],
    },
  },
  whileHover: { y: 0, scale: 1.06 },
  whileTap: { scale: 0.96 }
};

const StatPeekCards: React.FC<StatPeekCardsProps> = ({
  scrollTargetId,
  isFixedToSectionTop = false,
  onCardClick
}) => {
  const handleCardClick = () => {
    if (onCardClick) onCardClick();
    if (scrollTargetId) {
      const section = document.getElementById(scrollTargetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Style updates: 
  // - Hero: absolute, bottom, extra drop shadow.
  // - Section top: static/relative, margin and centered.
  const containerClass = isFixedToSectionTop
    ? "relative z-30 w-full flex justify-center pointer-events-none mt-[-80px] mb-10"
    : "absolute left-1/2 -translate-x-1/2 bottom-12 z-30 w-full flex justify-center pointer-events-none";

  const cardInnerClass = isFixedToSectionTop
    ? "flex gap-4 md:gap-8 pointer-events-auto"
    : "flex gap-4 md:gap-8 pointer-events-auto";

  return (
    <div className={containerClass}>
      <div className={cardInnerClass}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial="initial"
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
            variants={bounceAnim}
            style={{
              boxShadow: isFixedToSectionTop
                ? "0 12px 30px rgba(110,116,175,0.16)"
                : "0 12px 30px rgba(110,116,175,0.12)"
            }}
            className="relative cursor-pointer select-none bg-card border border-primary/10 rounded-xl px-6 md:px-8 py-4 md:py-6 min-w-[120px] md:min-w-[160px] text-center shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={handleCardClick}
            tabIndex={0}
            role="button"
            aria-label={`Scroll to services (${stat.label})`}
          >
            <span className="block text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</span>
            <span className="block text-sm md:text-base text-secondary">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatPeekCards;

