import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useThemeToggle } from "@/hooks/use-dark-mode";
import type React from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [progress, setProgress] = useState(0);

  const { toggle } = useThemeToggle();
  const [dark, setDark] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = saved ? saved === "dark" : media.matches;
    setDark(initial);
  }, []);
  const onThemeToggle = () => {
    toggle();
    setDark((v) => !v);
  };

  const navItems = [
    { href: "#hero", label: "HOME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#bio", label: "BIO" },
    { href: "#skills", label: "SKILLS" },
    { href: "#contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.55,
    };
    const handler: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) {
        const id = `#${visible[0].target.id}`;
        setActiveSection(id);
      }
    };
    const observer = new IntersectionObserver(handler, options);
    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - window.innerHeight;
      const p = height > 0 ? Math.min(scrollTop / height, 1) : 0;
      setProgress(p);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () =>
      window.removeEventListener("scroll", onScroll as EventListener);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Primary Navigation">
      <div className="nav__glass" aria-hidden />
      <div className="nav__content">
        {/* Reading progress bar */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px] bg-transparent relative z-20"
          aria-hidden
        >
          <div
            className="h-full origin-left bg-gradient-to-r from-sky-blue to-blue-500"
            style={{ transform: `scaleX(${progress})` }}
            role="presentation"
          />
        </div>

        <div className="nav-inner w-full px-4 sm:px-6 lg:px-8 h-[70px]">
          <div className="flex justify-between items-center h-full">
            {/* Brand (left cluster) */}
            <div className="text-xl tracking-wider flex items-center">
              <a
                href="#hero"
                className="inline-flex items-center"
                aria-label="Go to home"
              >
                <span
                  className="logo-brand font-mono font-black italic text-foreground leading-none text-crisp relative text-xl sm:text-2xl md:text-3xl"
                  aria-label="FREIXANET"
                >
                  <style>{`
                    .logo-brand > span { position: relative; display:inline-block }
                    .logo-brand > .letter::after{
                      content: attr(data-char);
                      position:absolute; inset:0; color:transparent; pointer-events:none;
                    }
                    .logo-brand > .i::after{
                      filter: url(#brand-inner-right);
                      -webkit-mask-image: linear-gradient(90deg, transparent 49%, #000 49.1%);
                              mask-image: linear-gradient(90deg, transparent 49%, #000 49.1%);
                    }
                    .logo-brand > .x::after{
                      filter: url(#brand-inner-left);
                      clip-path: polygon(0% 0%, 38% 0%, 56% 50%, 38% 100%, 0% 100%);
                      -webkit-clip-path: polygon(0% 0%, 38% 0%, 56% 50%, 38% 100%, 0% 100%);
                    }
                    /* Use palette blue for filter color */
                    .logo-brand #brand-inner-right feFlood,
                    .logo-brand #brand-inner-left  feFlood { flood-color: var(--sky-blue); }
                  `}</style>
                  <span>F</span>
                  <span>R</span>
                  <span>E</span>
                  <span className="letter i" data-char="I">
                    I
                  </span>
                  <span className="letter x" data-char="X">
                    X
                  </span>
                  <span>A</span>
                  <span>N</span>
                  <span>E</span>
                  <span>T</span>

                  {/* Inline SVG filter defs for inner shadows */}
                  <svg
                    width="0"
                    height="0"
                    aria-hidden="true"
                    focusable="false"
                    className="absolute"
                  >
                    <defs>
                      <filter
                        id="brand-inner-right"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          stdDeviation="1"
                          result="b"
                        />
                        <feOffset in="b" dx="1.2" dy="0" result="o" />
                        <feComposite
                          in="o"
                          in2="SourceAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                          result="inner"
                        />
                        <feFlood flood-opacity="0.9" result="c" />
                        <feComposite
                          in="c"
                          in2="inner"
                          operator="in"
                          result="shade"
                        />
                        <feMerge>
                          <feMergeNode in="shade" />
                        </feMerge>
                      </filter>
                      <filter
                        id="brand-inner-left"
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          stdDeviation="1"
                          result="b"
                        />
                        <feOffset in="b" dx="-1.2" dy="0" result="o" />
                        <feComposite
                          in="o"
                          in2="SourceAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                          result="inner"
                        />
                        <feFlood flood-opacity="0.9" result="c" />
                        <feComposite
                          in="c"
                          in2="inner"
                          operator="in"
                          result="shade"
                        />
                        <feMerge>
                          <feMergeNode in="shade" />
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>

            {/* Right cluster (desktop): menu items + theme toggle */}
            <div className="hidden md:flex items-center gap-6 ml-auto">
              <div className="flex space-x-8 font-mono font-bold">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`relative inline-flex flex-col items-center text-foreground hover:text-sky-blue transition-colors duration-300 ${
                      activeSection === item.href
                        ? "text-sky-blue after:content-[''] after:absolute after:-bottom-1 after:h-0.5 after:w-6 after:bg-gradient-to-r after:from-sky-blue after:to-blue-500 after:rounded-full"
                        : ""
                    }`}
                    aria-current={
                      activeSection === item.href ? "page" : undefined
                    }
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={onThemeToggle}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center text-foreground hover:text-sky-blue p-0"
              >
                {dark ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>

            {/* Right controls (mobile only): theme + hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={onThemeToggle}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center text-foreground hover:text-sky-blue p-0"
              >
                {dark ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </button>

              <button
                className="md:hidden text-foreground hover:text-sky-blue"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="mobile-menu-button"
                type="button"
                aria-expanded={isOpen}
                aria-controls="primary-navigation"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div
              className="md:hidden"
              id="primary-navigation"
              role="navigation"
              aria-label="Primary"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-minimal-black border-t border-minimal-gray-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 font-mono font-bold text-minimal-white hover:text-sky-blue transition-colors duration-300"
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
