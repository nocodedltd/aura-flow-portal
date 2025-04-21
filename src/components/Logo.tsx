
export default function Logo({ className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  // Only use the provided logo for dark bg (light logo)
  // Image uploaded by user: public/lovable-uploads/f44d8710-d2ac-4258-9302-0fcb51ccc2e7.png
  return (
    <img
      src="/lovable-uploads/f44d8710-d2ac-4258-9302-0fcb51ccc2e7.png"
      alt="NoCoded Logo"
      className={`h-10 max-w-none select-none ${className}`}
      draggable="false"
      {...props}
    />
  );
}
