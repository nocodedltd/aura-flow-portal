
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Bot, Cog, Zap, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
const teamMeetingImg = "/lovable-uploads/e083e7a8-7c27-49c1-a761-62e1e039256b.png";
const aiAgentsImg = "/lovable-uploads/02892ec7-277a-4ae0-8065-27d281de201b.png";
const processAutomationImg = "/lovable-uploads/6c047291-bf0b-49d5-b746-ec514a685855.png";
import aiTransformationImg from "@/assets/ai-transformation.jpg";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const services = [
    {
      icon: <Calendar size={32} />,
      title: "The 90-Day AI Transformation",
      description: "Our flagship program to integrate, automate, and innovate your core business functions in one quarter. We handle the entire journey from initial strategy to full implementation, focusing on delivering measurable results and a powerful competitive edge.",
      benefits: [
        "Rapid Strategy & Roadmap: We begin with an intensive discovery phase to quickly build your strategic AI roadmap",
        "Focused on Measurable ROI: Every step is designed to generate a clear and significant return on your investment",
        "Live Implementation: We build and deploy custom AI agents and automation workflows with clear, tangible milestones",
        "Empowered Team: Full team training and change management to ensure seamless adoption and long-term success",
        "Continuous Optimisation: We provide ongoing support to ensure your new AI systems deliver compounding value"
      ],
      flagship: true,
      image: teamMeetingImg
    },
    {
      icon: <Bot size={32} />,
      title: "AI Agents",
      description: "Deploy a tireless digital workforce to represent you and run your operations. From 24/7 customer support chatbots and voice agents to specialised agents that handle complex internal tasks, we build the intelligent workers you need to scale your business.",
      benefits: [
        "Deploy Across All Channels: Engage customers and staff via web chatbots, voice agents, email, and more",
        "Expertly Trained on Your Business: Your agents are custom-trained on your specific data, voice, and processes",
        "Automate Complex Tasks: Go beyond Q&A to handle multi-step workflows like sales qualification or data analysis",
        "Works With Your Existing Tools: Seamlessly integrates with your current CRM, ERP, and software stack",
        "Gets Smarter Over Time: Designed for continuous learning and performance improvement from every interaction"
      ],
      image: aiAgentsImg
    },
    {
      icon: <Cog size={32} />,
      title: "Intelligent Process Automation",
      description: "Reclaim thousands of hours and eliminate costly errors. We automate your business processes from end-to-end, transforming simple tasks and complex workflows into seamless, zero-error operations that run on autopilot.",
      benefits: [
        "Slash Processing Time: Reduce task completion time by up to 90%",
        "Eradicate Manual Work: Eliminate repetitive, soul-crushing tasks for good",
        "Achieve Flawless Execution: Operate with a zero-error rate on all automated processes",
        "Gain Total Visibility: Get real-time monitoring and reporting on performance and output"
      ],
      image: processAutomationImg
    },
    {
      icon: <Zap size={32} />,
      title: "Bespoke AI Solutions",
      description: "For challenges that demand a unique solution. We build tailored AI engines to solve your most complex business problems, from advanced data analysis to predictive modeling. Gain a proprietary tool that sets you apart from the competition.",
      benefits: [
        "Built for You, and Only You: Solutions are fully customized to your specific operational requirements",
        "Own Your Innovation: You retain 100% ownership of the intellectual property we build for you",
        "Leverage Cutting-Edge Tech: We apply the latest in AI technologies and methodologies to solve your challenge",
        "Agile & Flexible Partnership: We adapt our engagement models and timelines to fit your needs",
        "Long-Term Support: Optional ongoing maintenance and support to ensure lasting performance"
      ],
      image: aiTransformationImg
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
                id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}
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
                
                <div className={`rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="aspect-video relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
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
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
