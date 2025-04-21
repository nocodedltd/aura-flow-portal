
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// New modern nav: glass, minimal, with a darker glass on scroll and shadow
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
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, type: "spring", stiffness: 50 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-primary/15 shadow-lg py-2 backdrop-blur-lg"
          : "bg-transparent py-4"
      )}
      style={{
        backdropFilter: scrolled ? "blur(14px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(14px)" : undefined,
      }}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
          <motion.img
            whileHover={{ scale: 1.09, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
            alt="NoCoded logo"
            className="h-10 w-auto drop-shadow-[0_4px_24px_rgba(110,116,175,0.18)]"
            style={{ maxWidth: "164px" }}
          />
          <span className="ml-1 text-xl font-bold text-primary hidden lg:block tracking-wide" style={{letterSpacing: "0.01em"}}>NoCoded</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ title, href }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                "px-4 py-2 rounded-xl transition-all font-semibold text-base hover:bg-primary/10 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                location.pathname === href
                  ? "bg-primary text-secondary shadow-sm"
                  : "text-foreground/80"
              )}
            >
              {title}
            </Link>
          ))}
          <Link
            to="/client"
            className="ml-2 px-4 py-2 bg-primary text-secondary rounded-xl font-semibold transition-all shadow-lg hover:bg-primary/90 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
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
            initial={{ y: -35, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.27 }}
            className="md:hidden absolute left-0 right-0 top-full shadow-2xl border-b border-primary/20 bg-background/85 backdrop-blur-xl z-50"
            style={{
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <nav className="flex flex-col gap-2 p-4 w-full text-lg">
              {navLinks.map(({ title, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-semibold transition-all hover:bg-primary/10 hover:text-primary",
                    location.pathname === href
                      ? "bg-primary text-secondary"
                      : "text-foreground"
                  )}
                >
                  {title}
                </Link>
              ))}
              <Link
                to="/client"
                className="mt-3 px-4 py-2 rounded-lg bg-primary text-secondary font-semibold shadow-lg hover:bg-primary/90 transition-all"
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
