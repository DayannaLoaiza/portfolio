export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Linda Loaiza",
    jobTitle: "Full Stack Developer & Tech Lead",
    url: "https://lindaloaiza.com",
    sameAs: [
      "https://github.com/DayannaLoaiza",
      "https://www.linkedin.com/in/lindadayannaloaiza/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Azure",
      "DevOps",
    ],
    email: "lindadayannaloaiza@gmail.com",
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Linda Loaiza — Portfolio",
    url: "https://lindaloaiza.com",
  };
}
