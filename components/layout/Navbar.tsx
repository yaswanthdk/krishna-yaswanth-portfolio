import Link from "next/link";

import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/constants/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-sm">
      <nav aria-label="Main navigation">
        <Container className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground"
          >
            {siteConfig.name}
          </Link>
          <ThemeToggle />
        </Container>
      </nav>
    </header>
  );
}
