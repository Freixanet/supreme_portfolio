import { useEffect, RefObject } from "react";

export function useParallax(elementRef: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = elementRef.current;
    if (!root) return;

    const parallaxElements = root.querySelectorAll(".parallax-bg");
    if (!parallaxElements || parallaxElements.length === 0) {
      // No parallax elements present; avoid adding any listeners
      return;
    }

    let ticking = false;

    const update = () => {
      if (!elementRef.current) {
        ticking = false;
        return;
      }

      // Skip work if section is far outside viewport to reduce style updates
      const rect = elementRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) {
        ticking = false;
        return;
      }

      const scrolled = window.scrollY || window.pageYOffset;
      parallaxElements.forEach((el) => {
        const speed = 0.5;
        (el as HTMLElement).style.transform = `translateY(${
          scrolled * speed
        }px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Initial position
    requestAnimationFrame(update);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll as EventListener);
  }, [elementRef]);
}
