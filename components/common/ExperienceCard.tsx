import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import type { Experience } from "@/types/experience";
import { CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    role,
    company,
    duration,
    location,
    description,
    contributions,
    impact,
    technologies,
  } = experience;

  return (
    <article>
      <Card className="transition-colors hover:bg-primary/10 hover:text-primary-foreground">
        <CardHeader className="border-b border-border/50 ">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {role}
              </h3>
              <p className="text-sm font-medium text-foreground">{company}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
            <p className="shrink-0 text-sm text-muted-foreground">
            <Badge variant="outline">
                {duration}
            </Badge>
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
        {experience.product && (
          <div className="rounded-md border border-border/50 bg-muted/30 px-4 py-3">
            <p className="text-sm font-medium text-foreground">
              Product
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {experience.product}
            </p>
          </div>
        )}
          <p className="leading-relaxed text-muted-foreground">{description}</p>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">
              Major Contributions
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {contributions.map((contribution) => (
                <li key={contribution} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Impact</h4>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {impact.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li key={technology}>
                <Badge variant="secondary">{technology}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </article>
  );
}
