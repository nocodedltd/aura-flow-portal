
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team to discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Calendar */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Cal.com Embed */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Schedule a Call</h2>
              <div className="h-[600px] w-full">
                <iframe
                  src="https://cal.com/your-username"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg border border-border"
                  title="Schedule a meeting"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-medium mb-3">How quickly can you implement a solution?</h3>
              <p className="text-muted-foreground">
                Implementation timelines vary based on project complexity. Simple automations can be deployed in 2-4 weeks, while more complex AI solutions may take 8-12 weeks.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-medium mb-3">Do you offer ongoing support?</h3>
              <p className="text-muted-foreground">
                Yes, we provide comprehensive support and maintenance packages to ensure your solutions continue to perform optimally as your business evolves.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-medium mb-3">Can you integrate with our existing systems?</h3>
              <p className="text-muted-foreground">
                Absolutely. Our solutions are designed to integrate seamlessly with your existing infrastructure, including CRMs, ERPs, and custom applications.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-medium mb-3">How do you measure ROI?</h3>
              <p className="text-muted-foreground">
                We establish clear metrics at the start of each project and provide regular reports tracking time saved, error reduction, and other key performance indicators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
