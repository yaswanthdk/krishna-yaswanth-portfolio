import { Container } from "@/components/common/Container";
import { StatCard } from "@/components/common/StatCard";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "50+", label: "REST APIs Integrated" },
  { value: "100%", label: "Frontend Ownership" },
  { value: "5 min → 45 sec", label: "Build Time" },
  {
    value: "React Konva",
    label: "Custom Whiteboard",
  },
  { value: "Based in Bengaluru", label: "Location" },
] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground">About Me</p>

            <h2
              id="about-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Building scalable frontend experiences that users enjoy and teams can maintain.
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m a Frontend Engineer with 3+ years of experience building scalable React applications for education technology platforms. I enjoy solving complex UI problems, designing reusable architectures, and creating fast, intuitive user experiences.
              </p>
              <p>
              My recent work focused on modernizing a production LMS by migrating from CRA to Vite, SCSS to Tailwind CSS, and Redux to Zustand, significantly improving developer experience and application performance. I also built a custom whiteboard with React Konva and integrated SCORM learning packages with analytics tracking.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, ...rest }) => (
              <li key={label}>
                <StatCard value={value} label={label} {...rest} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
