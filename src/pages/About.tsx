
const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in AI and automation, Alex founded AuraFlow to help businesses harness the power of intelligent technologies.",
      imagePlaceholder: "photo-1517832606299-7ae9b720a186"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Sarah leads our technical team and has a background in developing enterprise-grade AI solutions for Fortune 500 companies.",
      imagePlaceholder: "photo-1573497019940-1c28c88b4f3e"
    },
    {
      name: "David Rodriguez",
      role: "Head of AI Development",
      bio: "David specializes in creating custom AI agents that streamline business processes and enhance decision-making capabilities.",
      imagePlaceholder: "photo-1568602471122-7832951cc4c5"
    },
    {
      name: "Mei Wong",
      role: "Lead Solution Architect",
      bio: "Mei designs comprehensive automation solutions that integrate seamlessly with existing business systems and processes.",
      imagePlaceholder: "photo-1580489944761-15a19d654956"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "AuraFlow was established with a mission to make AI and automation accessible to businesses of all sizes."
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Successfully implemented an AI-driven automation solution for a Fortune 500 manufacturing company."
    },
    {
      year: "2020",
      title: "Team Expansion",
      description: "Doubled our team size and opened a second office to meet growing demand for our services."
    },
    {
      year: "2021",
      title: "Innovation Award",
      description: "Received industry recognition for our innovative approach to business process automation."
    },
    {
      year: "2022",
      title: "International Expansion",
      description: "Extended our services to international clients and established partnerships with global technology providers."
    },
    {
      year: "2023",
      title: "AI Research Division",
      description: "Launched a dedicated research division to develop next-generation AI solutions for business applications."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to deliver cutting-edge solutions."
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our business relationships and practices."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure our solutions truly address their unique needs."
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in everything we do."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              About <span className="text-primary">AuraFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to transform businesses through intelligent automation and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At AuraFlow, our mission is to empower organizations to achieve operational excellence through intelligent automation. We believe that by harnessing the power of AI, businesses can not only reduce costs and improve efficiency but also unlock new opportunities for growth and innovation.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to making advanced technologies accessible to businesses of all sizes, providing solutions that are not only powerful but also practical and easy to implement.
              </p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We envision a future where businesses can seamlessly integrate AI and automation into their operations, allowing them to focus on what truly matters: creativity, innovation, and human connection.
              </p>
              <p className="text-lg text-muted-foreground">
                Our goal is to be at the forefront of this transformation, continuously innovating and setting new standards for what businesses can achieve with intelligent technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden border border-border transform hover:-translate-y-1 transition-transform">
                <div className="aspect-square bg-muted/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Profile Photo
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:translate-x-px"></div>
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative ${
                      index % 2 === 0 
                        ? "md:pl-1/2 md:pr-8" 
                        : "md:pr-1/2 md:pl-8"
                    }`}
                  >
                    <div className={`flex items-center mb-4 ${
                      index % 2 === 0 
                        ? "md:justify-start" 
                        : "justify-start md:justify-end"
                    }`}>
                      <div className="bg-primary text-primary-foreground py-1 px-3 rounded-full font-medium">
                        {event.year}
                      </div>
                    </div>
                    
                    <div className={`bg-card rounded-lg border border-border p-6 ${
                      index % 2 === 0 
                        ? "md:ml-8" 
                        : "ml-0 md:mr-8"
                    }`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-[-8px] md:left-1/2 top-3 h-4 w-4 bg-primary rounded-full transform md:translate-x-[-8px]"></div>
                      
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg border border-border p-6 text-center hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Join Us on Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with AuraFlow to transform your business through intelligent automation and AI solutions.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
