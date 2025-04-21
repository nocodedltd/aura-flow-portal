
import React from "react";

const BiosLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-colors duration-700 min-h-screen">
    <div className="animate-fade-in text-primary text-2xl md:text-4xl font-mono tracking-widest select-none">
      aura-flow portal<br />
      <span className="text-base md:text-lg block mt-4 opacity-60">Initializing system...</span>
    </div>
  </div>
);

export default BiosLoader;
