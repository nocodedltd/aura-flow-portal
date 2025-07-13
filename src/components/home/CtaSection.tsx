
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

// Declare Cal types for TypeScript
declare global {
  interface Window {
    Cal: any;
  }
}

export default function CtaSection() {
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
    <section className="py-12 relative overflow-hidden">
      <motion.div className="container relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        type: "spring",
        stiffness: 50
      }} viewport={{
        once: true,
        margin: "-100px"
      }} className="max-w-5xl mx-auto text-center bg-card p-6 rounded-2xl shadow-xl border border-primary/10 backdrop-blur-sm">
          <h2 className="mb-4 text-primary text-3xl md:text-4xl font-bold">Book Your Discovery Call</h2>
          <p className="text-lg text-secondary mb-6">
            Schedule a free 30-minute discovery call with our experts to explore how 
            our AI solutions can address your specific challenges.
          </p>
          
          {/* Calendar Embed */}
          <div 
            style={{width:"100%", height:"800px", overflow:"hidden"}} 
            id="my-cal-inline-30-min-chat"
            className="rounded-lg"
          ></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
