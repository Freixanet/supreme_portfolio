import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Bio from "@/components/sections/bio";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1} className="min-h-screen text-minimal-white">
        <Hero />
        <Projects />
        <Bio />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
