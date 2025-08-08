import { useEffect, useRef } from "react";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxSectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

export default function ParallaxSection({ 
  id, 
  className = "", 
  children, 
  backgroundImage 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useParallax(sectionRef);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={className}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 parallax-bg opacity-10" 
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      {children}
    </section>
  );
}
