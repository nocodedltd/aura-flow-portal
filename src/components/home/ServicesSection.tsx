
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Calendar, Bot, Cog, Zap } from "lucide-react";

export default function ServicesSection() {
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

  return (
    <section id="services-section" className="py-20 relative overflow-hidden">
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
          <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Our Core Services</h2>
          <p className="text-lg text-secondary">
            Four focused solutions to transform your business with AI. From rapid transformation to custom development.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-50px"
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div custom={0} variants={serviceVariants}>
            <ServiceCard title="90-Day AI Transformation" description="Complete AI transformation in 90 days with guaranteed ROI and measurable results." icon={<Calendar size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={1} variants={serviceVariants}>
            <ServiceCard title="AI Agents" description="Custom AI agents that work 24/7 to handle tasks and enhance decision-making." icon={<Bot size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={2} variants={serviceVariants}>
            <ServiceCard title="Process Automation" description="End-to-end automation of business processes with zero-error execution." icon={<Cog size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={3} variants={serviceVariants}>
            <ServiceCard title="Custom Projects" description="Tailored AI solutions for unique business challenges and requirements." icon={<Zap size={24} />} href="/services" />
          </motion.div>
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
    </section>
  );
}
