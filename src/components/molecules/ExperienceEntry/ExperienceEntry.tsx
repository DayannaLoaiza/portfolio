"use client";

import { Experience } from "@/types/experience";
import { Badge } from "@/components/atoms/Badge/Badge";
import { useInView } from "@/hooks/useInView";
import "./ExperienceEntry.css";

interface ExperienceEntryProps {
  experience: Experience;
  delay?: number;
}

export function ExperienceEntry({ experience, delay = 0 }: ExperienceEntryProps) {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`experience-entry${experience.current ? " experience-entry--current" : ""}${isInView ? " experience-entry--visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="experience-entry__top">
        <span className="experience-entry__company">
          {experience.company} · {experience.sector}
        </span>
        <time className="experience-entry__period" dateTime={experience.startDate}>
          {experience.period}
        </time>
      </div>
      <h3 className="experience-entry__role">{experience.role}</h3>
      <div className="experience-entry__badges">
        {experience.badges.map((badge) => (
          <Badge key={badge.label} variant="experience" experienceVariant={badge.variant}>
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
