
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardContentProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits?: string[];
  isFlipped: boolean;
}

export default function ServiceCardContent({
  title,
  description,
  icon,
  benefits,
  isFlipped
}: ServiceCardContentProps) {
  return (
    <motion.div
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
      className="w-full h-full backface-hidden"
      style={{ 
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {!isFlipped ? (
        // Front content
        <div className="relative z-10">
          <motion.div 
            className="h-16 w-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6"
          >
            {icon}
          </motion.div>
          
          <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <div className="flex items-center text-primary font-medium mt-auto">
            <span>Learn more</span>
            <ArrowRight size={16} className="ml-1.5" />
          </div>
        </div>
      ) : (
        // Back content
        <div 
          className="absolute inset-0 p-6 flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <div className="h-20 w-20 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            
            {benefits && benefits.length > 0 && (
              <ul className="space-y-2 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="text-center">
            <span className="text-primary font-medium hover:underline">
              View Service Details
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
