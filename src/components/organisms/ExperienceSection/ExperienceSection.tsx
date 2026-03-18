import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle";
import { ExperienceEntry } from "@/components/molecules/ExperienceEntry/ExperienceEntry";
import { experiences } from "@/data/experience";
import "./ExperienceSection.css";

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <SectionTitle id="experience-title" title="Experiencia" />

      <div className="experience-section__list">
        {experiences.map((exp, i) => (
          <ExperienceEntry key={exp.company} experience={exp} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}
