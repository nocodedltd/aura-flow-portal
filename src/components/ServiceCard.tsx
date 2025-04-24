
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServiceCardContent from "./ServiceCardContent";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  benefits?: string[];
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href,
  benefits
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isFlipped) {
      navigate(href);
    } else {
      setIsFlipped(true);
    }
  };

  return (
    <motion.div 
      className="relative h-full perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full h-full">
        <motion.div 
          className={`
            group block rounded-xl border border-primary/10 p-8 bg-card 
            transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full
            cursor-pointer
          `}
          animate={{
            scale: isFlipped ? 1.05 : 1,
            boxShadow: isFlipped 
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Animated corner accent */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500" />
          
          <ServiceCardContent
            title={title}
            description={description}
            icon={icon}
            benefits={benefits}
            isFlipped={isFlipped}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
