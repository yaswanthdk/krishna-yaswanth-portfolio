import Link from "next/link";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/constants/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
