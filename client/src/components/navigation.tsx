import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const [progress, setProgress] = useState(0);

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

        <div className="nav-inner w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px]">
          <div className="flex justify-between items-center h-full">
            <div className="text-xl tracking-wider">
              <span className="text-sky-blue">&gt;</span>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 ml-2"
                aria-label="Go to home"
              >
                <span className="font-mono font-black italic text-minimal-white leading-none text-crisp">
                  FREIXANET
                </span>
                <Badge
                  variant="glass"
                  className="px-1.5 py-0 h-5 leading-none text-[10px] md:text-[11px] uppercase tracking-wide ml-1 mt-0.5 flex items-center"
                >
                  <span>Portfolio</span>
                </Badge>
              </a>
            </div>

            <div className="hidden md:flex space-x-8 font-mono font-bold">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative inline-flex flex-col items-center text-minimal-white hover:text-sky-blue transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-sky-blue after:content-[''] after:absolute after:-bottom-1 after:h-0.5 after:w-6 after:bg-gradient-to-r after:from-sky-blue after:to-blue-500 after:rounded-full"
                      : ""
                  }`}
                  aria-current={activeSection === item.href ? "page" : undefined}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-minimal-white hover:text-sky-blue"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="mobile-menu-button"
              type="button"
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
