
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isActive?: boolean;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isActive = false,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      {/* Step number and connector line */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
            isActive
              ? "border-primary bg-primary text-primary-foreground"
              : "border-muted-foreground/30 bg-background text-muted-foreground"
          )}
        >
          <span className="text-sm font-medium">{number}</span>
        </div>
        {!isLast && (
          <div
            className={cn(
              "h-full w-0.5 translate-y-1",
              isActive ? "bg-primary" : "bg-muted-foreground/30"
            )}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 pt-1">
        <h3
          className={cn(
            "text-xl font-medium",
            isActive ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {title}
        </h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
