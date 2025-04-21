
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      className="group block rounded-lg border border-border p-6 bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`h-14 w-14 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      
      <p className="text-muted-foreground mb-5">{description}</p>
      
      <div className="flex items-center text-primary font-medium">
        <span>Learn more</span>
        <ArrowRight 
          size={16} 
          className={`ml-1.5 transition-transform duration-300 ${isHovered ? 'translate-x-1.5' : ''}`} 
        />
      </div>
    </a>
  );
}
