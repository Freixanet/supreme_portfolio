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
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-minimal-gray-1 via-minimal-gray-1 to-minimal-black">
      {/* 3D Orbital Skills Background */}
      <div className="absolute inset-0 z-0">
        <OrbitalAnimation />
      </div>
      
      {/* Elegant gradient overlay with subtle accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-minimal-black/30 via-transparent to-minimal-gray-1/15" />
      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/6 via-transparent to-minimal-secondary/4" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-mono font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-8 animate-fade-in-up">
          <span className="block text-minimal-white">DIGITAL</span>
          <span className="block text-sky-blue">REALITY</span>
          <span className="block text-minimal-white">ARCHITECT</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Full-stack developer who <strong>moldea realidades digitales</strong> through authentic brutalist design 
          and cosmic skill mastery. From primeros principios to production deployment.
        </p>
        
        {/* Social Proof Counters */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-4 py-3">
            <Counter 
              target={15247} 
              className="font-mono font-black text-3xl text-sky-blue" 
              data-testid="counter-github-stars"
            />
            <div className="text-sm text-minimal-secondary">GitHub Stars</div>
          </div>
          <div className="text-center animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-4 py-3" style={{ animationDelay: "0.2s" }}>
            <Counter 
              target={89342} 
              className="font-mono font-black text-3xl text-sky-blue"
              data-testid="counter-profile-views"
            />
            <div className="text-sm text-minimal-secondary">Profile Views</div>
          </div>
          <div className="text-center animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-4 py-3" style={{ animationDelay: "0.4s" }}>
            <Counter 
              target={127} 
              className="font-mono font-black text-3xl text-sky-blue"
              data-testid="counter-projects"
            />
            <div className="text-sm text-minimal-secondary">Projects</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="bg-sky-blue text-minimal-black font-mono font-black px-8 py-4 text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 neurotransmitter-trigger shadow-lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-hire-me"
          >
            HIRE ME NOW
          </button>
          <button 
            className="border border-minimal-white text-minimal-white font-mono font-bold px-8 py-4 text-lg rounded-lg hover:bg-minimal-white hover:text-minimal-black transition-all duration-300"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
          >
            VIEW PROJECTS
          </button>
        </div>
        
        {/* Scarcity Indicator */}
        <div className="mt-8 text-minimal-secondary font-mono text-sm animate-pulse-slow">
          ⚠ LIMITED COLLABORATION SLOTS AVAILABLE ⚠
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-sky-blue" />
      </div>
    </section>
  );
}
