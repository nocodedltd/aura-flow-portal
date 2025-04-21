
export default function Logo({ className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/lovable-uploads/9e2cd74b-e564-48ed-9929-1cf20224fc8d.png"
      alt="NoCoded Logo"
      className={`max-w-none select-none ${className}`}
      draggable="false"
      {...props}
    />
  );
}
