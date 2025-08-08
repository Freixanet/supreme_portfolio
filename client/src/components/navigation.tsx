import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#hero", label: "HOME" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#bio", label: "BIO" },
    { href: "#skills", label: "SKILLS" },
    { href: "#contact", label: "CONTACT" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-minimal-black/90 backdrop-blur-md border-b border-minimal-gray-2">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono font-black text-xl tracking-wider">
            <span className="text-sky-blue">&gt;</span> FREIXANET.PORTFOLIO
          </div>
          
          <div className="hidden md:flex space-x-8 font-mono font-bold">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-minimal-white hover:text-sky-blue transition-colors duration-300"
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
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-minimal-black border-t border-minimal-gray-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
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
    </nav>
  );
}
