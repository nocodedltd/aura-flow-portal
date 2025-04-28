
import { useRef } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CtaSection from "@/components/home/CtaSection";

const Index = () => {
  const scrollToServices = () => {
    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      const statsSectionPosition = statsSection.getBoundingClientRect().top + window.pageYOffset;
      const viewportHeight = window.innerHeight;
      const offset = viewportHeight / 3; // Position stats about 1/3 from the top
      
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
