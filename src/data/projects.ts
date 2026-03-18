import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "plataforma-bim",
    category: "Full Stack · BIM",
    company: "Amarilo S.A.S",
    role: "Tech Lead",
    title: "Plataforma Presupuestos Construccion",
    subtitle: "BIM",
    description:
      "Sistema web para el área de <strong>Presupuestos de Construcción</strong> de Amarilo. Integra servicios de <strong>Autodesk Platform Services (APS)</strong>, Oracle y Azure, con SSO corporativo, arquitectura de componentes bajo Atomic Design y despliegue containerizado con Docker.",
    techKeys: ["nextjs", "typescript", "nodejs", "azure", "postgresql", "tailwind", "Drizzle"],
    links: [],
    year: "2024 - 2025",
    status: { label: "In production", variant: "production" },
    private: true,
    metrics: [
      { value: "12+", label: "Módulos", color: "#00FFC8" },
      { value: "+80%", label: "Adopción usuarios", color: "#00FFC8" },
      { value: "2x", label: "Velocidad entrega", color: "#7B61FF" },
    ],
  },
  {
    slug: "sso-corporativo",
    category: "Backend · Security",
    company: "Amarilo S.A.S",
    role: "Tech Lead",
    title: "SSO Corporativo",
    subtitle: "Amarilo",
    description:
      "Implementación de <strong>Single Sign-On</strong> con OAuth 2.0 y Azure AD en aplicaciones web corporativas. Unificó el acceso mediante <strong>middlewares de autenticación</strong> y adaptadores de seguridad, eliminando credenciales dispersas.",
    techKeys: ["nodejs", "typescript", "azure", "express", "git"],
    links: [],
    year: "2025",
    status: { label: "In production", variant: "production" },
    private: true,
    metrics: [
      { value: "2+", label: "Apps unificadas", color: "#00FFC8" },
      { value: "OAuth", label: "Protocolo", color: "#8B949E" },
      { value: "Azure AD", label: "Identity", color: "#0078D4" },
    ],
  },
  {
    slug: "migracion-db",
    category: "DevOps · Cloud",
    company: "Amarilo S.A.S",
    role: "Tech Lead",
    title: "DB Migration",
    subtitle: "Supabase → Azure",
    description:
      "Lideré la migración completa de bases de datos en producción desde <strong>Supabase hacia Azure PostgreSQL sin downtime</strong>. Se garantizó la integridad de datos y la continuidad operacional del área BIM durante toda la transición.",
    techKeys: ["postgresql", "azure", "supabase", "docker"],
    links: [{ label: "Caso estudio ↗", url: "#", type: "case-study" }],
    year: "2025",
    status: { label: "Completed", variant: "archived" },
    private: true,
    metrics: [
      { value: "0s", label: "Downtime total", color: "#00FFC8" },
      { value: "100%", label: "Integridad datos", color: "#00FFC8" },
      { value: "Azure", label: "Destino cloud", color: "#0078D4" },
    ],
  },
  {
    slug: "design-system-bim",
    category: "Frontend · UX/UI",
    company: "Amarilo S.A.S",
    role: "Frontend Developer",
    title: "Design System",
    subtitle: "Atomic BIM",
    description:
      "Diseñé e implementé un sistema de componentes desde la creación de <strong>prototipos en Figma</strong> hasta la estandarización bajo principios de <strong>Atomic Design</strong> en React + Tailwind, reduciendo la duplicación de UI y acelerando la entrega visual del equipo.",
    techKeys: ["React.js", "typescript", "figma", "nextjs", "tailwind", "CSS3"],
    links: [
      /* { label: "Figma ↗", url: "#", type: "figma" },
      { label: "GitHub ↗", url: "#", type: "github" }, */
    ],
    year: "2024",
    status: { label: "Open source", variant: "open-source" },
    private: true,
    metrics: [
      { value: "+80%", label: "Adopción usuarios", color: "#00FFC8" },
      { value: "20+", label: "Componentes", color: "#A259FF" },
      { value: "Atomic", label: "Metodología", color: "#8B949E" },
    ],
  },
  {
    slug: "compensacion-co2",
    category: "Backend · API",
    company: "Carryt",
    role: "Full Stack Junior",
    title: "CO₂ Offset",
    subtitle: "Carryt · Climate",
    description:
      "Automaticé el proceso de compensación de CO₂ del servicio <strong>Climate</strong> integrando APIs externas de carbon offset y desarrollando scripts en Node.js/TypeScript junto con una <strong>interfaz amigable</strong>, eliminando pasos manuales en el flujo de conciliación de datos.",
    techKeys: ["React.js", "express", "nodejs", "typescript", "postgresql", "aws", "git"],
    links: [],
    year: "2023",
    status: { label: "Completed", variant: "archived" },
    private: true,
    metrics: [
      { value: "~40%", label: "Tiempo ahorrado", color: "#FF9900" },
      { value: "0", label: "Errores manuales", color: "#00FFC8" },
      { value: "API", label: "Integración CO₂", color: "#8B949E" },
    ],
  },
];
