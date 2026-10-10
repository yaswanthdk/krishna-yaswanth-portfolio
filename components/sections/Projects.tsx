import { Container } from "@/components/common/Container";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects } from "@/constants/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="space-y-12">
          <header className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Projects
            </p>
            <h2
              id="projects-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Engineering case studies across enterprise products and production
              frontend systems.
            </h2>
          </header>

          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
