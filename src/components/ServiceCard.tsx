
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <motion.div 
      className="relative h-full"
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }}
    >
      <div className="group block rounded-xl border border-primary/10 bg-card transition-all duration-500 hover:shadow-xl relative h-full cursor-pointer overflow-hidden p-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated corner accent */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500" />
        
        <ServiceCardContent
          title={title}
          description={description}
          icon={icon}
          benefits={benefits}
          isFlipped={false}
        />
      </div>
    </motion.div>
  );
}
