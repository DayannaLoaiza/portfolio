export interface Diploma {
  name: string;
}

export interface FeaturedCertification {
  tag: string;
  name: string;
  issuer: string;
  year: string;
  pills: string[];
  diplomas: Diploma[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge: string;
  color: string;
  iconKey: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "cv";
}

export interface TerminalLine {
  type: "cmd" | "out";
  prompt?: string;
  text: string;
}
