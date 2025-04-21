
import { Link } from "react-router-dom";
import ParticleLines from "@/components/ParticleLines";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Cog, FileSearch, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  heroContainer,
  heroHeadline,
  heroSubtitle,
  heroButtons,
} from "@/lib/motionConfig";

const Index = () => {
  const reduceMotion = useReducedMotion();

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 60
      }
    })
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <ParticleLines interactive={true} numPoints={100} connectionDistance={180} pointSpeed={0.6} />
        
        {/* Animated hero content */}
        <motion.div
          className="container relative z-10"
          initial="hidden"
          animate="visible"
          variants={heroContainer}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, type: "spring", stiffness: 70 }}
              className="flex justify-center mb-6"
              aria-label="NoCoded Logo"
            >
              <img
                src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
                alt="NoCoded logo"
                className="h-14 md:h-16 w-auto drop-shadow-[0_0_15px_rgba(249,222,201,0.3)]"
                style={{ maxWidth: "360px" }}
              />
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              className="font-bold mb-6 text-balance text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_5px_30px_rgba(249,222,201,0.3)]"
              variants={heroHeadline}
            >
              <span className="text-secondary">Transform Your Business With{" "}</span>
              <span className="relative">
                <span className="inline-block font-bold text-primary relative">
                  AI‑Powered
                  <motion.span 
                    className="absolute -inset-1 -z-10 opacity-20 blur-md bg-primary rounded-lg"
                    animate={{ 
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </span>
              </span>
              <span className="text-secondary"> Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-secondary mb-8 max-w-2xl mx-auto"
              variants={heroSubtitle}
            >
              We help businesses design and deploy intelligent automation systems
              that save time, reduce costs, and unlock new opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <motion.div
                custom={0}
                variants={heroButtons}
              >
                <Link
                  to="/contact"
                  className="bg-primary text-secondary px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-2 active:shadow-md active:translate-y-0 transition-all outline-none focus:ring-2 focus:ring-primary relative group overflow-hidden"
                >
                  <span className="relative z-10">Book a Discovery Call</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
              <motion.div
                custom={1}
                variants={heroButtons}
              >
                <Link
                  to="/services"
                  className="bg-secondary text-primary px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-2 active:shadow-md active:translate-y-0 transition-all outline-none focus:ring-2 focus:ring-primary relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary-400 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <motion.div 
                className="w-8 h-12 rounded-full border-2 border-secondary flex items-center justify-center"
              >
                <motion.div 
                  className="w-1.5 h-3 bg-secondary rounded-full"
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-background/90 to-background">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              custom={0}
              variants={statVariants}
              className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    100+
                  </motion.span>
                </div>
                <p className="text-secondary text-lg">Projects Delivered</p>
              </div>
            </motion.div>
            
            <motion.div 
              custom={1}
              variants={statVariants}
              className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    120,000+
                  </motion.span>
                </div>
                <p className="text-secondary text-lg">Hours Saved</p>
              </div>
            </motion.div>
            
            <motion.div 
              custom={2}
              variants={statVariants}
              className="bg-card p-8 rounded-xl text-center border border-primary/10 shadow-lg relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    98%
                  </motion.span>
                </div>
                <p className="text-secondary text-lg">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 -z-10"></div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-lg text-secondary">
              We offer end-to-end AI and automation solutions to help your business thrive in the digital age.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div custom={0} variants={serviceVariants}>
              <ServiceCard
                title="Agent Deployment"
                description="Custom AI agents that automate tasks and enhance decision-making processes."
                icon={<Bot size={24} />}
                href="/services"
              />
            </motion.div>
            
            <motion.div custom={1} variants={serviceVariants}>
              <ServiceCard
                title="Process Automation"
                description="Streamline operations with intelligent workflows and reduce manual interventions."
                icon={<Cog size={24} />}
                href="/services"
              />
            </motion.div>
            
            <motion.div custom={2} variants={serviceVariants}>
              <ServiceCard
                title="AI Audits"
                description="Comprehensive review of your systems to identify automation opportunities."
                icon={<FileSearch size={24} />}
                href="/services"
              />
            </motion.div>
            
            <motion.div custom={3} variants={serviceVariants}>
              <ServiceCard
                title="AI Training"
                description="Equip your team with the skills to leverage AI tools effectively."
                icon={<GraduationCap size={24} />}
                href="/services"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:underline font-medium hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <span>View All Services</span>
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
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 -z-10"></div>
        <motion.div 
          className="absolute top-0 right-0 w-full h-full -z-10 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear" 
          }}
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%236e74af" fill-opacity="0.2" fill-rule="evenodd"/%3E%3C/svg%3E")',
            backgroundSize: '80px 80px'
          }}
        ></motion.div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center bg-card p-10 rounded-2xl shadow-xl border border-primary/10 backdrop-blur-sm"
          >
            <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="text-lg text-secondary mb-8">
              Book a free 30-minute discovery call with our experts to explore how 
              our AI solutions can address your specific challenges.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="bg-primary text-secondary px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-2 active:shadow-md active:translate-y-0 transition-all inline-block relative overflow-hidden group"
              >
                <span className="relative z-10">Schedule a Call</span>
                <span className="absolute -inset-full top-0 right-0 w-full h-full bg-gradient-to-l from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
