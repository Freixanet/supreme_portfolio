import ParallaxSection from "@/components/ui/parallax-section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import profilePicture from "@/assets/profilepicture.jpeg";
import { Check, Sparkles, Cpu } from "lucide-react";

export default function Bio() {
  return (
    <ParallaxSection id="bio" className="py-24 relative overflow-hidden">
      {/* Fondo global aplicado en <body>; sección sin capas locales */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="heading-section text-center mb-12 sm:mb-16">
          BIO<span className="text-sky-blue">.</span>PHILOSOPHICAL
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col lg:h-full">
            <div className="max-w-prose">
              <div className="font-mono text-minimal-secondary text-xs tracking-widest mb-2">
                ABOUT
              </div>
              <p className="font-mono font-black text-3xl sm:text-4xl leading-tight text-minimal-white mb-4">
                I design and build systems users can inhabit — not just use.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-minimal-white/90">
                Philosophy‑driven engineering. Brutalist aesthetics. Production
                rigor. My work blends clarity, speed and purpose.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-sky-blue mt-0.5" />
                  <span className="text-sm sm:text-base text-minimal-white/90">
                    Human‑centered flows that reduce friction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="h-4 w-4 text-sky-blue mt-0.5" />
                  <span className="text-sm sm:text-base text-minimal-white/90">
                    Performance budgets and structural simplicity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-4 w-4 text-sky-blue mt-0.5" />
                  <span className="text-sm sm:text-base text-minimal-white/90">
                    Distinct visual identity with restraint
                  </span>
                </li>
              </ul>
            </div>

            {/* Testimonial anclado al fondo en desktop */}
            <div className="border-l-4 border-sky-blue/70 pl-4 mt-8 lg:mt-auto pt-2">
              <blockquote className="font-mono text-base italic text-minimal-white/90">
                “Clarity of thought meets execution speed.”
              </blockquote>
              <cite className="text-xs text-minimal-secondary">
                — CTO, YC‑backed startup
              </cite>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 rounded-lg overflow-hidden elevation-2">
            <AspectRatio ratio={4 / 5}>
              <img
                src={profilePicture}
                alt="Philosophical developer portrait"
                className="w-full h-full object-cover object-[center_70%] transform scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
            </AspectRatio>

            {/* Stats overlay legible */}
            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/10 p-3 sm:p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                  <div>
                    <div className="font-mono font-black text-lg sm:text-xl text-sky-blue">
                      7+
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/85">
                      Years Deep Work
                    </div>
                  </div>
                  <div>
                    <div className="font-mono font-black text-lg sm:text-xl text-slate-200">
                      23
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/85">
                      Philosophy Books
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
