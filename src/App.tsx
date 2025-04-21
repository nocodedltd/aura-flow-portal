
import React, { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import CursorGlow from "@/components/CursorGlow";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleLines from "@/components/ParticleLines";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import ClientLogin from "./pages/ClientLogin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BiosLoader from "@/components/BiosLoader";

// Optimize query client settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
      retry: 1, // Reduce retries
    },
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Display the loader for 1.4 seconds
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BiosLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* OPTIMIZED GLOBAL ANIMATED BG */}
            <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
              <ParticleLines
                interactive={true}
                numPoints={50}  /* Reduced from 80 */
                connectionDistance={120}  /* Reduced from 160 */
                pointSpeed={0.35}  /* Slightly reduced from 0.4 */
                pointSize={1.2}  /* Slightly reduced from 1.3 */
              />
            </div>
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <div className="pt-20">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/client" element={<ClientLogin />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
            <ThemeSwitcher />
            <CursorGlow />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

