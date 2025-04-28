
import { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  const scrollToServices = () => {
    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      // Calculate position to center the stats section in the viewport
      const statsSectionPosition = statsSection.getBoundingClientRect().top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const statsSectionHeight = statsSection.offsetHeight;
      
      // Calculate offset to center the element (half viewport minus half element height)
      const offset = viewportHeight / 2 - statsSectionHeight / 2;
      
      window.scrollTo({
        top: statsSectionPosition - offset,
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
