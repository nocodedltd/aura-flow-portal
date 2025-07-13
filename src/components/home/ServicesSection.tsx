import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Cog, FileSearch, GraduationCap } from "lucide-react";
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
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div custom={0} variants={serviceVariants}>
            <ServiceCard title="Agent Deployment" description="Custom AI agents that automate tasks and enhance decision-making processes." icon={<Bot size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={1} variants={serviceVariants}>
            <ServiceCard title="Process Automation" description="Streamline operations with intelligent workflows and reduce manual interventions." icon={<Cog size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={2} variants={serviceVariants}>
            <ServiceCard title="AI Audits" description="Comprehensive review of your systems to identify automation opportunities." icon={<FileSearch size={24} />} href="/services" />
          </motion.div>
          
          <motion.div custom={3} variants={serviceVariants}>
            <ServiceCard title="AI Training" description="Equip your team with the skills to leverage AI tools effectively." icon={<GraduationCap size={24} />} href="/services" />
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
    </section>;
}