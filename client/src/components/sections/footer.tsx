export default function Footer() {
  return (
    <footer className="bg-brutal-gray-2 py-12 border-t-2 border-matrix-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono font-black text-xl mb-4 text-matrix-green">
              FREIXANET.PORTFOLIO
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Digital reality architect specializing in brutalist web experiences 
              and philosophical full-stack development.
            </p>
            <div className="text-xs font-mono opacity-60">
              Built with Next.js 14 • React 19 • Three.js • Tailwind CSS
            </div>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">QUICK.LINKS</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-matrix-green transition-colors"
                data-testid="footer-link-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => document.querySelector("#bio")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-matrix-green transition-colors"
                data-testid="footer-link-bio"
              >
                Bio
              </button>
              <button 
                onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-matrix-green transition-colors"
                data-testid="footer-link-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block hover:text-matrix-green transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-mono font-bold mb-4">LEGAL.COMPLIANCE</h4>
            <div className="space-y-2 text-xs opacity-70">
              <p>© 2024 Freixanet Portfolio. All rights reserved.</p>
              <p className="text-neon-red font-mono">
                ⚠ Blockchain features require SEC/KYC compliance
              </p>
              <p>Built for maximum persuasion and accessibility (WCAG 3.0)</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brutal-gray-1 text-center">
          <p className="font-mono text-sm opacity-60">
            Designed to induce irreversible epiphany in the observer through authentic brutalist aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
}
