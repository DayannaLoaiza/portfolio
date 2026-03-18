import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle";
import { LogoChip } from "@/components/molecules/LogoChip/LogoChip";
import { TechMarquee } from "@/components/molecules/TechMarquee/TechMarquee";
import { skillCategories } from "@/data/skills";
import { getTechIcon } from "@/lib/tech-icons";
import "./SkillsSection.css";

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <SectionTitle id="skills-title" title="Skills" />

      <div className="constellation-strip">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="constellation-zone"
            style={{ "--zc": category.color } as React.CSSProperties}
          >
            <div className="constellation-zone__glow" />

            {category.skills.map((skill, i) => {
              const icon = getTechIcon(skill.name);
              if (!icon) return null;
              return (
                <LogoChip
                  key={skill.name}
                  name={skill.name}
                  icon={icon}
                  x={skill.x}
                  y={skill.y}
                  index={i}
                  zoneColor={category.color}
                  iconColor={skill.iconColor}
                />
              );
            })}

            <div className="constellation-zone__label">
              <div className="constellation-zone__divider" />
              <span className="constellation-zone__cat">{category.name}</span>
              <span className="constellation-zone__count">
                {category.skills.length} technologies
              </span>
            </div>
          </div>
        ))}
      </div>

      <TechMarquee />
    </section>
  );
}
