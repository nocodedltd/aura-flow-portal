
import { useState, useRef, useEffect } from "react";
import ProcessStep from "@/components/ProcessStep";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInStagger } from "@/lib/animations";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Reset the refs array when component mounts
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length);
  }, []);
  
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We start by understanding your business needs, challenges, and goals through in-depth consultations. Our experts analyze your current processes and systems to identify opportunities for AI integration and automation."
    },
    {
      id: 2,
      title: "Design",
      description: "Based on our findings, we create a tailored solution architecture that addresses your specific requirements. This includes selecting the appropriate technologies, designing workflows, and planning implementation stages."
    },
    {
      id: 3,
      title: "Deployment",
      description: "Our team implements the designed solution, ensuring smooth integration with your existing systems. We follow agile methodologies, allowing for continuous feedback and adjustments throughout the deployment process."
    },
    {
      id: 4,
      title: "Optimization",
      description: "After deployment, we monitor performance and collect data to identify improvement opportunities. We refine the solution over time, ensuring it continues to deliver optimal results as your business evolves."
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    
    // Scroll to the corresponding step card
    const stepIndex = stepId - 1;
    const stepElement = stepRefs.current[stepIndex];
    
    if (contentContainerRef.current && stepElement) {
      // Calculate the position to scroll to
      const containerTop = contentContainerRef.current.getBoundingClientRect().top;
      const elementTop = stepElement.getBoundingClientRect().top;
      const scrollTop = contentContainerRef.current.scrollTop + (elementTop - containerTop);
      
      // Smooth scroll to the element
      contentContainerRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
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
              Our proven four-step process ensures successful implementation of AI and automation solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
                
                <div className="space-y-4">
                  {steps.map((step) => (
                    <button
                      key={step.id}
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

            {/* Fixed height content area with its own scrolling */}
            <div className="lg:col-span-3">
              <div 
                ref={contentContainerRef}
                className="space-y-12 h-[600px] overflow-y-auto pr-4 scroll-smooth"
              >
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    ref={el => stepRefs.current[index] = el}
                    className={cn(
                      "bg-card rounded-lg border border-border p-8 w-full transition-all duration-300",
                      activeStep === step.id ? "border-primary ring-1 ring-primary/20" : ""
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0.7 }}
                      animate={{ 
                        opacity: 1,
                        scale: activeStep === step.id ? 1 : 0.98
                      }}
                      transition={{ duration: 0.3 }}
                    >
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
                          <h4 className="font-medium mb-2">Discovery Phase Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Initial consultation meeting</li>
                            <li>Process mapping and analysis</li>
                            <li>Technology assessment</li>
                            <li>ROI projection</li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 2 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Design Phase Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Solution architecture planning</li>
                            <li>Technology selection</li>
                            <li>Workflow design</li>
                            <li>Implementation roadmap</li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 3 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Deployment Phase Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Agile implementation</li>
                            <li>Integration with existing systems</li>
                            <li>Testing and validation</li>
                            <li>User training</li>
                          </ul>
                        </div>
                      )}
                      
                      {step.id === 4 && (
                        <div className="mt-6 p-4 bg-muted/50 rounded-md">
                          <h4 className="font-medium mb-2">Optimization Phase Includes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>Performance monitoring</li>
                            <li>Data collection and analysis</li>
                            <li>Continuous improvement</li>
                            <li>Regular review meetings</li>
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Process Timeline</h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              variants={fadeInStagger.container} 
              initial="hidden" 
              animate="show"
            >
              {steps.map((step, index) => (
                <motion.div key={step.id} variants={fadeInStagger.item}>
                  <ProcessStep
                    number={step.id}
                    title={step.title}
                    description={step.description}
                    isActive={step.id <= activeStep}
                    isLast={index === steps.length - 1}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with a discovery call to explore how our process can help transform your business.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
