
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#191a21] border-b border-[#23242f]`}
      style={{
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Single Logo (left) */}
        <Link to="/" aria-label="Homepage" className="flex items-center z-20">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation (center) */}
        <nav className="hidden md:flex gap-10 items-center justify-center flex-1">
          {navLinks.map(({ title, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={href}
                to={href}
                className={`relative px-2 py-1 font-medium text-lg tracking-tight
                  ${isActive ? "text-white" : "text-white/80 hover:text-white"}
                  transition-colors duration-200`}
                style={{}}
              >
                <span className="relative z-10 flex flex-col items-center">
                  {title}
                  {/* underline for active, no box highlight */}
                  {isActive && (
                    <span className="mt-1 block w-7 h-[3px] rounded-full" style={{ background: "#8689bd" }} />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Only show Client Login on desktop */}
        <Link
          to="/client"
          className="hidden md:flex ml-6 px-5 py-2 rounded-lg bg-[#232342] text-white font-bold shadow hover:bg-[#343560] focus:outline-none transition-colors"
        >
          Client Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden rounded-lg p-2 transition hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary z-20"
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
            className="md:hidden absolute left-0 right-0 top-full shadow-2xl border-b border-[#23242f] bg-[#191a21] z-50 rounded-b-2xl"
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
                  className={`px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary flex items-center gap-2
                    ${location.pathname === href ? "text-white underline underline-offset-4" : "text-white/80 hover:text-white"}`}
                >
                  {title}
                </Link>
              ))}
              <Link
                to="/client"
                className="mt-4 px-4 py-3 rounded-xl bg-[#232342] text-white font-bold shadow hover:bg-[#343560] transition-all"
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
