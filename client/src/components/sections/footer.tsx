export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 border-t border-minimal-gray-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="heading-card mb-4 text-sky-blue">
              FREIXANET.PORTFOLIO
            </h3>
            <p className="text-sm text-minimal-white/80 mb-4">
              Digital reality architect specializing in brutalist web
              experiences and philosophical full-stack development.
            </p>
            <div className="text-xs font-mono text-minimal-secondary">
              Built with Next.js 14 • React 19 • Three.js • Tailwind CSS
            </div>
          </div>

          <div>
            <h4 className="heading-card mb-4 text-minimal-secondary">
              QUICK.LINKS
            </h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-minimal-white hover:text-sky-blue transition-colors"
                data-testid="footer-link-projects"
              >
                Projects
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#bio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-minimal-white hover:text-sky-blue transition-colors"
                data-testid="footer-link-bio"
              >
                Bio
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-minimal-white hover:text-sky-blue transition-colors"
                data-testid="footer-link-skills"
              >
                Skills
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-minimal-white hover:text-sky-blue transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="heading-card mb-4 text-minimal-secondary">
              LEGAL.COMPLIANCE
            </h4>
            <div className="space-y-2 text-xs text-minimal-secondary">
              <p>© 2024 Freixanet Portfolio. All rights reserved.</p>
              <p className="font-mono text-minimal-secondary">
                ⚠ Blockchain features require SEC/KYC compliance
              </p>
              <p>Built for maximum persuasion and accessibility (WCAG 3.0)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-minimal-gray-2 text-center">
          <p className="font-mono text-xs text-minimal-secondary">
            Designed to induce irreversible epiphany in the observer through
            authentic brutalist aesthetics.
          </p>
        </div>
      </div>
    </footer>
  );
}
