import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Systems",
    color: "97,218,251",
    skills: [
      { name: "React.js", colorClass: "tag--react", x: 30, y: 10, iconColor: "97,218,251" },
      { name: "Next.js", colorClass: "tag--next", x: 70, y: 50, iconColor: "200,200,200" },
      { name: "TypeScript", colorClass: "tag--ts", x: 25, y: 90, iconColor: "49,120,198" },
      { name: "CSS3", colorClass: "tag--css", x: 68, y: 130, iconColor: "38,77,228" },
      { name: "Tailwind CSS", colorClass: "tag--tailwind", x: 30, y: 170, iconColor: "56,189,248" },
      { name: "Figma", colorClass: "tag--figma", x: 65, y: 210, iconColor: "162,89,255" },
    ],
  },
  {
    name: "Backend Logic",
    color: "51,153,51",
    skills: [
      { name: "Node.js", colorClass: "tag--node", x: 30, y: 10, iconColor: "51,153,51" },
      { name: "NestJS", colorClass: "tag--nest", x: 70, y: 50, iconColor: "224,35,78" },
      { name: "Express", colorClass: "tag--express", x: 25, y: 90, iconColor: "139,148,158" },
      { name: "PostgreSQL", colorClass: "tag--pg", x: 68, y: 130, iconColor: "51,103,145" },
      { name: "Supabase", colorClass: "tag--supabase", x: 30, y: 170, iconColor: "62,207,142" },
      { name: "REST APIs", colorClass: "tag--rest", x: 65, y: 210, iconColor: "123,97,255" },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "29,99,237",
    skills: [
      { name: "Docker", colorClass: "tag--docker", x: 35, y: 15, iconColor: "29,99,237" },
      { name: "Azure", colorClass: "tag--azure", x: 70, y: 60, iconColor: "0,120,212" },
      { name: "AWS EC2", colorClass: "tag--aws", x: 30, y: 115, iconColor: "255,153,0" },
      { name: "Git", colorClass: "tag--git", x: 65, y: 165, iconColor: "240,80,50" },
      { name: "CI/CD", colorClass: "tag--ci", x: 45, y: 215, iconColor: "0,120,212" },
    ],
  },
  {
    name: "Methods & Design",
    color: "162,89,255",
    skills: [
      { name: "Agile / Scrum", colorClass: "tag--agile", x: 50, y: 15, iconColor: "0,255,200" },
      { name: "SOLID", colorClass: "tag--solid", x: 25, y: 70, iconColor: "123,97,255" },
      { name: "SSO", colorClass: "tag--sso", x: 70, y: 120, iconColor: "255,153,0" },
      { name: "Atomic Design", colorClass: "tag--atomic", x: 35, y: 170, iconColor: "0,255,200" },
      { name: "Clean Code", colorClass: "tag--clean", x: 65, y: 215, iconColor: "200,200,200" },
    ],
  },
];

export const marqueeItems: string[] = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Azure",
  "AWS EC2",
  "Figma",
  "Git",
  "Supabase",
  "CSS3",
  "Tailwind CSS",
  "NestJS",
  "Express",
  "REST APIs",
  "CI/CD",
  "SSO",
];
