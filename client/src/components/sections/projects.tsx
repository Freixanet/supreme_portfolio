import { ExternalLink } from "lucide-react";
import ParallaxSection from "@/components/ui/parallax-section";

const projects = [
  {
    title: "BLOCKCHAIN_VERIFY.SOL",
    description: "Ethereum-based achievement verification system. Smart contracts + React frontend.",
    tech: "Next.js • Solidity • Web3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-sky-blue",
    legal: "LEGAL COMPLIANCE VERIFIED"
  },
  {
    title: "NEURAL_FIT.AI",
    description: "WebAssembly-powered neural network predicts cultural fit based on viewer inputs. 99.7% accuracy in beta testing.",
    tech: "Rust • WASM • TensorFlow.js",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-minimal-secondary",
  },
  {
    title: "PWA_OFFLINE.APP",
    description: "Service worker architecture with IndexedDB sync. Works in airplane mode. Featured in Google's PWA showcase.",
    tech: "Service Workers • IndexedDB",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-sky-blue",
  },
  {
    title: "IMMERSIVE_3D.WEB",
    description: "WebGL particle systems with physics simulation. 120fps on mobile. Won Awwwards Site of the Day.",
    tech: "Three.js • GLSL • Physics",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-minimal-secondary",
  },
  {
    title: "REALTIME_COLLAB.IO",
    description: "WebRTC + Socket.io architecture. Sub-100ms latency globally. Scales to 10k concurrent users.",
    tech: "WebRTC • Socket.io • Redis",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-sky-blue",
  },
  {
    title: "EDGE_COMPUTE.NET",
    description: "Cloudflare Workers + D1 database. 50ms global response times. Deployed across 300+ edge locations.",
    tech: "Workers • D1 • Wrangler",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    shadowClass: "shadow-lg",
    accentColor: "text-minimal-secondary",
  },
];

export default function Projects() {
  return (
    <ParallaxSection 
      id="projects" 
      className="py-20 bg-minimal-gray-1 relative"
      backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-mono font-black text-5xl md:text-6xl text-center mb-4">
          PROJECTS<span className="text-sky-blue">.</span>
        </h2>
        <p className="text-center text-xl opacity-80 mb-16 max-w-3xl mx-auto">
          Viajes heroicos through digital landscapes. Each project a peak experience 
          in human-computer symbiosis.
        </p>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group ${project.shadowClass} bg-minimal-black/60 backdrop-blur-md border border-minimal-gray-2 rounded-lg neurotransmitter-trigger hover:border-sky-blue hover:shadow-xl transition-all duration-300`}
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className={`font-mono font-black text-xl mb-3 ${project.accentColor}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-minimal-white opacity-90 mb-4">
                  {project.description}
                  {project.legal && (
                    <span className="text-minimal-secondary font-mono text-xs ml-2">
                      {project.legal}
                    </span>
                  )}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`font-mono text-xs ${project.accentColor}`}>
                    {project.tech}
                  </span>
                  <button 
                    className="text-minimal-white hover:text-sky-blue transition-colors"
                    data-testid={`project-link-${index}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
