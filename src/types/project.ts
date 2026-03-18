export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "demo" | "figma" | "case-study";
}

export interface ProjectMetric {
  value: string;
  label: string;
  color: string;
}

export interface ProjectStatus {
  label: string;
  variant: "production" | "archived" | "open-source";
}

export interface Project {
  slug: string;
  category: string;
  company: string;
  role: string;
  title: string;
  subtitle: string;
  description: string;
  techKeys: string[];
  links: ProjectLink[];
  year: string;
  status: ProjectStatus;
  metrics: ProjectMetric[];
  private?: boolean;
}
