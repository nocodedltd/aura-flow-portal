import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Bot, Cog, Zap, CheckCircle, Star } from "lucide-react";

const teamMeetingImg = "/lovable-uploads/e083e7a8-7c27-49c1-a761-62e1e039256b.png";
const aiAgentsImg = "/lovable-uploads/02892ec7-277a-4ae0-8065-27d281de201b.png";
const processAutomationImg = "/lovable-uploads/6c047291-bf0b-49d5-b746-ec514a685855.png";
import aiTransformationImg from "@/assets/ai-transformation.jpg";
export default function ServicesSection() {
  const services = [
    {
      icon: <Calendar size={32} />,
      title: "90-Day AI Transformation",
      description: "Our flagship program that delivers complete AI transformation in just 90 days. We handle everything from strategy to implementation.",
      benefits: [
        "Complete AI strategy and roadmap in week 1",
        "Live implementation with measurable milestones",
        "Guaranteed ROI within the 90-day period",
        "Ongoing support and optimisation included"
      ],
      flagship: true,
      image: teamMeetingImg
    },
    {
      icon: <Bot size={32} />,
      title: "AI Agents",
      description: "Custom AI agents that work 24/7 to handle customer inquiries, automate complex tasks, and enhance decision-making.",
      benefits: [
        "24/7 availability with human-like interactions",
        "Custom trained on your specific business data",
        "Seamless integration with existing systems",
        "Continuous learning and improvement"
      ],
      image: aiAgentsImg
    },
    {
      icon: <Cog size={32} />,
      title: "Process Automation",
      description: "End-to-end automation of your business processes, reducing costs and eliminating human error.",
      benefits: [
        "Reduce processing time by up to 90%",
        "Eliminate repetitive manual tasks completely",
        "Zero-error rate in automated processes",
        "Real-time monitoring and reporting"
      ],
      image: processAutomationImg
    },
    {
      icon: <Zap size={32} />,
      title: "Custom Projects",
      description: "Tailored AI solutions for unique business challenges. From data analysis to predictive modeling.",
      benefits: [
        "Fully customised to your specific requirements",
        "Cutting-edge AI technologies and methodologies",
        "Flexible engagement models and timelines",
        "Intellectual property ownership included"
      ],
      image: aiTransformationImg
    }
  ];

  const serviceVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 70
      }
    })
  };
  return <section id="services-section" className="relative overflow-hidden mx-0 my-0 px-0 py-0">
      <div className="container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-secondary">
            We offer end-to-end AI and automation solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div key={index} custom={index} variants={serviceVariants}>
              <Link 
                to="/services" 
                className={`block h-full rounded-xl border transition-all duration-300 hover:shadow-xl group ${
                  service.flagship 
                    ? "border-primary/20 bg-primary/5 hover:border-primary/30" 
                    : "border-primary/10 bg-card hover:border-primary/20"
                }`}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-16 w-16 rounded-md ${
                      service.flagship 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary/10 text-primary"
                    } flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    {service.flagship && (
                      <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-medium">
                        <Star size={14} />
                        <span>Flagship</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium mb-3 text-foreground">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-2" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-primary font-medium mt-6 group-hover:gap-2 transition-all">
                      <span>Learn more</span>
                      <motion.span 
                        className="ml-1.5 inline-block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-primary hover:underline font-medium hover:shadow-md hover:-translate-y-1 transition-all group">
            <span>View All Services</span>
            <motion.span className="ml-1.5 inline-block" animate={{
            x: [0, 5, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}>
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>;
}