import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    role: "Especialista Desarrollador",
    company: "Amarilo S.A.S",
    sector: "Construcción e Infraestructura",
    period: "Feb 2024 — Present",
    startDate: "2024-02",
    current: true,
    badges: [
      { label: "Tech Lead", variant: "lead" },
      { label: "Full Stack", variant: "fullstack" },
    ],
  },
  {
    role: "Desarrolladora Full Stack Junior",
    company: "Carryt",
    sector: "Logística de Última Milla",
    period: "Feb 2023 — Feb 2024",
    startDate: "2023-02",
    endDate: "2024-02",
    badges: [{ label: "Full Stack", variant: "fullstack" }],
  },
  {
    role: "Analista",
    company: "Banco Cooperativo Coopcentral",
    sector: "Sector Financiero",
    period: "Nov 2019 — Feb 2023",
    startDate: "2019-11",
    endDate: "2023-02",
    badges: [{ label: "Analyst", variant: "analyst" }],
  },
  {
    role: "Analista de Sistemas",
    company: "Siscomputo",
    sector: "Tecnologías de la Información",
    period: "Mar 2019 — Sep 2019",
    startDate: "2019-03",
    endDate: "2019-09",
    badges: [{ label: "Frontend", variant: "frontend" }],
  },
];
