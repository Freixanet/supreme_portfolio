import { useState, useEffect } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  className?: string;
  "data-testid"?: string;
}

export default function Counter({
  target,
  duration = 2000,
  className = "",
  "data-testid": testId,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId = 0 as number | ReturnType<typeof requestAnimationFrame>;
    const start = performance.now();
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const overshootFactor = prefersReduced ? 1 : 1.06; // 6% overshoot
    const overshootPhase = prefersReduced ? 1 : 0.85; // settle in last 15%

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);

      if (t < overshootPhase) {
        const p = easeOutCubic(t / overshootPhase);
        setCount(Math.floor(target * overshootFactor * p));
      } else {
        // settle back to target in the remaining time
        const p = (t - overshootPhase) / (1 - overshootPhase);
        const current = target * overshootFactor;
        const value = current + (target - current) * p; // interpolate back to target
        setCount(Math.floor(value));
      }

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId as number);
  }, [target, duration]);

  return (
    <div className={className} data-testid={testId}>
      {count.toLocaleString()}
    </div>
  );
}
