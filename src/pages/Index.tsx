
import { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      // Get the position of the services section
      const servicesSectionPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
      
      // Calculate viewport height
      const viewportHeight = window.innerHeight;
      
      // Calculate offset to position the "Our Services" header in the middle
      // We need a smaller offset to move the header to the center
      const offset = viewportHeight * 0.4;
      
      window.scrollTo({
        top: servicesSectionPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="overflow-hidden">
      <HeroSection scrollToServices={scrollToServices} />
      <StatsSection />
      <ServicesSection />
      <CtaSection />
    </main>
  );
};

export default Index;
