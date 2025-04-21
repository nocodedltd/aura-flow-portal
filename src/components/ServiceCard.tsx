
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  href = "#" 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a 
      href={href}
      className="group block rounded-xl border border-primary/10 p-8 bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated corner accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      
      <div className="relative z-10">
        <motion.div 
          animate={isHovered ? { y: -5, scale: 1.1 } : { y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="h-16 w-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
        >
          <Icon size={24} />
        </motion.div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex items-center text-primary font-medium mt-auto">
          <span>Learn more</span>
          <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-1.5"
          >
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}
