import { techNames } from "@/lib/tech-names";
import "./ProjectRow.css";

interface ProjectRowProps {
  index: number;
  title: string;
  techKeys: string[];
  year: string;
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void;
}

export function ProjectRow({
  index,
  title,
  techKeys,
  year,
  isActive,
  isOpen,
  onClick,
}: ProjectRowProps) {
  const cls = [
    "project-row",
    isActive ? "project-row--active" : "",
  ].filter(Boolean).join(" ");

  const techText = techKeys.map((k) => techNames[k] ?? k).join(" · ");
  const idx = `_0${index + 1}.`;

  return (
    <div className={cls} onClick={onClick}>
      <div className={`project-row__inner ${isOpen ? "project-row__inner--compact" : ""}`}>
        <span className={`project-row__idx ${isOpen ? "project-row__idx--compact" : ""}`}>
          {idx}
        </span>
        <div>
          <div className="project-row__title-wrap">
            <span className={`project-row__title ${isOpen ? "project-row__title--compact" : ""}`}>
              {title}
            </span>
          </div>
          <div className={`project-row__sub ${isOpen ? "project-row__sub--compact" : ""}`}>
            <span className="project-row__tech-text">{techText}</span>
            <span className="project-row__year">{year}</span>
            {!isOpen && <span className="project-row__hint">expand ↗</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
