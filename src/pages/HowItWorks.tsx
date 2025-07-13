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
      timeline: "Week 1"
    },
    {
      id: 3,
      icon: <Target size={24} />,
      title: "Tailored Service Recommendation",
      description: "Based on your diagnostic, we prescribe the optimal path - 90-Day Transformation, Process Automation, or Custom Development.",
      timeline: "Week 2"
    },
    {
      id: 4,
      icon: <Rocket size={24} />,
      title: "Implementation",
      description: "Expert execution with agile methodology. Seamless integration with minimal business disruption.",
      timeline: "Implementation Phase"
    },
    {
      id: 5,
      icon: <Heart size={24} />,
      title: "Ongoing Partnership",
      description: "Continuous optimisation, monitoring, and strategic guidance for long-term success and growth.",
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure your AI transformation is successful. Each step is designed to build upon the previous one, creating a comprehensive strategy tailored to your business needs.
            </p>
          </div>
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
                  </div>
                </div>
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