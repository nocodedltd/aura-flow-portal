
import { createContext, useContext } from "react";

// Always dark mode, no switching.
type Theme = "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "dark",
  setTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProviderContext.Provider value={{
      theme: "dark",
      setTheme: () => {},
    }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeProviderContext);
};
