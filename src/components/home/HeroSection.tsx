
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContainer, heroHeadline, heroSubtitle, heroButtons } from "@/lib/motionConfig";
import { useEffect } from "react";

// Declare Cal types for TypeScript
declare global {
  interface Window {
    Cal: any;
  }
}

interface HeroSectionProps {
  scrollToServices: () => void;
}

export default function HeroSection({ scrollToServices }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  
   useEffect(() => {
    // Initialize Cal.com calendar with a delay to ensure script is loaded
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.Cal) {
        try {
          window.Cal("init", "30-min-chat", {origin:"https://app.cal.com"});
          
          window.Cal.ns["30-min-chat"]("inline", {
            elementOrSelector:"#my-cal-inline-30-min-chat",
            config: {"layout":"month_view","theme":"dark"},
            calLink: "nocoded/30-min-chat",
          });

          window.Cal.ns["30-min-chat"]("ui", {
            "theme":"dark",
            "cssVarsPerTheme":{
              "light":{"cal-brand":"#f9dec9"},
              "dark":{"cal-brand":"#6e74af"}
            },
            "hideEventTypeDetails":false,
            "layout":"month_view"
          });
        } catch (error) {
          console.log("Cal.com calendar initialization error:", error);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated hero content */}
      <motion.div className="container relative z-10" initial="hidden" animate="visible" variants={heroContainer}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <motion.div initial={{
          opacity: 0,
          y: -32
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 1,
          delay: 0.1,
          type: "spring",
          stiffness: 70
        }} className="flex justify-center mb-6" aria-label="NoCoded Logo">
            <img 
              src="/lovable-uploads/fdcb9ebd-5e87-4307-aba7-5596ab15cae0.png" 
              alt="NoCoded logo" 
              className="h-14 md:h-16 w-auto drop-shadow-[0_0_15px_rgba(249,222,201,0.3)]" 
              style={{ maxWidth: "360px" }}
            />
          </motion.div>
          
          {/* Headline */}
          <motion.h1 className="font-bold mb-6 text-balance text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_5px_30px_rgba(249,222,201,0.3)]" variants={heroHeadline}>
            <span className="text-secondary">Transform Your Business With{" "}</span>
            <span className="relative">
              <span className="inline-block font-bold text-primary relative">
                AI‑Powered
                <motion.span className="absolute -inset-1 -z-10 opacity-20 blur-md bg-primary rounded-lg" animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }} />
              </span>
            </span>
            <span className="text-secondary"> Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="text-xl text-secondary mb-8 max-w-2xl mx-auto" variants={heroSubtitle}>Cutting edge AI solutions that fit seamlessly into your existing operations, helping you achieve more with less.</motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div custom={1} variants={heroButtons}>
              <Link to="/services" className="bg-secondary text-primary px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl hover:-translate-y-2 active:shadow-md active:translate-y-0 transition-all outline-none focus:ring-2 focus:ring-primary relative group overflow-hidden">
                <span className="relative z-10">Explore Services</span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary-400 to-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
          </div>

          {/* Calendar Embed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
              <h3 className="text-2xl font-semibold text-center mb-6 text-secondary">
                Book Your Discovery Call
              </h3>
              <div 
                style={{width:"100%", height:"600px", overflow:"hidden"}} 
                id="my-cal-inline-30-min-chat"
                className="rounded-lg"
              ></div>
            </div>
          </motion.div>
          
          {/* Scroll Down Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }} className="flex justify-center mb-14">
            <Button 
              onClick={scrollToServices} 
              variant="ghost" 
              size="icon" 
              aria-label="Scroll to view statistics" 
              className="rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 p-2 animate-bounce-light py-0 mx-[86px] my-[36px]"
            >
              <ChevronDown className="h-6 w-6 text-primary" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
