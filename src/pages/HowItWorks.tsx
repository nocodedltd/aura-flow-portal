import { Search, PenTool, Code, BarChart3, CheckCircle, Clock } from "lucide-react";
import consultationImg from "@/assets/consultation-meeting.jpg";
import strategyImg from "@/assets/strategy-design.jpg";
import implementationImg from "@/assets/development-implementation.jpg";
import optimizationImg from "@/assets/optimization-analytics.jpg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search size={32} />,
      title: "Discovery & Consultation",
      description: "We start by understanding your business challenges, current processes, and goals. Through in-depth analysis and stakeholder interviews, we identify the most impactful AI opportunities for your organization.",
      benefits: [
        "Comprehensive business process audit",
        "AI readiness assessment and gap analysis",
        "Stakeholder alignment and requirements gathering",
        "ROI projections and success metrics definition",
        "Technology infrastructure evaluation",
        "Change management strategy development"
      ],
      deliverables: [
        "AI Opportunity Assessment Report",
        "Business Case & ROI Projections",
        "Stakeholder Interview Summary",
        "Current State Process Maps"
      ],
      timeline: "Week 1-2",
      image: consultationImg
    },
    {
      id: 2,
      icon: <PenTool size={32} />,
      title: "Strategy & Design",
      description: "We create a detailed roadmap and solution architecture tailored to your specific needs. This phase includes technology selection, workflow design, and comprehensive planning for seamless implementation.",
      benefits: [
        "Custom AI solution architecture design",
        "Technology stack selection and integration planning",
        "User experience design and workflow optimization",
        "Risk assessment and mitigation strategies",
        "Detailed project timeline and milestone planning",
        "Team training and adoption strategy"
      ],
      deliverables: [
        "Technical Architecture Blueprint",
        "Implementation Roadmap",
        "User Experience Mockups",
        "Integration Specifications"
      ],
      timeline: "Week 2-4",
      image: strategyImg
    },
    {
      id: 3,
      icon: <Code size={32} />,
      title: "Development & Implementation",
      description: "Our expert team builds and deploys your AI solutions using agile methodologies. We ensure continuous feedback, rigorous testing, and seamless integration with your existing systems.",
      benefits: [
        "Agile development with continuous feedback loops",
        "Quality assurance and comprehensive testing",
        "Seamless integration with existing systems",
        "Real-time progress tracking and reporting",
        "User acceptance testing and refinement",
        "Comprehensive documentation and handover"
      ],
      deliverables: [
        "Fully Deployed AI Solution",
        "Integration Documentation",
        "User Training Materials",
        "Testing & Quality Assurance Reports"
      ],
      timeline: "Week 4-10",
      image: implementationImg
    },
    {
      id: 4,
      icon: <BarChart3 size={32} />,
      title: "Launch & Optimization",
      description: "We ensure successful go-live and provide ongoing optimization to maximize performance. Through continuous monitoring and data-driven improvements, we help you achieve and exceed your goals.",
      benefits: [
        "Smooth go-live with minimal business disruption",
        "Performance monitoring and analytics dashboard",
        "Continuous optimization based on real usage data",
        "Regular performance reviews and recommendations",
        "Ongoing support and maintenance",
        "Scaling strategies for future growth"
      ],
      deliverables: [
        "Live Production System",
        "Performance Analytics Dashboard",
        "Optimization Recommendations",
        "Ongoing Support Framework"
      ],
      timeline: "Week 10-12 & Ongoing",
      image: optimizationImg
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
              Our proven 4-step process transforms your business with AI in just 12 weeks. From discovery to optimization, we ensure measurable results at every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">STEP {step.id}</span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock size={14} />
                          <span>{step.timeline}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-semibold">{step.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Key Activities</h3>
                      <ul className="space-y-2">
                        {step.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Deliverables</h3>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-2" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-video relative group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Step {step.id}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Your 12-Week Transformation Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -translate-y-0.5 z-0" />
                    )}
                  </div>
                  <h3 className="font-medium mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.timeline}</p>
                  <p className="text-xs text-muted-foreground">{step.deliverables.length} deliverables</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Start Your AI Transformation?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a discovery call to explore how our proven process can deliver measurable AI results for your business in just 12 weeks.
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