import { Container } from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/constants/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="space-y-12">
          <header className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-muted-foreground">Skills</p>
            <h2
              id="skills-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Frontend engineering stack for building scalable product
              experiences.
            </h2>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
