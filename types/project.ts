export type ProjectType = "Enterprise Product" | "Personal Project";

export type RepositoryAccess =
  | { status: "public"; url: string }
  | { status: "private" }
  | { status: "unavailable" };

export interface Project {
  title: string;
  subtitle: string;
  overview: string;
  modules?: string[];
  contributions: string[];
  impact: string[];
  technologies: string[];
  projectType: ProjectType;
  repository: RepositoryAccess;
}
