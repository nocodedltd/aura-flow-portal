import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Cog, FileSearch, GraduationCap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/Logo";
import {
  heroTitle,
  heroSubtitle,
  heroButtons,
} from "@/lib/motionConfig";

const Index = () => {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden text-center px-4 sm:px-6 lg:px-8">
        {/* Logo above Headline */}
        <div className="mb-8">
          <Logo className="h-20 md:h-24 w-auto" />
        </div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto text-balance"
          initial={shouldAnimate ? heroTitle.initial : {}}
          animate={shouldAnimate ? heroTitle.animate : {}}
          transition={heroTitle.transition}
        >
          <span className="text-secondary-300">Transform Your Business</span>
          <br />
          With <span className="text-primary">AI-Powered</span> Solutions
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          initial={shouldAnimate ? heroSubtitle.initial : {}}
          animate={shouldAnimate ? heroSubtitle.animate : {}}
          transition={heroSubtitle.transition}
        >
          We help businesses design and deploy intelligent automation systems that 
          save time, reduce costs, and unlock new opportunities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={shouldAnimate ? heroButtons.initial : {}}
          animate={shouldAnimate ? heroButtons.animate : {}}
          transition={heroButtons.transition}
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Book a Discovery Call
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 bg-secondary-400/10 hover:bg-secondary-400/20 text-secondary-300 border border-secondary-400/30 rounded-lg font-medium transition-colors duration-200"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="AI Automation"
                description="Automate repetitive tasks and streamline workflows with AI-powered solutions."
                icon={Bot}
              />
              <ServiceCard
                title="Custom AI Solutions"
                description="Develop tailored AI models and applications to address your unique business challenges."
                icon={Cog}
              />
              <ServiceCard
                title="Data Analysis & Insights"
                description="Unlock valuable insights from your data with advanced analytics and machine learning."
                icon={FileSearch}
              />
              <ServiceCard
                title="AI Training & Consulting"
                description="Empower your team with the knowledge and skills to leverage AI effectively."
                icon={GraduationCap}
              />
              {/* Add more ServiceCard components as needed */}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Index;
