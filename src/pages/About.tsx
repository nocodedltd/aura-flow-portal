
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
          
          <div className="space-y-16">
            {/* The Problem - 2020 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2020</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Problem</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-4">Where It All Started</h4>
                <p className="text-muted-foreground leading-relaxed">
                  As founders of Who Media, we were successfully generating leads through Meta and TikTok for our clients. But there was a critical bottleneck: manually transferring those leads into CRM systems was eating up valuable time and slowing everything down.
                </p>
              </div>
            </div>

            {/* The Discovery */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2021</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Discovery</p>
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h4 className="text-xl font-semibold mb-4">Tasting the Power</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We dove in and built a solution that changed everything. Not just for our clients, but for us. We became our own case study, implementing automation across Who Media's operations and proving the immense value of streamlined workflows.
                </p>
              </div>
            </div>

            {/* The Revolution */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2023</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Revolution</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold mb-4">ChatGPT Changes Everything</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The integration of ChatGPT wasn't just an upgrade—it was a revolution. We could now infuse automations with intelligent language processing, developing sophisticated solutions like complex case valuators for law firms.
                </p>
              </div>
            </div>

            {/* The Realization */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">2024</h3>
                  <p className="text-sm font-medium text-muted-foreground">The Birth</p>
                </div>
              </div>
              <div className="lg:col-span-2 order-1 lg:order-2">
                <h4 className="text-xl font-semibold mb-4">NoCoded Is Born</h4>
                <p className="text-muted-foreground leading-relaxed">
                  By 2024, it was undeniable: our automation expertise had become an invaluable service. <strong>NoCoded was born</strong>—the culmination of our experience, passion for problem-solving, and unwavering belief in automation's power to transform businesses.
                </p>
              </div>
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
