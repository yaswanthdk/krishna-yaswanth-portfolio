import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-border/50" />
      <About />
      <div className="border-t border-border/50" />
      <Experience />
      <div className="border-t border-border/50" />
      <Projects />
      <div className="border-t border-border/50" />
      <Skills />
      <div className="border-t border-border/50" />
      <Education />
      <div className="border-t border-border/50" />
      <Contact />
    </>
  );
}
