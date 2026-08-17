import { projects } from "@/data/projects";
import { techNames } from "@/lib/tech-names";

const SITE_URL = "https://lindaloaiza.com";
const FULL_NAME = "Linda Dayanna Loaiza";

/** Las descripciones de proyecto llevan <strong> para el drawer. */
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FULL_NAME,
    // Declara la forma corta como variante para que ambas resuelvan a la misma
    // entidad, en vez de competir entre si.
    alternateName: "Linda Loaiza",
    // Como array los tres roles se resuelven por separado; en una sola cadena
    // con "&" quedaban como una frase suelta.
    jobTitle: ["Software Engineer", "Full Stack Developer", "Tech Lead"],
    description:
      "Software Engineer y Full Stack Developer. Construyo plataformas web para el sector construcción (BIM y Autodesk Platform Services), logística de última milla y banca.",
    url: SITE_URL,
    sameAs: [
      "https://github.com/DayannaLoaiza",
      "https://www.linkedin.com/in/lindadayannaloaiza/",
    ],
    // Conecta a la persona con la industria. `Organization` no tiene una
    // propiedad `industry` en schema.org, por eso el sector va en `description`.
    worksFor: {
      "@type": "Organization",
      name: "Amarilo S.A.S",
      description: "Constructora · sector construcción e infraestructura",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Azure",
      "DevOps",
      "BIM",
      "Autodesk Platform Services",
      "Forge Viewer",
      "AEC",
    ],
    email: "lindadayannaloaiza@gmail.com",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${FULL_NAME} — Portfolio`,
    url: SITE_URL,
    inLanguage: "es",
  };
}

/**
 * Se genera desde `src/data/projects.ts`: los proyectos ya viven ahi y no se
 * duplica contenido. Le dice a Google de que trata la pagina en vez de dejar
 * que lo deduzca del texto suelto.
 */
export function getProjectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Proyectos de ${FULL_NAME}`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: `${project.title} — ${project.subtitle}`,
        description: stripHtml(project.description),
        about: project.category,
        keywords: project.techKeys.map((k) => techNames[k] ?? k).join(", "),
        // `year` admite rangos ("2025 - 2026"), que no son fechas validas para
        // `dateCreated`; `temporalCoverage` si acepta texto.
        temporalCoverage: project.year,
        inLanguage: "es",
        creator: { "@type": "Person", name: FULL_NAME },
        sourceOrganization: { "@type": "Organization", name: project.company },
      },
    })),
  };
}
