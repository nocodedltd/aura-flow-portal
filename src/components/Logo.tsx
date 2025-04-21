
import { useTheme } from "@/hooks/useTheme";

const logos = {
  light: "/lovable-uploads/277baf83-de9c-4346-bcca-af2ea9cdcd28.png", // dark text for light bg
  dark: "/lovable-uploads/7da73114-6263-4b78-b6cb-b0c8d2756a99.png",  // light text for dark bg
};

export default function Logo({ className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { theme } = useTheme();
  
  // Determine which logo to show based on the current theme
  const logoSrc = theme === "dark" ? logos.dark : logos.light;

  return (
    <img
      src={logoSrc}
      alt="n&lt;/&gt;coded"
      className={`h-10 max-w-none select-none ${className}`}
      draggable="false"
      {...props}
    />
  );
}
