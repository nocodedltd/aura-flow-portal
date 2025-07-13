
const About = () => {
  const team = [
    {
      name: "Charlie Lefever",
      role: "Founder & Managing Director",
      bio: "Charlie's passion for optimising business processes is at the heart of what he does at NoCoded. With a background that's in equal parts technical as it is creative, he excels in mapping and designing workflows that not only streamline operations but make them easier for teams to manage. Charlie believes in crafting solutions that fit each client's unique needs, rather than 'pre-built' solutions, ensuring that their day-to-day operations run more smoothly and efficiently.",
      imagePlaceholder: "photo-1517832606299-7ae9b720a186"
    },
    {
      name: "Joe Brady",
      role: "Founder & Head of Sales",
      bio: "As Founder and Head of Sales, Joe brings a forward-thinking approach to NoCoded's business development. With over five years of experience running a business, Joe has a keen ability to identify client needs and craft tailored solutions that truly add value. His entrepreneurial spirit and dedication to building strong relationships have been instrumental in driving NoCoded's growth.",
      imagePlaceholder: "photo-1573497019940-1c28c88b4f3e"
    },
    {
      name: "Arsalan Afgan Khan",
      role: "Head of AI Implementation",
      bio: "As the Head of AI Implementation, Arsalan is at the forefront of integrating artificial intelligence into client systems. His technical acumen and forward-thinking approach enable him to design AI solutions that are not only cutting-edge but also practical and scalable. Arsalan's work involves making complex data models accessible and useful for everyday business decision-making.",
      imagePlaceholder: "photo-1568602471122-7832951cc4c5"
    },
    {
      name: "Dominic Tuck",
      role: "Automation Architect",
      bio: "Dom recently joined the NoCoded team, bringing with him a strong background in data analysis, process management, and operational efficiency. With experience handling large data sets from major industries and working closely with both suppliers and engineers, Dom has developed a keen ability to streamline workflows and improve system performance.",
      imagePlaceholder: "photo-1580489944761-15a19d654956"
    }
  ];

  const values = [
    {
      title: "Tailored Solutions",
      description: "We craft custom automation solutions that fit each client's unique needs, rather than forcing pre-built systems."
    },
    {
      title: "Efficiency First",
      description: "We focus on streamlining operations to help teams work more smoothly and focus on what really matters."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with our clients throughout the entire process, ensuring thoughtful execution and lasting results."
    },
    {
      title: "Practical Innovation",
      description: "We combine cutting-edge AI technology with practical, scalable solutions that deliver measurable improvements."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              About <span className="text-primary">NoCoded</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From a simple fix to a new beginning - discover the story behind NoCoded's automation expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story: From a Simple Fix to a New Beginning</h2>
            <p className="text-xl text-muted-foreground">
              How a nagging everyday problem led us to discover the transformative power of automation
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey didn't start with the goal of launching an automation company. It began with a nagging, everyday problem. Back in 2020, as the founders of Who Media, we were immersed in the world of digital advertising. We were successfully generating leads for our clients through Meta and TikTok, but a critical bottleneck was slowing everything down: the manual, time-consuming process of transferring those leads into their CRM systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                This challenge was our introduction to the world of automation. We dove in, determined to find a fix. The solution we built was a game-changer, not just for our clients, but for us. We had tasted the power of streamlined workflows, and we were hooked. We started looking inward, at our own operations at Who Media, and began implementing automation for ourselves, one process at a time. We became our own case study, proving the immense value and efficiency that automation could bring.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Then came a pivotal moment: the integration of ChatGPT into the automation landscape. This wasn't just an upgrade; it was a revolution. The ability to infuse our automations with intelligent language processing opened up a new frontier. We started developing more sophisticated and dynamic solutions for our clients, including complex case valuators for law firms that could analyze and process information in ways we previously only imagined.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout this journey, a new realization began to crystallize. By 2024, it was undeniable: the automation expertise we had cultivated and the powerful systems we had built for ourselves and our clients had become an invaluable service in its own right. We knew we had to share this with a wider audience.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                That's when NoCoded was born. It's the culmination of our experience, our passion for problem-solving, and our unwavering belief in the power of automation to transform businesses.
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
            <h2 className="mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with NoCoded to streamline your operations through intelligent automation and AI solutions.
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
