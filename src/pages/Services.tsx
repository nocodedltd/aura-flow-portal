
import { Calendar, Bot, Cog, Zap, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Calendar size={32} />,
      title: "90-Day AI Transformation",
      description: "Our flagship program that delivers complete AI transformation in just 90 days. We handle everything from strategy to implementation, ensuring rapid ROI and measurable results.",
      benefits: [
        "Complete AI strategy and roadmap in week 1",
        "Live implementation with measurable milestones",
        "Guaranteed ROI within the 90-day period",
        "Ongoing support and optimization included",
        "Custom AI agents and automation workflows",
        "Team training and change management"
      ],
      flagship: true
    },
    {
      icon: <Bot size={32} />,
      title: "AI Agents",
      description: "Custom AI agents that work 24/7 to handle customer inquiries, automate complex tasks, and enhance decision-making across your organization.",
      benefits: [
        "24/7 availability with human-like interactions",
        "Custom trained on your specific business data",
        "Seamless integration with existing systems",
        "Continuous learning and improvement",
        "Multi-channel deployment (web, phone, email)"
      ]
    },
    {
      icon: <Cog size={32} />,
      title: "Process Automation",
      description: "End-to-end automation of your business processes, from simple tasks to complex workflows, reducing costs and eliminating human error.",
      benefits: [
        "Reduce processing time by up to 90%",
        "Eliminate repetitive manual tasks completely",
        "Zero-error rate in automated processes",
        "Real-time monitoring and reporting",
        "Scalable to handle unlimited volume"
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Custom Projects",
      description: "Tailored AI solutions for unique business challenges. From data analysis to predictive modeling, we build what you need to stay ahead.",
      benefits: [
        "Fully customized to your specific requirements",
        "Cutting-edge AI technologies and methodologies",
        "Flexible engagement models and timelines",
        "Intellectual property ownership included",
        "Ongoing maintenance and support options"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              Our <span className="text-primary">Core Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Four focused solutions to transform your business with AI. From our flagship 90-day transformation to custom projects, we deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                } ${service.flagship ? "border-2 border-primary/20 rounded-xl p-8 bg-primary/5" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className={`h-16 w-16 rounded-md ${service.flagship ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-3xl font-semibold">{service.title}</h2>
                    {service.flagship && (
                      <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-medium">
                        <Star size={14} />
                        <span>Flagship</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">{service.description}</p>
                  
                  <h3 className="text-xl font-medium mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`bg-muted/50 rounded-lg p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-video bg-card rounded-md flex items-center justify-center border border-border">
                    <div className="text-6xl text-primary">{service.icon}</div>
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
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a consultation with our experts to explore how our services can address your specific needs.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
