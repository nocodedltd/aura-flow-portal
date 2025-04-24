
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
      className="w-full h-full"
      animate={{
        opacity: 1,
        scale: isFlipped ? [1, 0.9, 1] : 1,
        y: isFlipped ? [0, -20, 0] : 0,
      }}
      transition={{
        duration: 0.5,
        times: [0, 0.5, 1]
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
        // Back content (expanded)
        <div className="relative z-10">
          <div className="h-24 w-24 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto">
            {icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">{title}</h3>
          <p className="text-muted-foreground mb-8 text-center text-lg">{description}</p>
          
          {benefits && benefits.length > 0 && (
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="text-center">
            <motion.span 
              className="inline-flex items-center text-primary font-medium hover:underline text-lg"
              whileHover={{ x: 5 }}
            >
              View Service Details
              <ArrowRight size={20} className="ml-2" />
            </motion.span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
