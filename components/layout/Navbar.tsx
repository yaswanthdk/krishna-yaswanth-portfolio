import Link from "next/link";

import { Container } from "@/components/common/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-sm">
      <nav className="relative" aria-label="Main navigation">
        <Container className="flex h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="min-w-0 truncate text-sm font-medium tracking-tight text-foreground"
          >
            {siteConfig.name}
          </Link>

          <div className="flex shrink-0 items-center gap-1">
            <ul className="hidden items-center gap-1 lg:flex">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <MobileNav />
            <ThemeToggle />
          </div>
        </Container>
      </nav>
    </header>
  );
}
