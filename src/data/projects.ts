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
    slug: "infraestructura-cloud",
    category: "Backend · Cloud",
    company: "Amarilo S.A.S",
    role: "Tech Lead",
    title: "Cloud & Auth",
    subtitle: "Amarilo · Azure",
    description:
      "Dos iniciativas clave para la infraestructura de Amarilo. Migré las bases de datos en producción de <strong>Supabase a Azure PostgreSQL sin downtime</strong>, preservando la integridad y continuidad del área BIM. En paralelo, unifiqué el acceso corporativo con un <strong>SSO basado en OAuth 2.0 y Azure AD</strong>, eliminando credenciales dispersas mediante middlewares y adaptadores de seguridad.",
    techKeys: ["nodejs", "typescript", "azure", "express", "postgresql", "nextjs", "supabase", "docker", "git"],
    links: [],
    year: "2025",
    status: { label: "In production", variant: "production" },
    private: true,
    metrics: [
      { value: "2+", label: "Apps unificadas", color: "#00FFC8" },
      { value: "SSO", label: "OAuth 2.0 + Azure AD", color: "#0078D4" },
      { value: "100%", label: "Integridad datos", color: "#A259FF" },
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
    slug: "Offset-co2",
    category: "Full Stack · API",
    company: "Carryt",
    role: "Full Stack Junior",
    title: "CO₂ Offset",
    subtitle: "Carryt · ClimateTrade",
    description:
      "Sistema de compensación de huella de carbono en alianza con <strong>ClimateTrade</strong>. Calculaba las emisiones por ruta de entrega según <strong>tipo y referencia de vehículo</strong> aplicando fórmulas de sostenibilidad, y automatizaba la compensación mediante siembra de árboles. Integré la API de ClimateTrade y desarrollé una <strong>interfaz para la conciliación de datos</strong>, eliminando procesos manuales.",
    techKeys: ["React.js", "express", "nodejs", "typescript", "postgresql", "aws", "git"],
    links: [],
    year: "2023",
    status: { label: "Completed", variant: "archived" },
    private: true,
    metrics: [
      { value: "CO₂", label: "Cálculo por ruta", color: "#00FFC8" },
      { value: "API", label: "ClimateTrade", color: "#FF9900" },
      { value: "~40%", label: "Tiempo ahorrado", color: "#A259FF" },
    ],
  },
  {
    slug: "normalizacion-direcciones",
    category: "Full Stack · IA",
    company: "Carryt",
    role: "Full Stack Junior",
    title: "Geo Normalizer",
    subtitle: "Carryt · Cartografía",
    description:
      "Sistema de <strong>normalización y geocodificación de direcciones</strong> para el equipo de Cartografía y Logística. Integraba IA para corregir y estandarizar direcciones según patrones cartográficos, generando coordenadas de alta precisión (lat/lng) con validación de ciudad. Los datos normalizados se persistían como <strong>caché inteligente</strong> para acelerar consultas futuras, y las ubicaciones se renderizaban en mapa para la visualización de rutas de entrega.",
    techKeys: ["React.js", "nodejs", "express", "postgresql", "CSS3", "git"],
    links: [],
    year: "2023",
    status: { label: "Completed", variant: "archived" },
    private: true,
    metrics: [
      { value: "GPS", label: "Lat/Lng precisas", color: "#A259FF" },
      { value: "Mapas", label: "Visualización rutas", color: "#FF9900" },
      { value: "IA", label: "Normalización", color: "#0078D4" },
    ],
  },
];
