import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { educationEntries } from "@/constants/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="space-y-12">
          <header className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Education
            </p>
            <h2
              id="education-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Academic foundation in engineering with a focus on computer
              science.
            </h2>
          </header>

          <ul className="flex flex-col gap-4">
            {educationEntries.map((entry) => (
              <li key={entry.institution}>
                <Card>
                  <CardHeader className="border-b border-border/50">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {entry.institution}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {entry.degree}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {entry.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="w-fit shrink-0">
                        {entry.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
