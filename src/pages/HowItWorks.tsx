import { Search, Users, Target, Rocket, Clock, Heart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search size={24} />,
      title: "AI is Everywhere - But Where Do I Start?",
      description: "You see AI transforming businesses everywhere, but don't know where to begin. Take the first step with professional guidance.",
      timeline: "Your Starting Point"
    },
    {
      id: 2,
      icon: <Users size={24} />,
      title: "Discovery Call & AI Diagnostic",
      description: "We diagnose before prescribing. Our comprehensive assessment reveals your AI readiness and opportunities.",
      deliverables: ["AI Opportunity Assessment", "Current State Analysis", "Strategic Recommendations"],
      timeline: "Week 1"
    },
    {
      id: 3,
      icon: <Target size={24} />,
      title: "Tailored Service Recommendation",
      description: "Based on your diagnostic, we prescribe the optimal path - 90-Day Transformation, Process Automation, or Custom Development.",
      deliverables: ["Service Recommendation", "Project Proposal", "Timeline & Investment Overview"],
      timeline: "Week 2"
    },
    {
      id: 4,
      icon: <Rocket size={24} />,
      title: "Implementation",
      description: "Expert execution with agile methodology. Seamless integration with minimal business disruption.",
      deliverables: ["AI Solution Deployment", "Team Training", "Quality Assurance"],
      timeline: "Implementation Phase"
    },
    {
      id: 5,
      icon: <Heart size={24} />,
      title: "Ongoing Partnership",
      description: "Continuous optimization, monitoring, and strategic guidance for long-term success and growth.",
      deliverables: ["Performance Analytics", "Monthly Reports", "Growth Recommendations"],
      timeline: "Ongoing"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              How It <span className="text-primary">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your journey from AI overwhelm to strategic implementation. We diagnose first, then prescribe the perfect solution for your business - whether that's our 90-Day Transformation or advanced custom development.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="border-l-2 border-primary/20 pl-8 relative">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">{step.id}</span>
                </div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={14} />
                        <span>{step.timeline}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {step.deliverables && (
                      <div>
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Deliverables:</h4>
                        <ul className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="bg-muted px-3 py-1 rounded-full text-sm">
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-muted/20">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="mb-4">Simple 5-Step Process</h2>
            <p className="text-muted-foreground">From AI overwhelm to strategic implementation</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center gap-3 bg-background p-3 rounded-lg shadow-sm">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                  <span className="text-sm font-medium">{step.timeline}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-primary/30 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Start Your AI Transformation?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a discovery call to explore how our proven process can deliver measurable AI results tailored to your business needs and timeline.
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