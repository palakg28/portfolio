import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills/>
      <Resume/>
      <Contact />
    </>
  );
}
