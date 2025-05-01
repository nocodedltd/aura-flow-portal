
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/motionConfig";
import ProcessStep from "@/components/ProcessStep";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Reset the refs arrays when component mounts
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
  
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    
    // Smooth scroll to the corresponding content element
    const yOffset = -80; // Offset to account for header and spacing
    const element = document.getElementById(`step-${stepId}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const details = {
    1: [
      "Initial discovery meeting",
      "Business needs analysis",
      "Current workflow assessment",
      "Opportunity identification"
    ],
    2: [
      "Solution architecture blueprint",
      "Technology selection",
      "Implementation roadmap",
      "ROI projection"
    ],
    3: [
      "Agile development",
      "Iterative prototyping",
      "Quality assurance",
      "Continual feedback loops"
    ],
    4: [
      "Ongoing performance analysis",
      "Optimisation recommendations",
      "Regular review meetings",
      "Adaptation to evolving business needs"
    ]
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
                      id={`sidebar-step-${step.id}`}
                      onClick={() => handleStepClick(step.id)}
                      className={`w-full text-left p-4 rounded-md transition-all duration-300 ${
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

            <div className="lg:col-span-3" ref={contentRef}>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div 
                    key={step.id} 
                    id={`step-${step.id}`}
                    className={cn(
                      "scroll-mt-24 transition-all duration-300",
                      activeStep === step.id ? "opacity-100" : "opacity-60"
                    )}
                  >
                    <ProcessStep 
                      number={step.id}
                      title={step.title}
                      description={step.description}
                      isActive={activeStep === step.id}
                      isLast={index === steps.length - 1}
                    />
                    
                    {activeStep === step.id && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-16 pt-2"
                      >
                        <Card className="p-4 bg-muted/50">
                          <h4 className="font-medium mb-2">{step.title} Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {details[step.id as keyof typeof details].map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
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
