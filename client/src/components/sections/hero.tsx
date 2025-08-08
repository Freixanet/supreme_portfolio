import { useEffect } from "react";
import Counter from "@/components/ui/counter";
import OrbitalAnimation from "@/components/ui/orbital-animation";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* 3D Orbital Skills Background */}
      <div className="absolute inset-0 z-0">
        <OrbitalAnimation />
      </div>
      
      {/* Parallax background layer */}
      <div 
        className="absolute inset-0 parallax-bg opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-mono font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-8 animate-fade-in-up">
          <span className="block text-brutal-white">DIGITAL</span>
          <span className="block text-matrix-green">REALITY</span>
          <span className="block text-brutal-white">ARCHITECT</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Full-stack developer who <strong>moldea realidades digitales</strong> through authentic brutalist design 
          and cosmic skill mastery. From primeros principios to production deployment.
        </p>
        
        {/* Social Proof Counters */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center animate-counter">
            <Counter 
              target={15247} 
              className="font-mono font-black text-3xl text-matrix-green" 
              data-testid="counter-github-stars"
            />
            <div className="text-sm opacity-70">GitHub Stars</div>
          </div>
          <div className="text-center animate-counter" style={{ animationDelay: "0.2s" }}>
            <Counter 
              target={89342} 
              className="font-mono font-black text-3xl text-matrix-green"
              data-testid="counter-profile-views"
            />
            <div className="text-sm opacity-70">Profile Views</div>
          </div>
          <div className="text-center animate-counter" style={{ animationDelay: "0.4s" }}>
            <Counter 
              target={127} 
              className="font-mono font-black text-3xl text-matrix-green"
              data-testid="counter-projects"
            />
            <div className="text-sm opacity-70">Projects</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="brutalist-shadow bg-matrix-green text-brutal-black font-mono font-black px-8 py-4 text-lg hover:bg-brutal-white transition-colors duration-300 neurotransmitter-trigger"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hire-me"
          >
            HIRE ME NOW
          </button>
          <button 
            className="border-2 border-brutal-white font-mono font-bold px-8 py-4 text-lg hover:bg-brutal-white hover:text-brutal-black transition-all duration-300"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
          >
            VIEW PROJECTS
          </button>
        </div>
        
        {/* Scarcity Indicator */}
        <div className="mt-8 text-neon-red font-mono text-sm animate-pulse-slow">
          ⚠ LIMITED COLLABORATION SLOTS AVAILABLE ⚠
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-matrix-green" />
      </div>
    </section>
  );
}
