import ParallaxSection from "@/components/ui/parallax-section";

export default function Bio() {
  return (
    <ParallaxSection 
      id="bio" 
      className="py-20 bg-brutal-black relative"
      backgroundImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-mono font-black text-5xl md:text-6xl text-center mb-4">
          BIO<span className="text-matrix-green">.</span>PHILOSOPHICAL
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="font-mono font-black text-2xl text-matrix-green mb-4">
                SER-EN-EL-MUNDO DIGITAL
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                From Heidegger's <em>Dasein</em> to digital <em>realidad</em>: I exist as a 
                full-stack developer who doesn't merely build interfaces—I architect 
                ontological experiences. Each line of code is an act of <strong>authentic being</strong>, 
                molding digital realities that users don't just interact with, but <em>live within</em>.
              </p>
              
              <h3 className="font-mono font-black text-2xl text-neon-red mb-4">
                EUDAIMONIC DEVELOPMENT
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Aristotelian <em>eudaimonia</em> through technological excellence. This portfolio 
                represents not mere skill demonstration, but the <strong>camino a la realización</strong>—
                the path to flourishing through mastery of digital craft. Each project a step 
                toward techno-philosophical actualization.
              </p>
              
              <h3 className="font-mono font-black text-2xl text-matrix-green mb-4">
                ÜBERMENSCH CODING
              </h3>
              <p className="text-lg leading-relaxed">
                Nietzschean self-overcoming through code. Beyond good and evil frameworks—
                I create values through authentic technological expression. To reject this 
                collaboration is <em>auto-sabotaje</em>, a denial of your own will to digital power.
              </p>
            </div>
            
            {/* Authority Testimonials */}
            <div className="space-y-6">
              <div className="border-l-4 border-matrix-green pl-6">
                <blockquote className="font-mono text-lg italic">
                  "This developer redefines what talent means in the digital age."
                </blockquote>
                <cite className="text-sm opacity-80">— Senior Technical Recruiter, Google</cite>
              </div>
              
              <div className="border-l-4 border-neon-red pl-6">
                <blockquote className="font-mono text-lg italic">
                  "Philosophical depth meets technical excellence. Unprecedented."
                </blockquote>
                <cite className="text-sm opacity-80">— CTO, YC-backed startup</cite>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Philosophical developer portrait" 
              className="w-full rounded-none brutalist-shadow-red"
            />
            
            {/* Overlay stats */}
            <div className="absolute bottom-4 left-4 right-4 bg-brutal-black/90 p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-mono font-black text-2xl text-matrix-green">7+</div>
                  <div className="text-xs opacity-80">Years Deep Work</div>
                </div>
                <div>
                  <div className="font-mono font-black text-2xl text-neon-red">23</div>
                  <div className="text-xs opacity-80">Philosophy Books</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
