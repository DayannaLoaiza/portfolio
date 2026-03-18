export interface ExperienceBadge {
  label: string;
  variant: "lead" | "fullstack" | "analyst" | "frontend";
}

export interface Experience {
  role: string;
  company: string;
  sector: string;
  period: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  badges: ExperienceBadge[];
}
