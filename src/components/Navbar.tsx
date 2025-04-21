
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    setIsMenuOpen(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const navbarVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hidden: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "py-3 backdrop-blur-xl bg-background/60 shadow-lg border-b border-primary/10" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Homepage"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
            alt="NoCoded logo"
            className="h-9 w-auto"
            style={{ maxWidth: "162px" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover="hover"
              variants={linkVariants}
            >
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium relative group transition-all
                  ${location.pathname === link.path
                    ? "text-secondary bg-primary"
                    : "text-secondary hover:bg-none"
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover="hover"
            variants={linkVariants}
          >
            <Link
              to="/client"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-secondary text-primary transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2),0_10px_10px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:shadow-sm active:translate-y-0"
            >
              Client Login
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-secondary hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:shadow-lg focus-visible:-translate-y-1 active:shadow-sm active:translate-y-0 transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ 
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden backdrop-blur-xl bg-background/80 absolute top-full left-0 right-0 overflow-hidden border-b border-primary/10"
      >
        <div className="container py-3 space-y-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover="hover"
              variants={linkVariants}
            >
              <Link
                to={link.path}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-all relative group
                  ${location.pathname === link.path
                    ? "text-secondary bg-primary"
                    : "text-secondary hover:bg-primary/10"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover="hover"
            variants={linkVariants}
          >
            <Link
              to="/client"
              className="block px-4 py-2 rounded-md text-base font-medium bg-secondary text-primary transition-all hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2),0_10px_10px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 active:shadow-sm active:translate-y-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
