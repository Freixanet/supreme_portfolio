import Counter from "@/components/ui/counter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import confetti from "canvas-confetti";
import { useEffect, useRef, useState } from "react";
import type React from "react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tunables: magnet strength/speed and micro-cue timings
  const MAGNET_MAX = 10; // px (was 12)
  const SPRING = 0.14; // interpolation factor (was 0.15)
  const SCALE_HOVER = 1.008; // subtle scale (was 1.01)
  const EDGE_JITTER_MAX = 1.2; // px (was 1.8)
  const EDGE_JITTER_THRESHOLD = 0.85; // start jitter near edge (was 0.75)

  const MILESTONE_1 = 0.3; // was 0.33
  const MILESTONE_2 = 0.6; // was 0.66
  const PULSE_MS = 900; // was 1100
  const PULSE_INTERVAL_MS = 12000; // was 9000
  const INITIAL_PULSE_DELAY_MS = 1800; // was 1400

  // Pointer glow for the primary CTA
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const animRef = useRef({
    raf: 0 as number | null,
    tx: 0,
    ty: 0,
    cx: 0,
    cy: 0,
    hover: false,
  });

  const handleButtonMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);

    // Magnetic translation (respect reduced motion)
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReduced) return;

    const mx = x - rect.width / 2;
    const my = y - rect.height / 2;
    const nx = mx / (rect.width / 2);
    const ny = my / (rect.height / 2);
    const dist = Math.min(Math.hypot(nx, ny), 1);
    const maxMagnet = MAGNET_MAX;
    let tx = nx * maxMagnet;
    let ty = ny * maxMagnet;

    // Subtle jitter near the edge threshold for tactile feel
    if (dist > EDGE_JITTER_THRESHOLD) {
      const amp =
        ((dist - EDGE_JITTER_THRESHOLD) / (1 - EDGE_JITTER_THRESHOLD)) *
        EDGE_JITTER_MAX;
      const t = performance.now() * 0.02;
      tx += Math.sin(t) * amp;
      ty += Math.cos(t * 1.2) * (amp * 0.7);
    }

    animRef.current.tx = tx;
    animRef.current.ty = ty;
    animRef.current.hover = true;
    ctaRef.current = el;
    if (!animRef.current.raf) {
      const animate = () => {
        const { tx, ty } = animRef.current;
        // springy interpolation
        animRef.current.cx += (tx - animRef.current.cx) * SPRING;
        animRef.current.cy += (ty - animRef.current.cy) * SPRING;
        const scale = animRef.current.hover ? SCALE_HOVER : 1;
        if (ctaRef.current) {
          ctaRef.current.style.transform = `translate3d(${animRef.current.cx.toFixed(
            2
          )}px, ${animRef.current.cy.toFixed(2)}px, 0) scale(${scale})`;
        }
        if (
          Math.abs(animRef.current.cx - tx) > 0.1 ||
          Math.abs(animRef.current.cy - ty) > 0.1 ||
          animRef.current.hover
        ) {
          animRef.current.raf = requestAnimationFrame(animate);
        } else {
          // finalize
          animRef.current.raf = null;
        }
      };
      animRef.current.raf = requestAnimationFrame(animate);
    }
  };

  // Periodic callout to draw attention to the CTA (paused on hover)
  const [callout, setCallout] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReduced) return;
    let intervalId: number | undefined;
    let timeoutId: number | undefined;
    const trigger = () => {
      if (!hovered) {
        setCallout(true);
        timeoutId = window.setTimeout(() => setCallout(false), PULSE_MS);
      }
    };
    // initial nudge after load
    const initialId = window.setTimeout(trigger, INITIAL_PULSE_DELAY_MS);
    // repeat every N seconds
    intervalId = window.setInterval(
      trigger,
      PULSE_INTERVAL_MS
    ) as unknown as number;
    return () => {
      window.clearTimeout(initialId);
      if (timeoutId) window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [hovered]);

  // Micro reward cues at 33% and 66% scroll, once per session
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReduced) return;
    const seen1 = sessionStorage.getItem("ctaMilestone1") === "1";
    const seen2 = sessionStorage.getItem("ctaMilestone2") === "1";
    let timeoutId: number | undefined;

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = scrollTop / max;
      if (!seen1 && p >= MILESTONE_1 && !hovered) {
        sessionStorage.setItem("ctaMilestone1", "1");
        setCallout(true);
        timeoutId = window.setTimeout(() => setCallout(false), PULSE_MS);
      } else if (!seen2 && p >= MILESTONE_2 && !hovered) {
        sessionStorage.setItem("ctaMilestone2", "1");
        setCallout(true);
        timeoutId = window.setTimeout(() => setCallout(false), PULSE_MS);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll as EventListener);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [hovered]);

  // Cleanup any pending RAF on unmount
  useEffect(() => {
    return () => {
      if (animRef.current.raf) cancelAnimationFrame(animRef.current.raf);
    };
  }, []);

  // Rotating social-proof micro-badge
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgePaused, setBadgePaused] = useState(false);
  const badgeMessages = useRef<string[]>([
    "Fast replies",
    "Privacy‑first",
    "Performance‑first",
    "Async‑friendly",
    "Timezone‑flexible",
    "ES / EN bilingual",
  ]);
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReduced) return; // rotate silently without animation if needed
    const id = window.setInterval(() => {
      if (!badgePaused) {
        setBadgeIndex((i) => (i + 1) % badgeMessages.current.length);
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, [badgePaused]);

  const fireConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReduced) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    // lightweight burst
    const end = Date.now() + 350;
    const colors = ["#0ea5e9", "#60a5fa", "#ffffff"]; // brand palette
    const shoot = () => {
      confetti({
        particleCount: 24,
        startVelocity: 36,
        spread: 55,
        ticks: 90,
        origin: { x, y },
        colors,
        scalar: 0.9,
        disableForReducedMotion: true,
      });
      if (Date.now() < end) requestAnimationFrame(shoot);
    };
    shoot();
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36">
        <h1 className="font-mono font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[9.5rem] leading-[0.95] mb-6 motion-safe:animate-fade-in-up">
          <span className="block text-subtle-gradient">DIGITAL</span>
          <span className="block reality-animated">REALITY</span>
          <span className="block text-subtle-gradient">ARCHITECT</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl lg:text-[22px] font-light max-w-4xl mx-auto mb-10 leading-relaxed opacity-90">
          Full-stack developer who <strong>moldea realidades digitales</strong>{" "}
          through authentic brutalist design and cosmic skill mastery. From
          primeros principios to production deployment.
        </p>

        {/* Social Proof Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 max-w-xl mx-auto">
          <div className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-3 py-4 sm:px-4 sm:py-5 overflow-visible">
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={15247}
                className="font-mono font-black text-2xl md:text-3xl text-sky-blue leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-github-stars"
              />
              <div className="text-sm text-minimal-secondary text-center w-full">
                GitHub Stars
              </div>
            </div>
          </div>
          <div
            className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-3 py-4 sm:px-4 sm:py-5 overflow-visible"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={89342}
                className="font-mono font-black text-2xl md:text-3xl text-sky-blue leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-profile-views"
              />
              <div className="text-sm text-minimal-secondary text-center w-full">
                Profile Views
              </div>
            </div>
          </div>
          <div
            className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-3 py-4 sm:px-4 sm:py-5 overflow-visible"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={127}
                className="font-mono font-black text-2xl md:text-3xl text-sky-blue leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-projects"
              />
              <div className="text-sm text-minimal-secondary text-center w-full">
                Projects
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            ref={ctaRef}
            variant="orange"
            className="group relative isolate overflow-hidden rounded-lg font-mono font-black px-6 py-3.5 text-base sm:px-8 sm:py-4.5 sm:text-lg xl:text-xl shadow-lg transition-all duration-300 will-change-transform hover:translate-y-px hover:shadow-xl active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue/70"
            onClick={(e) => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
              fireConfetti(e);
            }}
            onMouseMove={handleButtonMove}
            onMouseEnter={() => {
              setHovered(true);
              animRef.current.hover = true;
            }}
            onMouseLeave={() => {
              setHovered(false);
              animRef.current.hover = false;
              animRef.current.tx = 0;
              animRef.current.ty = 0;
              if (!animRef.current.raf) {
                const animateBack = () => {
                  animRef.current.cx += (0 - animRef.current.cx) * SPRING;
                  animRef.current.cy += (0 - animRef.current.cy) * SPRING;
                  if (ctaRef.current) {
                    ctaRef.current.style.transform = `translate3d(${animRef.current.cx.toFixed(2)}px, ${animRef.current.cy.toFixed(2)}px, 0) scale(1)`;
                  }
                  if (
                    Math.abs(animRef.current.cx) > 0.1 ||
                    Math.abs(animRef.current.cy) > 0.1
                  ) {
                    animRef.current.raf = requestAnimationFrame(animateBack);
                  } else {
                    animRef.current.raf = null;
                  }
                };
                animRef.current.raf = requestAnimationFrame(animateBack);
              }
            }}
            data-testid="button-hire-me"
            aria-label="Hire me now — start today"
          >
            {callout && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-sky-blue/25 mix-blend-screen blur-md animate-ping"
              />
            )}
            {/* Animated gradient border glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-25 mix-blend-overlay blur-[2px] [background:conic-gradient(from_0deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.35)_15%,rgba(0,0,0,0)_30%,rgba(255,255,255,0.35)_45%,rgba(0,0,0,0)_60%,rgba(255,255,255,0.35)_75%,rgba(0,0,0,0)_90%)] animate-[spin_6s_linear_infinite] group-hover:opacity-60"
            />
            {/* Pointer-follow glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(160px_160px_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)] mix-blend-overlay"
            />
            <span className="relative z-[1]">HIRE ME NOW</span>
          </Button>
          {/* Secondary CTA */}
          <Button
            variant="outline"
            className="border border-minimal-white text-minimal-white font-mono font-bold px-6 py-3.5 text-base sm:px-8 sm:py-4.5 sm:text-lg rounded-lg hover:bg-minimal-white hover:text-minimal-black transition-all duration-300"
            onClick={scrollToProjects}
            data-testid="button-view-projects"
          >
            VIEW PROJECTS
          </Button>
        </div>

        {/* Persuasive microcopy (urgency without deception) */}
        <div className="mt-4 font-mono text-xs sm:text-sm text-sky-blue/90">
          Start today — quick reply. Free 15‑min strategy call.
        </div>

        {/* Social-proof rotating micro-badge */}
        <div
          className="mt-14 flex justify-center"
          onMouseEnter={() => setBadgePaused(true)}
          onMouseLeave={() => setBadgePaused(false)}
        >
          <Badge
            variant="glass"
            className="px-2.5 py-1 text-[10px] sm:text-xs overflow-hidden whitespace-nowrap leading-none min-h-[22px] sm:min-h-[24px]"
          >
            <span key={badgeIndex} className="block animate-fade-in-up">
              {badgeMessages.current[badgeIndex]}
            </span>
          </Badge>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-1/2 bottom-4 sm:bottom-6">
        <div className="-translate-x-1/2 transform">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-sky-blue motion-safe:animate-bounce-inertia" />
        </div>
      </div>
    </section>
  );
}
