import { Container } from "@/components/common/Container";
import { ExperienceCard } from "@/components/common/ExperienceCard";
import { experiences } from "@/constants/experiences";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="space-y-12">
          <header className="max-w-2xl space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Building scalable products,
              leading frontend modernization,
              and delivering measurable impact.
            </h2>
          </header>

          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <ExperienceCard
                key={`${experience.company}-${experience.duration}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
