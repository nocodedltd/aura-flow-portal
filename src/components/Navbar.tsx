
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// Palette
const BG = "bg-[#221F26]";
const TEXT = "text-[#F5E1C4]";
const ACTIVE_BG = "bg-[#777CE6]";
const ACTIVE_TEXT = "text-[#F5E1C4]";
const HIGHLIGHT = "text-[#777CE6]";
const PILL_BTN_BG = "bg-[#777CE6]";
const PILL_BTN_TEXT = "text-[#F5E1C4]";
const TRANSITION = "transition-colors duration-200";
const FONT = "font-sans";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", dropdown: true },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About", path: "/about", dropdown: true },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  // Simple dropdown state for demo (would be replaced by shadcn dropdown in prod)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-[#2C2734] ${BG}`}
    >
      <div className={`container flex items-center justify-between h-16`}>
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Homepage">
          <img
            src="/lovable-uploads/5474f216-66de-4286-8816-9b3b1bea942f.png"
            alt="NoCoded logo"
            className="h-8 w-auto"
            style={{ maxWidth: "148px" }}
          />
        </Link>
        {/* Navigation */}
        <nav>
          <ul className={`flex items-center gap-7 ml-12`}>
            {navItems.map((item) => {
              // Active State
              const isActive =
                location.pathname === item.path ||
                (item.label === "Services" &&
                  location.pathname.startsWith("/services")) ||
                (item.label === "About" && location.pathname.startsWith("/about"));
              // Shared classes
              let liClass = `relative px-3 py-2 rounded-full cursor-pointer select-none ${FONT} ${TRANSITION}`;
              // "Home" active pill, others minimal highlight for active
              if (item.label === "Home" && isActive)
                liClass += ` ${ACTIVE_BG} ${ACTIVE_TEXT} font-semibold`;
              else if (isActive) liClass += ` ${HIGHLIGHT} font-semibold`;

              // Inactive style
              if (!isActive) liClass += ` ${TEXT} hover:${HIGHLIGHT}`;
              // Add dropdown indicator
              if (item.dropdown) {
                return (
                  <li
                    key={item.label}
                    className={liClass + " flex items-center group"}
                    tabIndex={0}
                    onClick={() => handleDropdown(item.label)}
                    onBlur={() => setOpenDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`ml-1 stroke-2 ${
                        openDropdown === item.label || isActive
                          ? HIGHLIGHT
                          : "text-[#A6A0B7]"
                      } ${TRANSITION}`}
                    />
                    {openDropdown === item.label && (
                      <div
                        className="absolute left-0 top-11 min-w-[185px] rounded-xl shadow-xl z-50 py-4"
                        style={{
                          background: "#221F26",
                          border: "1px solid #2C2734",
                        }}
                      >
                        {/* Minimal example dropdown content */}
                        <div className="flex flex-col gap-3 px-4">
                          {item.label === "Services" && (
                            <>
                              <Link
                                to="/services#agent-deployment"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Agent Deployment
                              </Link>
                              <Link
                                to="/services#process-automation"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Process Automation
                              </Link>
                              <Link
                                to="/services#ai-audits"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                AI Audits
                              </Link>
                              <Link
                                to="/services#ai-training"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
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
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Our Team
                              </Link>
                              <Link
                                to="/about#mission"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                Our Mission
                              </Link>
                              <Link
                                to="/about#values"
                                className={`${TEXT} hover:${HIGHLIGHT} py-1`}
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
              // Normal nav (no dropdown)
              return (
                <li key={item.label} className={liClass}>
                  <Link to={item.path} className="block w-full h-full">
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Client Login pill button */}
            <li className="ml-3">
              <Link
                to="/client"
                className={`px-5 py-2 rounded-full ${PILL_BTN_BG} ${PILL_BTN_TEXT} font-semibold text-base shadow-md hover:bg-[#665ac2] ${TRANSITION} ${FONT}`}
                style={{
                  boxShadow: "0px 3px 15px 0px rgba(119,124,230,0.12)",
                  letterSpacing: "0.03em"
                }}
              >
                Client Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
