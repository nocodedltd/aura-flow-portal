
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "glass border-b border-primary/20 shadow-lg py-1 backdrop-blur-lg"
          : "bg-transparent py-3"
      )}
      style={{
        backdropFilter: scrolled ? "blur(14px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(14px)" : undefined,
      }}
    >
      <div className="relative container flex items-center justify-center">
        {/* Centered Nav Bar Content Layer */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-2 md:gap-8 items-center font-medium text-base z-10 shadow-none">
          {navLinks.map(({ title, href }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                "relative px-2 md:px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none group story-link",
                location.pathname === href
                  ? "bg-primary text-secondary drop-shadow-md"
                  : "text-foreground/90 hover:text-primary"
              )}
            >
              <span className="relative z-20">
                {title}
              </span>
              <span
                className={cn(
                  "pointer-events-none absolute left-0 bottom-[-4px] w-full h-0.5 rounded-full transition-all bg-primary duration-300 scale-x-0 group-hover:scale-x-100",
                  location.pathname === href && "scale-x-100"
                )}
              />
            </Link>
          ))}
          <Link
            to="/client"
            className="ml-2 md:ml-8 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-secondary rounded-xl font-bold shadow-xl hover:scale-105 hover:from-primary/80 hover:to-secondary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
          >
            Client Login
          </Link>
        </nav>

        {/* Logo (left, vertically centered, lifted above nav content as needed) */}
        <Link
          to="/"
          aria-label="Homepage"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center"
          tabIndex={-1}
        >
          <Logo className="h-10 w-auto drop-shadow-lg" />
        </Link>

        {/* Mobile Menu Button (right) */}
        <button
          className={cn(
            "block md:hidden absolute right-0 top-1/2 -translate-y-1/2 rounded-lg p-2 transition hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary z-20"
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
            className="md:hidden absolute left-0 right-0 top-full shadow-2xl border-b border-primary/20 bg-background/95 backdrop-blur-2xl z-50 rounded-b-2xl"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <nav className="flex flex-col gap-3 p-4 w-full text-lg font-semibold">
              {navLinks.map(({ title, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    "px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center gap-2",
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
                className="mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-secondary font-bold shadow-lg hover:bg-primary/90 transition-all"
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
