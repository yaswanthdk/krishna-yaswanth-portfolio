import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-border/50"></div>
      <About />
    </>
  );
}
