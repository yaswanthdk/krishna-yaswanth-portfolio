import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-border/50" />
      <About />
      <div className="border-t border-border/50" />
      <Experience />
    </>
  );
}
