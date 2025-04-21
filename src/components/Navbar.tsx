
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#191a21] border-b border-[#23242f]">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo area - intentionally left empty */}
        <div className="w-8"></div>
        
        {/* Desktop Navigation (center) */}
        <nav className="hidden md:flex items-center justify-center space-x-10">
          {navLinks.map(({ title, href }) => {
            const isActive = location.pathname === href;
            return (
              <Link
                key={href}
                to={href}
                className={`relative py-1 font-medium text-lg ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                } transition-colors duration-200`}
              >
                <span className="flex flex-col items-center">
                  {title}
                  {isActive && (
                    <span className="mt-1 block w-7 h-[3px] rounded-full bg-[#8689bd]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Client Login Button */}
        <Link
          to="/client"
          className="hidden md:flex items-center justify-center px-6 py-2 rounded-lg bg-[#232342] text-white font-medium hover:bg-[#343560] transition-colors duration-200"
        >
          Client Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#191a21] border-b border-[#23242f]"
          >
            <div className="px-4 py-3 space-y-3">
              {navLinks.map(({ title, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`block px-3 py-2 rounded-md ${
                    location.pathname === href 
                      ? "text-white bg-[#232342]/50" 
                      : "text-white/80 hover:text-white hover:bg-[#232342]/30"
                  } transition-colors duration-200`}
                >
                  {title}
                </Link>
              ))}
              <Link
                to="/client"
                className="block px-3 py-2 mt-2 text-white font-medium text-center rounded-md bg-[#232342] hover:bg-[#343560] transition-colors duration-200"
              >
                Client Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
