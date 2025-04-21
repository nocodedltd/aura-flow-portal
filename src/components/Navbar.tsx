
// Removed import of the duplicated logo, cleaned layout for centered nav links

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change closes menu
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "How It Works", href: "/how-it-works" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-primary/20 shadow-lg py-2 backdrop-blur-lg"
          : "bg-transparent py-4"
      )}
      style={{
        backdropFilter: scrolled ? "blur(14px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(14px)" : undefined,
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Homepage"
          className="flex items-center gap-1 select-none"
        >
          <span className="text-2xl font-extrabold text-primary tracking-tighter drop-shadow-md">
            n{"</>"}coded
          </span>
          <span className="ml-1 text-lg font-semibold text-muted-foreground hidden sm:inline">
            NoCoded
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center font-semibold text-base">
          {navLinks.map(({ title, href }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                "px-3 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                location.pathname === href
                  ? "bg-primary text-secondary shadow-md"
                  : "text-foreground/80 hover:text-primary"
              )}
            >
              {title}
            </Link>
          ))}
          <Link
            to="/client"
            className="ml-6 px-4 py-2 bg-primary text-secondary rounded-lg font-semibold shadow-lg hover:bg-primary/90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform"
          >
            Client Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "block md:hidden rounded-lg p-2 transition hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary",
            mobileOpen && "bg-primary/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence initial={false} mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -25, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.27 }}
            className="md:hidden absolute left-0 right-0 top-full shadow-2xl border-b border-primary/20 bg-background/90 backdrop-blur-xl z-50"
            style={{
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <nav className="flex flex-col gap-3 p-5 w-full text-lg font-semibold">
              {navLinks.map(({ title, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    location.pathname === href
                      ? "bg-primary text-secondary"
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {title}
                </Link>
              ))}
              <Link
                to="/client"
                className="mt-4 px-4 py-3 rounded-md bg-primary text-secondary font-semibold shadow-lg hover:bg-primary/90 transition-all"
              >
                Client Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
