
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass rounded-full p-2 shadow-lg">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          <Sun
            className={cn(
              "h-5 w-5 rotate-0 scale-100 transition-all",
              theme !== "light" && "rotate-90 scale-0"
            )}
          />
          <Moon
            className={cn(
              "absolute h-5 w-5 rotate-90 scale-0 transition-all",
              theme === "dark" && "rotate-0 scale-100"
            )}
          />
        </button>
      </div>
    </div>
  );
}
