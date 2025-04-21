
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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <ParticleLines />

        {/* Animated hero content */}
        <motion.div
          className="container"
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
                className="h-14 md:h-16 w-auto drop-shadow-lg"
                style={{ maxWidth: "360px" }}
              />
            </motion.div>
            {/* Headline */}
            <motion.h1
              className="font-bold mb-6 text-balance text-4xl md:text-5xl leading-tight bg-gradient-to-br from-secondary via-secondary to-secondary bg-clip-text text-transparent drop-shadow-2xl"
              variants={heroHeadline}
            >
              Transform Your Business With{" "}
              <span className="inline-block text-gradient-primary tracking-tight">
                NoCoded
              </span>{" "}
              <span className="block">
                <span className="text-primary"> AI‑Powered </span> Solutions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-muted-foreground mb-8"
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
                  className="bg-primary text-secondary px-6 py-3 rounded-md font-medium shadow-lg hover:scale-105 active:scale-95 hover:bg-primary/90 transition-all outline-none focus:ring-2 focus:ring-primary"
                >
                  Book a Discovery Call
                </Link>
              </motion.div>
              <motion.div
                custom={1}
                variants={heroButtons}
              >
                <Link
                  to="/services"
                  className="bg-secondary text-primary px-6 py-3 rounded-md font-medium shadow-lg hover:scale-105 active:scale-95 hover:bg-secondary/90 transition-all outline-none focus:ring-2 focus:ring-primary"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120,000+</div>
              <p className="text-muted-foreground">Hours Saved</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center border border-border">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              We offer end-to-end AI and automation solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Agent Deployment"
              description="Custom AI agents that automate tasks and enhance decision-making processes."
              icon={<Bot size={24} />}
              href="/services"
            />
            <ServiceCard
              title="Process Automation"
              description="Streamline operations with intelligent workflows and reduce manual interventions."
              icon={<Cog size={24} />}
              href="/services"
            />
            <ServiceCard
              title="AI Audits"
              description="Comprehensive review of your systems to identify automation opportunities."
              icon={<FileSearch size={24} />}
              href="/services"
            />
            <ServiceCard
              title="AI Training"
              description="Equip your team with the skills to leverage AI tools effectively."
              icon={<GraduationCap size={24} />}
              href="/services"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute discovery call with our experts to explore how 
              our AI solutions can address your specific challenges.
            </p>
            <Link
              to="/contact"
              className="bg-primary text-secondary px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
