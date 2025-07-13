import { Search, Users, Target, Rocket, CheckCircle, Clock, Heart } from "lucide-react";
import aiTransformationImg from "@/assets/ai-transformation.jpg";
import consultationImg from "@/assets/consultation-meeting.jpg";
import strategyImg from "@/assets/strategy-design.jpg";
import implementationImg from "@/assets/development-implementation.jpg";
import optimizationImg from "@/assets/optimization-analytics.jpg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <Search size={32} />,
      title: "AI is Everywhere - But Where Do I Start?",
      description: "You see AI transforming businesses everywhere. Competitors are gaining advantages, customers expect smarter experiences, but you're not sure where to begin or how to avoid costly mistakes. Taking the first step requires courage and expert guidance.",
      benefits: [
        "Recognize the AI opportunity in your market",
        "Understand competitive pressures and urgency",
        "Acknowledge the need for professional guidance",
        "Take the critical first step toward transformation",
        "Overcome analysis paralysis with expert support",
        "Avoid costly mistakes through proper guidance"
      ],
      deliverables: [
        "Recognition of AI potential",
        "Competitive awareness assessment",
        "Decision to seek professional help",
        "Commitment to exploration and discovery"
      ],
      timeline: "Your Starting Point",
      image: aiTransformationImg
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: "Discovery Call & AI Diagnostic",
      description: "Like a medical examination, we diagnose before prescribing. Our comprehensive AI readiness assessment reveals exactly where you stand and what opportunities exist for your specific business context and challenges.",
      benefits: [
        "Complete AI readiness evaluation and assessment",
        "Business process analysis and opportunity mapping",
        "Competitive positioning and market analysis",
        "Clear understanding of your current capabilities",
        "Identification of quick wins and strategic priorities",
        "Professional diagnosis of AI potential and barriers"
      ],
      deliverables: [
        "AI Opportunity Assessment Report",
        "Current State Analysis",
        "Competitive Benchmarking Study",
        "AI Readiness Score & Strategic Recommendations"
      ],
      timeline: "Week 1",
      image: consultationImg
    },
    {
      id: 3,
      icon: <Target size={32} />,
      title: "Tailored Service Recommendation",
      description: "Based on your diagnostic results, we prescribe the optimal path forward. Most businesses start with our 90-Day AI Transformation, while AI-comfortable companies may benefit from deeper process automation or custom AI agents.",
      benefits: [
        "Personalized service recommendation based on assessment",
        "Clear rationale for the chosen implementation path",
        "Transparent pricing and realistic timeline expectations",
        "Confidence in taking the next strategic steps",
        "Understanding of service options and their benefits",
        "Alignment between your needs and our solutions"
      ],
      deliverables: [
        "Service Recommendation Report",
        "Detailed Project Proposal & Scope",
        "Timeline & Investment Overview",
        "Success Metrics & ROI Projections"
      ],
      timeline: "Week 2",
      image: strategyImg
    },
    {
      id: 4,
      icon: <Rocket size={32} />,
      title: "Personalized Implementation",
      description: "We execute your prescribed AI solution with expert guidance and agile methodology. Whether it's a 90-day transformation, process automation, or custom development, we ensure seamless integration with minimal disruption.",
      benefits: [
        "Expert implementation with proven methodologies",
        "Agile approach with continuous feedback loops",
        "Minimal business disruption during transition",
        "Real-time progress tracking and transparency",
        "Team training and knowledge transfer",
        "Quality assurance and comprehensive testing"
      ],
      deliverables: [
        "AI Solution Implementation & Deployment",
        "Comprehensive Team Training & Support",
        "Integration Testing & Quality Assurance",
        "Performance Optimization & Fine-tuning"
      ],
      timeline: "Implementation Phase",
      image: implementationImg
    },
    {
      id: 5,
      icon: <Heart size={32} />,
      title: "Partnership & Ongoing Success",
      description: "Your AI journey doesn't end at launch. We provide ongoing optimization, performance monitoring, and strategic guidance to ensure continuous improvement, long-term success, and future growth opportunities.",
      benefits: [
        "Continuous performance optimization and monitoring",
        "Strategic partnership for long-term growth",
        "Ongoing technical support and maintenance",
        "Future AI opportunity identification and planning",
        "Regular performance reviews and recommendations",
        "Scaling strategies for expanding AI capabilities"
      ],
      deliverables: [
        "Performance Analytics Dashboard",
        "Monthly Optimization & Performance Reports",
        "Strategic Growth Recommendations",
        "Ongoing Support & Maintenance Framework"
      ],
      timeline: "Ongoing Partnership",
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
              Your journey from AI overwhelm to strategic implementation. We diagnose first, then prescribe the perfect solution for your business - whether that's our 90-Day Transformation or advanced custom development.
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
            <div className="text-center mb-12">
              <h2 className="mb-4">Your AI Transformation Process</h2>
              <p className="text-muted-foreground">Timeline customized to your project scope and complexity</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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