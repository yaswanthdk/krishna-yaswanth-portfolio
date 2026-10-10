import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

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
    </>
  );
}
