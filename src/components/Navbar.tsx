
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center"
          aria-label="Homepage"
        >
          <img
            src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
            alt="NoCoded logo"
            className="h-9 w-auto"
            style={{ maxWidth: "162px" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105 active:scale-95 transition-transform
                ${location.pathname === link.path
                  ? "text-secondary bg-primary"
                  : "text-primary hover:bg-secondary hover:text-primary"
                }`}
              style={{ transitionProperty: "transform, background-color, color" }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/client"
            className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-secondary text-primary hover:bg-primary hover:text-secondary transition-transform transition-colors hover:scale-105 active:scale-95"
            style={{ transitionProperty: "transform, background-color, color" }}
          >
            Client Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-primary hover:bg-secondary hover:text-primary focus:outline-none transition-transform hover:scale-105 active:scale-95"
          aria-label="Toggle menu"
          style={{ transitionProperty: "transform, background-color, color" }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden glass absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[400px] border-b border-border" : "max-h-0"
        }`}
      >
        <div className="container py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 rounded-md text-base font-medium transition-colors hover:scale-105 active:scale-95 transition-transform
                ${location.pathname === link.path
                  ? "text-secondary bg-primary"
                  : "text-primary hover:bg-secondary hover:text-primary"
                }`}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionProperty: "transform, background-color, color" }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/client"
            className="block px-4 py-2 rounded-md text-base font-medium bg-secondary text-primary hover:bg-primary hover:text-secondary transition-transform transition-colors hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(false)}
            style={{ transitionProperty: "transform, background-color, color" }}
          >
            Client Login
          </Link>
        </div>
      </div>
    </header>
  );
}
