import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Briefcase, MessageSquare, User } from "lucide-react";
import { useState } from "react";

// Color palette for clarity
const BG = "bg-background"; // dark charcoal (tailwind css var)
const TEXT = "text-[#F5E1C4]";
const ACTIVE_BG = "bg-[#777CE6]";
const ACTIVE_TEXT = "text-[#F5E1C4]";
const HIGHLIGHT = "text-[#777CE6]";
const PILL_BTN_BG = "bg-[#777CE6]";
const PILL_BTN_TEXT = "text-[#F5E1C4]";
const FONT = "font-sans";

const navItems = [
  { label: "Services", path: "/services", dropdown: true, icon: <Briefcase size={20} /> },
  { label: "How It Works", path: "/how-it-works", icon: <MessageSquare size={20} /> },
  { label: "About", path: "/about", dropdown: true, icon: <User size={20} /> },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${BG} shadow-lg border-b border-[#2C2734]`}>
      <div className="container max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo container */}
        <Link 
          to="/" 
          className={`flex items-center ${location.pathname === "/" ? HIGHLIGHT : ""}`}
          aria-label="Homepage"
        >
          <img
            src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
            alt="NoCoded logo"
            className="h-9 w-auto"
            width={148}
            height={36}
            style={{ maxWidth: "148px" }}
            loading="eager"
          />
        </Link>

        {/* Nav items */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-9">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.label === "Services" && location.pathname.startsWith("/services")) ||
                (item.label === "About" && location.pathname.startsWith("/about"));

              let baseClass = "relative px-5 py-2 rounded-full select-none text-base font-semibold " + 
                FONT + " flex items-center gap-2 hover:bg-[#25222b]/70 hover:" + 
                HIGHLIGHT + " hover:text-[#F5E1C4]";

              if (item.label === "Home" && isActive)
                baseClass += ` ${ACTIVE_BG} ${ACTIVE_TEXT} shadow-md`;
              else if (isActive)
                baseClass += ` ${HIGHLIGHT} bg-[#23213a]/60 text-[#F5E1C4]`;
              else
                baseClass += ` ${TEXT}`;

              if (item.dropdown) {
                return (
                  <li key={item.label} className="relative">
                    <button
                      className={baseClass}
                      onClick={() => handleDropdown(item.label)}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      style={{ minWidth: "120px" }}
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                        <ChevronDown
                          size={16}
                          className={
                            "ml-1 transition-transform duration-200 " +
                            (openDropdown === item.label || isActive ? HIGHLIGHT : "text-[#A6A0B7]") +
                            (openDropdown === item.label ? " rotate-180" : "")
                          }
                        />
                      </span>
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-12 min-w-[196px] rounded-xl shadow-2xl z-50 py-4 bg-[#1B1922]/95 border border-[#2C2734] animate-fade-in"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="flex flex-col gap-3 px-5">
                          {item.label === "Services" && (
                            <>
                              <Link
                                to="/services#agent-deployment"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Agent Deployment
                              </Link>
                              <Link
                                to="/services#process-automation"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Process Automation
                              </Link>
                              <Link
                                to="/services#ai-audits"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                AI Audits
                              </Link>
                              <Link
                                to="/services#ai-training"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                AI Training
                              </Link>
                            </>
                          )}
                          {item.label === "About" && (
                            <>
                              <Link
                                to="/about#team"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Our Team
                              </Link>
                              <Link
                                to="/about#mission"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Our Mission
                              </Link>
                              <Link
                                to="/about#values"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1 transition-colors`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Our Values
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link to={item.path} className={baseClass}>
                    {item.icon ? (
                      <span className="inline-flex items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </span>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Client Login button */}
        <div className="flex items-center justify-end">
          <Link
            to="/client"
            className={
              `px-6 py-2 rounded-full ${PILL_BTN_BG} ${PILL_BTN_TEXT} font-semibold text-base shadow-lg hover:bg-[#665ac2] transition-colors duration-150 ` +
              FONT
            }
            style={{
              letterSpacing: "0.02em",
            }}
          >
            Client Login
          </Link>
        </div>
      </div>
    </header>
  );
}
