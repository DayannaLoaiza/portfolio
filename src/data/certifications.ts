import { Certification, FeaturedCertification } from "@/types/common";

export const featuredCert: FeaturedCertification = {
  tag: "Diplomados · MinTic",
  name: "Desarrollo Web & Aplicaciones",
  issuer: "MinTic · Universidad de Antioquia · 2022",
  year: "2022",
  pills: ["Python", "Java", "Web Dev", "Apps"],
  diplomas: [
    { name: "Fundamentos de Programación en Python" },
    { name: "Programación en Lenguaje Java" },
    { name: "Desarrollo de Software" },
    { name: "Desarrollo de Aplicaciones Web" },
  ],
};

export const listCerts: Certification[] = [
  {
    name: "Scrum Foundation Professional",
    issuer: "CertiProf",
    year: "2020",
    badge: "Certified",
    color: "0,255,200",
    iconKey: "scrum",
  },
  {
    name: "Gerencia de Proyectos PMI",
    issuer: "Los Libertadores",
    year: "2021",
    badge: "Certified",
    color: "0,120,212",
    iconKey: "pmi",
  },
  {
    name: "Programador Junior",
    issuer: "Empodera Tech · Platzi",
    year: "2019",
    badge: "Completed",
    color: "98,203,49",
    iconKey: "platzi",
  },
];
