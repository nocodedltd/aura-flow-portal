
import { Suspense, lazy } from "react";
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

// Lazy load all pages to improve initial load performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const About = lazy(() => import("./pages/About"));
const ClientLogin = lazy(() => import("./pages/ClientLogin"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* GLOBAL ANIMATED BG - optimized for performance */}
          <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
            <ParticleLines
              interactive={true}
              numPoints={60} // Reduced from 80
              connectionDistance={160}
              pointSpeed={0.4}
              pointSize={1.3}
            />
          </div>
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <div className="pt-20">
              <Suspense fallback={<PageLoading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/client" element={<ClientLogin />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
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

export default App;
