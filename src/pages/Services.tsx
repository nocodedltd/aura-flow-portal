
import { Bot, Cog, FileSearch, GraduationCap, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "Agent Deployment",
      description: "We design, build, and deploy custom AI agents that can automate complex tasks, interact with your customers, and enhance decision-making processes.",
      benefits: [
        "24/7 availability for customer inquiries",
        "Consistent quality in responses and solutions",
        "Scalable to handle peak demand without additional costs",
        "Continuous learning and improvement over time"
      ]
    },
    {
      icon: <Cog size={32} />,
      title: "Process Automation",
      description: "We streamline your operations by identifying repetitive tasks and implementing intelligent workflows that reduce manual intervention and errors.",
      benefits: [
        "Eliminate repetitive manual tasks",
        "Reduce processing time by up to 80%",
        "Minimize human error in critical processes",
        "Free up staff for higher-value activities"
      ]
    },
    {
      icon: <FileSearch size={32} />,
      title: "AI Audits",
      description: "Our comprehensive review of your systems and processes identifies automation opportunities and provides a roadmap for AI integration.",
      benefits: [
        "Clear understanding of automation potential",
        "Prioritized implementation recommendations",
        "Cost-benefit analysis for each opportunity",
        "Future-proof technology recommendations"
      ]
    },
    {
      icon: <GraduationCap size={32} />,
      title: "AI Training",
      description: "We equip your team with the knowledge and skills to effectively leverage AI tools and maintain automated systems.",
      benefits: [
        "Hands-on training with practical exercises",
        "Custom curriculum based on your systems",
        "Ongoing support and knowledge resources",
        "Certification options for team members"
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI and automation solutions to transform your business operations and unlock new potential.
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
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="h-16 w-16 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
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
