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

  const MILESTONE_1 = 0.3;
  const MILESTONE_2 = 0.6;
  const PULSE_MS = 900;
  const PULSE_INTERVAL_MS = 12000;
  const INITIAL_PULSE_DELAY_MS = 1800;

  // Simplified: only update CSS vars for pointer glow
  const handleButtonMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
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

  // Mount flag for smooth, transition-based cascade (no animation property conflicts)
  const [titleReady, setTitleReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setTitleReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-20 md:pt-28 pb-20 sm:pb-28 md:pb-36">
        <h1 className="font-mono font-black text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[9.5rem] leading-[0.95] pb-6 px-5 sm:px-0">
          <span
            className={`block text-subtle-gradient transform [transition-property:opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
              titleReady
                ? "opacity-100 translate-y-0 [filter:blur(0px)]"
                : "opacity-0 translate-y-[8px] [filter:blur(6px)]"
            }`}
            style={{ transitionDelay: "0s" }}
          >
            DIGITAL
          </span>
          <span
            className={`block reality-animated transform [transition-property:opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
              titleReady
                ? "opacity-100 translate-y-0 [filter:blur(0px)]"
                : "opacity-0 translate-y-[8px] [filter:blur(6px)]"
            }`}
            style={{ transitionDelay: "0.35s" }}
          >
            REALITY
          </span>
          <span
            className={`block w-fit mx-auto sm:w-auto sm:mx-0 text-subtle-gradient tracking-[-0.01em] sm:tracking-normal transform [transition-property:opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
              titleReady
                ? "opacity-100 translate-y-0 [filter:blur(0px)]"
                : "opacity-0 translate-y-[8px] [filter:blur(6px)]"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            ARCHITECT
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl lg:text-[22px] font-light max-w-4xl mx-auto pb-10 leading-relaxed opacity-90">
          Full-stack developer who <strong>moldea realidades digitales</strong>{" "}
          through authentic brutalist design and cosmic skill mastery.
        </p>

        {/* Social Proof Counters */}
        <div className="grid grid-cols-3 gap-2 sm:gap-8 pb-12 w-full max-w-4xl mx-auto">
          <div className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-2 py-3 sm:px-4 sm:py-5 overflow-visible">
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={15247}
                className="font-mono font-black text-xl sm:text-2xl md:text-3xl reality-animated leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-github-stars"
              />
              <div className="text-[11px] sm:text-sm text-minimal-secondary text-center w-full">
                GitHub Stars
              </div>
            </div>
          </div>
          <div
            className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-2 py-3 sm:px-4 sm:py-5 overflow-visible"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={89342}
                className="font-mono font-black text-xl sm:text-2xl md:text-3xl reality-animated leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-profile-views"
              />
              <div className="text-[11px] sm:text-sm text-minimal-secondary text-center w-full">
                Profile Views
              </div>
            </div>
          </div>
          <div
            className="text-center motion-safe:animate-counter bg-minimal-black/20 backdrop-blur-sm rounded-lg px-2 py-3 sm:px-4 sm:py-5 overflow-visible"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="inline-flex flex-col items-center gap-1 w-max mx-auto">
              <Counter
                target={127}
                className="font-mono font-black text-xl sm:text-2xl md:text-3xl reality-animated leading-[1.15] whitespace-nowrap inline-block"
                data-testid="counter-projects"
              />
              <div className="text-[11px] sm:text-sm text-minimal-secondary text-center w-full">
                Projects
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap gap-5 sm:gap-7 justify-center items-center pb-4">
          <Button
            variant="orange"
            className="group relative isolate overflow-hidden font-mono font-black px-6 py-3.5 text-base sm:px-8 sm:py-4.5 sm:text-lg xl:text-xl translate-y-px shadow-xl sm:translate-y-0 sm:shadow-lg transition-all duration-300 will-change-transform sm:hover:translate-y-px sm:hover:shadow-xl active:translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue/70 [--x:50%] [--y:50%] scale-[1.008] sm:scale-100 !rounded-xl"
            onClick={(e) => {
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
              fireConfetti(e);
            }}
            onMouseMove={handleButtonMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-testid="button-hire-me"
            aria-label="Hire me now — start today"
          >
            {/* Removed glass layers to preserve exact original color */}
            {callout && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-sky-blue/25 mix-blend-screen blur-md animate-ping"
              />
            )}
            {/* Animated gradient border glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-60 sm:opacity-25 mix-blend-overlay blur-[2px] [background:conic-gradient(from_0deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.35)_15%,rgba(0,0,0,0)_30%,rgba(255,255,255,0.35)_45%,rgba(0,0,0,0)_60%,rgba(255,255,255,0.35)_75%,rgba(0,0,0,0)_90%)] animate-[spin_6s_linear_infinite] sm:group-hover:opacity-60"
            />
            {/* Pointer-follow glow (always on in mobile, hover on sm+) */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100 [background:radial-gradient(160px_160px_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)] mix-blend-overlay"
            />
            <span className="relative z-[4]">HIRE ME NOW</span>
          </Button>
          {/* Secondary CTA */}
          <Button
            variant="outline"
            className="relative overflow-hidden border border-minimal-white text-minimal-white font-mono font-bold px-6 py-3.5 text-base sm:px-8 sm:py-4.5 sm:text-lg transition-all duration-300 glass-button glass-preserve-color !rounded-xl hover:bg-transparent hover:text-current"
            onClick={scrollToProjects}
            onMouseMove={handleButtonMove}
            data-testid="button-view-projects"
          >
            {/* Liquid Glass layers */}
            <span className="glass-filter rounded-[inherit]" aria-hidden />
            <span className="glass-overlay rounded-[inherit]" aria-hidden />
            <span className="glass-specular rounded-[inherit]" aria-hidden />
            <span className="relative z-[4]">VIEW PROJECTS</span>
          </Button>
        </div>

        {/* Persuasive microcopy (urgency without deception) */}
        <div className="pt-4 font-mono text-xs sm:text-sm text-sky-blue/90">
          Start today — quick reply. Free 15‑min strategy call.
        </div>

        {/* Social-proof rotating micro-badge */}
        <div
          className="pt-14 flex justify-center"
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
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-sky-blue/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
