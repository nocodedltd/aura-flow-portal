
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Services submenu items
  const servicesItems = [
    {
      title: "Agent Deployment",
      href: "/services#agent-deployment",
      description: "Custom AI agents that automate tasks and enhance decision-making processes."
    },
    {
      title: "Process Automation",
      href: "/services#process-automation",
      description: "Streamline operations with intelligent workflows and reduce manual interventions."
    },
    {
      title: "AI Audits",
      href: "/services#ai-audits",
      description: "Comprehensive review of your systems to identify automation opportunities."
    },
    {
      title: "AI Training",
      href: "/services#ai-training",
      description: "Equip your team with the skills to leverage AI tools effectively."
    }
  ];

  // About submenu items
  const aboutItems = [
    {
      title: "Our Team",
      href: "/about#team",
      description: "Meet our experts in AI and automation technology."
    },
    {
      title: "Our Mission",
      href: "/about#mission",
      description: "Learn about our vision for transforming businesses with AI."
    },
    {
      title: "Our Values",
      href: "/about#values",
      description: "Discover the principles that guide our work and partnerships."
    }
  ];

  const ListItem = ({ className, title, href, children }: { className?: string, title: string, href: string, children: React.ReactNode }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "py-2 backdrop-blur-xl bg-background/30 border-b border-primary/10" 
          : "py-4 bg-transparent"
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

        {/* Desktop Navigation - Using shadcn NavigationMenu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === "/" && "bg-primary text-secondary"
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    location.pathname === "/services" && "bg-primary text-secondary"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {servicesItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/how-it-works">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === "/how-it-works" && "bg-primary text-secondary"
                    )}
                  >
                    How It Works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    location.pathname === "/about" && "bg-primary text-secondary"
                  )}
                >
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === "/contact" && "bg-primary text-secondary"
                    )}
                  >
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Client Login Button */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/client"
            className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-secondary hover:bg-primary/90 transition-all"
          >
            Client Login
          </Link>
        </motion.div>

        {/* Mobile Navigation - Simple dropdown */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#mobile-menu')?.classList.toggle('hidden')}
            className="p-2 rounded-md text-secondary bg-primary hover:bg-primary/90 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
          
          <div id="mobile-menu" className="hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10 p-4 mt-2">
            <nav className="space-y-4">
              <Link to="/" className={`block p-2 rounded-md hover:bg-primary/10 ${location.pathname === '/' ? 'bg-primary text-secondary' : ''}`}>
                Home
              </Link>
              <Link to="/services" className={`block p-2 rounded-md hover:bg-primary/10 ${location.pathname === '/services' ? 'bg-primary text-secondary' : ''}`}>
                Services
              </Link>
              <Link to="/how-it-works" className={`block p-2 rounded-md hover:bg-primary/10 ${location.pathname === '/how-it-works' ? 'bg-primary text-secondary' : ''}`}>
                How It Works
              </Link>
              <Link to="/about" className={`block p-2 rounded-md hover:bg-primary/10 ${location.pathname === '/about' ? 'bg-primary text-secondary' : ''}`}>
                About
              </Link>
              <Link to="/contact" className={`block p-2 rounded-md hover:bg-primary/10 ${location.pathname === '/contact' ? 'bg-primary text-secondary' : ''}`}>
                Contact
              </Link>
              <Link to="/client" className="block p-2 rounded-md bg-primary text-secondary hover:bg-primary/90">
                Client Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
