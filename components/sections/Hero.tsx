import { Container } from "@/components/common/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import { GitHubIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/constants/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[calc(100dvh-4rem)] items-center py-16 sm:py-20"
    >
      <Container>
        <div className="flex max-w-4xl flex-col gap-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-muted px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Available for Frontend Opportunities
        </span>

          <header className="space-y-4">
            <h1
              id="hero-heading"
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Krishna Yaswanth
            </h1>
            <p className="max-w-3xl text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Frontend Engineer building scalable, high-performance web applications.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>📍 Bengaluru, India</span>
              <span>•</span>
              <span>3+ Years Experience</span>
              <span>•</span>
              <span>Currently @ Edsanta</span>
            </div>
          </header>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I enjoy transforming complex product requirements into fast, scalable, and intuitive user experiences using React, Next.js, and modern frontend architecture.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
                <a href={siteConfig.resume}>
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Download Resume
                </a>
            </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <GitHubIcon className="mr-2 size-4" />
                View GitHub
                </a>
              </Button>
            </div>

            <SocialLinks />
          </div>
        </div>
      </Container>
    </section>
  );
}
