import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6e74af",
          50: "#f1f2f8",
          100: "#e3e5f0",
          200: "#c7cbdf",
          300: "#aeb3d1",
          400: "#8e94bc",
          500: "#6e74af",
          600: "#5a5e96",
          700: "#4a4e7d",
          800: "#3c3f64",
          900: "#303251",
          950: "#23253a",
        },
        secondary: {
          DEFAULT: "#f9dec9",
          50: "#fefaf6",
          100: "#fcf5ec",
          200: "#faebd9",
          300: "#f9dec9",
          400: "#f5c59f",
          500: "#efaa74",
          600: "#e88a4c",
          700: "#da6d30",
          800: "#b55526",
          900: "#944822",
          950: "#4f2411",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "cursor-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.2)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.6", 
            boxShadow: "0 0 5px rgba(110, 116, 175, 0.5), 0 0 10px rgba(110, 116, 175, 0.3)" 
          },
          "50%": { 
            opacity: "1", 
            boxShadow: "0 0 20px rgba(110, 116, 175, 0.8), 0 0 30px rgba(110, 116, 175, 0.6)" 
          }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "bounce-light": {
          "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(-5px)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
        "fade-out": "fade-out 0.4s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
        "cursor-pulse": "cursor-pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 12s linear infinite",
        "bounce-light": "bounce-light 2s infinite",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      boxShadow: {
        'xl': '0 8px 40px 0 rgba(110, 116, 175, 0.13), 0 2px 8px rgba(0,0,0,0.06)',
        'lg': '0 2px 24px 0 rgba(110, 116, 175, 0.10)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
