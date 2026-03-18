export interface Skill {
  name: string;
  colorClass: string;
  x: number;
  y: number;
  iconColor: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: Skill[];
}
