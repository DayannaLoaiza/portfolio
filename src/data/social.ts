import { SocialLink, TerminalLine } from "@/types/common";

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/DayannaLoaiza", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lindadayannaloaiza/",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:lindadayannaloaiza@gmail.com", icon: "email" },
];

export const terminalLines: TerminalLine[] = [
  { type: "cmd", prompt: "▸", text: "experience" },
  {
    type: "out",
    text: '<span style="color:#00FFC8;font-weight:600">3+</span> Years of Experience',
  },
  { type: "cmd", prompt: "▸", text: "projects" },
  {
    type: "out",
    text: '<span style="color:#00FFC8;font-weight:600">6+</span> Projects delivered & contributed',
  },
];

export const navLinks = [
  { label: "// home", href: "#home" },
  { label: "about", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
