import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectRepositoryAction({
  repository,
}: Pick<Project, "repository">) {
  if (repository.status === "public") {
    return (
      <Button asChild variant="outline">
        <a
          href={repository.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <ArrowRight />
        </a>
      </Button>
    );
  }

  if (repository.status === "private") {
    return (
      <Button variant="outline" disabled>
        Private Repository
      </Button>
    );
  }

  return (
    <Button variant="outline" disabled>
      Repository Unavailable
    </Button>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    subtitle,
    overview,
    modules,
    contributions,
    impact,
    technologies,
    projectType,
    repository,
  } = project;

  return (
    <article>
      <Card
        className={cn(
          "transition-shadow hover:shadow-sm",
          "ring-foreground/10 hover:ring-foreground/15",
        )}
      >
        <CardHeader className="space-y-3 border-b border-border/50">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8 pt-6">
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            {overview}
          </p>

          {modules && modules.length > 0 ? (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">
                Product Modules
              </h4>
              <ul className="flex flex-wrap gap-2">
                {modules.map((module) => (
                  <li key={module}>
                    <Badge variant="outline">{module}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Engineering Contributions
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/60"
                  />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {impact.length > 0 ? (
            <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-5">
              <h4 className="text-sm font-medium text-foreground">
                Business Impact
              </h4>
              <ul className="space-y-2">
                {impact.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Technologies
            </h4>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <li key={technology}>
                  <Badge
                    variant="secondary"
                    className="transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {technology}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 border-t border-border/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            {projectType}
          </p>
          <ProjectRepositoryAction repository={repository} />
        </CardFooter>
      </Card>
    </article>
  );
}
