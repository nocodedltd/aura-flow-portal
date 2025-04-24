
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
}: ServiceCardContentProps) {
  return (
    <div className="relative z-10">
      <div className="h-16 w-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="flex items-center text-primary font-medium mt-auto">
        <span>Learn more</span>
        <ArrowRight size={16} className="ml-1.5" />
      </div>
    </div>
  );
}
