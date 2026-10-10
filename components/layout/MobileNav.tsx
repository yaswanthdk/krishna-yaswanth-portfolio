"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X /> : <Menu />}
      </Button>

      <div
        id="mobile-nav-panel"
        className={cn(
          "absolute inset-x-0 top-14 border-b border-border/50 bg-background",
          open ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
