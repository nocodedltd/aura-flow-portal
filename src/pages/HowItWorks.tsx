
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motionConfig";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  // Reset the refs array when component mounts
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
  }, []);
  
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Just as a master tailor begins with a detailed consultation, we start by understanding your business needs and challenges. We analyse your current processes and systems to identify opportunities for AI integration and automation that will perfectly suit your organisation's unique requirements."
    },
    {
      id: 2,
      title: "Design",
      description: "Similar to creating a pattern for a custom garment, we design a tailored solution architecture that addresses your specific requirements. This includes selecting the appropriate technologies, designing workflows, and planning implementation stages that will seamlessly integrate with your existing systems."
    },
    {
      id: 3,
      title: "Implementation",
      description: "Just as a tailor precisely cuts and assembles fabric, our team implements the designed solution with exacting attention to detail. We follow agile methodologies, allowing for continuous feedback and adjustments throughout the development process to ensure the perfect fit."
    },
    {
      id: 4,
      title: "Optimisation",
      description: "Just as a fine garment requires occasional alterations to maintain its perfect fit, we continuously monitor and optimise your solution. We collect performance data and make iterative improvements to ensure your AI tools evolve alongside your business needs."
    }
  ];

  // Calculate the position for the active card
  const getCardPosition = (stepId: number) => {
    if (!sidebarRef.current || !stepRefs.current[stepId - 1]) return 0;
    
    const sidebarTop = sidebarRef.current.getBoundingClientRect().top;
    const buttonTop = stepRefs.current[stepId - 1]?.getBoundingClientRect().top || 0;
    
    // Calculate the relative position (accounting for padding)
    return buttonTop - sidebarTop - 8;
  };

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <main>
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our bespoke approach ensures AI solutions that fit your business perfectly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div 
                ref={sidebarRef}
                className="bg-card rounded-lg border border-border p-6 sticky top-24"
              >
                <h2 className="text-2xl font-semibold mb-6">The Bespoke Process</h2>
                
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      ref={el => stepRefs.current[index] = el}
                      onClick={() => handleStepClick(step.id)}
                      className={`w-full text-left p-4 rounded-md transition-colors ${
                        activeStep === step.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center mr-3 ${
                          activeStep === step.id ? "border-primary-foreground" : "border-muted-foreground"
                        }`}>
                          {step.id}
                        </div>
                        <span className="font-medium">{step.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 relative min-h-[600px]">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={cn(
                    "absolute w-full",
                    activeStep !== step.id && "pointer-events-none"
                  )}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0, 
                    x: activeStep === step.id ? 0 : 50,
                    top: getCardPosition(activeStep)
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                >
                  <div
                    className={cn(
                      "bg-card rounded-lg border p-8 w-full transition-all duration-300",
                      activeStep === step.id ? "border-primary ring-1 ring-primary/20" : "border-border"
                    )}
                  >
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 flex items-center">
                        <span className={cn(
                          "h-8 w-8 rounded-full border-2 flex items-center justify-center mr-3",
                          activeStep === step.id 
                            ? "border-primary text-primary" 
                            : "border-muted-foreground/50 text-muted-foreground/50"
                        )}>
                          {step.id}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">{step.description}</p>
                      
                      {step.id === 1 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Consultation Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Initial discovery meeting</li>
                            <li>Business needs analysis</li>
                            <li>Current workflow assessment</li>
                            <li>Opportunity identification</li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 2 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Design Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Solution architecture blueprint</li>
                            <li>Technology selection</li>
                            <li>Implementation roadmap</li>
                            <li>ROI projection</li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 3 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Implementation Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Agile development</li>
                            <li>Iterative prototyping</li>
                            <li>Quality assurance</li>
                            <li>Continual feedback loops</li>
                          </ul>
                        </div>
                      )}

                      {step.id === 4 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Optimisation Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Ongoing performance analysis</li>
                            <li>Optimisation recommendations</li>
                            <li>Regular review meetings</li>
                            <li>Adaptation to evolving business needs</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Visual connector between sidebar and card */}
              <motion.div
                className="absolute left-[-16px] top-0 w-4 h-0.5 bg-primary"
                animate={{ 
                  top: getCardPosition(activeStep) + 40,
                  opacity: 1
                }}
                initial={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with a discovery call to explore how our bespoke process can transform your business.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
