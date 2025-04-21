
import { Link } from "react-router-dom";
import ParticleLines from "@/components/ParticleLines";
import ServiceCard from "@/components/ServiceCard";
import { Bot, Cog, FileSearch, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <ParticleLines />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6 animate-fade-in">
              Transform Your Business With{" "}
              <span className="text-primary">AI-Powered</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We help businesses design and deploy intelligent automation systems 
              that save time, reduce costs, and unlock new opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link 
                to="/contact" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Book a Discovery Call
              </Link>
              <Link
                to="/services"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
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
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
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
