import { useEffect, useRef } from "react";

interface OrbitalAnimationProps {
  variant?: "hero" | "skills";
}

export default function OrbitalAnimation({ variant = "hero" }: OrbitalAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Placeholder for Three.js implementation
    // In a real implementation, this would create a 3D orbital system
    const placeholder = document.createElement('div');
    placeholder.className = 'flex items-center justify-center h-full';
    
    if (variant === "hero") {
      placeholder.innerHTML = `
        <div class="relative">
          <div class="w-64 h-64 border border-sky-blue rounded-full animate-orbital relative opacity-30">
            <div class="absolute top-4 left-1/2 w-4 h-4 bg-sky-blue rounded-full flex items-center justify-center text-xs font-mono">JS</div>
            <div class="absolute bottom-4 right-8 w-4 h-4 bg-minimal-secondary rounded-full flex items-center justify-center text-xs font-mono">RS</div>
            <div class="absolute left-4 top-1/2 w-4 h-4 bg-minimal-white rounded-full flex items-center justify-center text-xs font-mono text-black">PY</div>
            <div class="absolute right-4 top-8 w-4 h-4 bg-sky-blue rounded-full flex items-center justify-center text-xs font-mono">TS</div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center opacity-50">
              <div class="font-mono font-black text-xl text-sky-blue">COSMIC</div>
              <div class="font-mono font-black text-xl text-minimal-secondary">SKILLS</div>
            </div>
          </div>
        </div>
      `;
    } else {
      placeholder.innerHTML = `
        <div class="relative">
          <div class="w-48 h-48 border border-sky-blue rounded-full animate-orbital relative">
            <div class="absolute top-2 left-1/2 w-3 h-3 bg-sky-blue rounded-full"></div>
            <div class="absolute bottom-2 right-4 w-3 h-3 bg-minimal-secondary rounded-full"></div>
            <div class="absolute left-2 top-1/2 w-3 h-3 bg-minimal-white rounded-full"></div>
            <div class="absolute right-2 top-4 w-3 h-3 bg-sky-blue rounded-full"></div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="font-mono font-black text-lg text-sky-blue">SKILL</div>
              <div class="font-mono font-black text-lg text-minimal-secondary">MATRIX</div>
            </div>
          </div>
        </div>
      `;
    }
    
    containerRef.current.appendChild(placeholder);

    return () => {
      if (containerRef.current && placeholder.parentNode) {
        containerRef.current.removeChild(placeholder);
      }
    };
  }, [variant]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full"
      data-testid={`orbital-animation-${variant}`}
    />
  );
}
