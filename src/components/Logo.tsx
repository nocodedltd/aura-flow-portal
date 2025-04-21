
export default function Logo({ className = "", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  // Only use the provided logo (light one for dark bg)
  // Image uploaded by user: public/lovable-uploads/89fd0642-4efc-483f-8cca-5bc544baddbd.png
  return (
    <img
      src="/lovable-uploads/89fd0642-4efc-483f-8cca-5bc544baddbd.png"
      alt="Logo"
      className={`h-10 max-w-none select-none ${className}`}
      draggable="false"
      {...props}
    />
  );
}
