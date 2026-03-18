import { Project } from "@/types/project";
import { techNames } from "@/lib/tech-names";
import { getTechIcon } from "@/lib/tech-icons";
import "./ProjectDrawer.css";

interface ProjectDrawerProps {
  project: Project;
  visible: boolean;
  onClose: () => void;
}

const statusClass: Record<string, string> = {
  production: "project-drawer__status--production",
  archived: "project-drawer__status--archived",
  "open-source": "project-drawer__status--open-source",
};

export function ProjectDrawer({ project, visible, onClose }: ProjectDrawerProps) {
  return (
    <div className={`project-drawer__inner ${visible ? "project-drawer__inner--visible" : ""}`}>
      <div className="project-drawer__close-row">
        <button
          className="project-drawer__close"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Cerrar detalle"
        >
          ✕
        </button>
      </div>

      <div className="project-drawer__eye">
        {project.category} · {project.year}
      </div>

      <h3 className="project-drawer__title">
        {project.title} — {project.subtitle}
      </h3>

      <div className="project-drawer__company">
        <strong>{project.company}</strong>
        <span className="project-drawer__role-pill">{project.role}</span>
      </div>

      <div className={`project-drawer__status ${statusClass[project.status.variant] ?? ""}`}>
        <span className="project-drawer__status-dot" />
        {project.status.label}
      </div>

      <div className="project-drawer__metrics">
        {project.metrics.map((m) => (
          <div key={m.label} className="project-drawer__metric">
            <span className="project-drawer__metric-value" style={{ color: m.color }}>
              {m.value}
            </span>
            <span className="project-drawer__metric-label">{m.label}</span>
          </div>
        ))}
      </div>

      <p
        className="project-drawer__desc"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      <div className="project-drawer__divider" />

      <span className="project-drawer__tech-label">Stack</span>
      <div className="project-drawer__techs">
        {project.techKeys.map((k) => (
          <span key={k} className="project-drawer__tech">
            {getTechIcon(techNames[k] ?? k)}
            <span>{techNames[k] ?? k}</span>
          </span>
        ))}
      </div>

      <div className="project-drawer__links">
        {project.private && (
          <span className="project-drawer__private">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" fill="currentColor"/>
            </svg>
            Código privado
          </span>
        )}
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className={`project-drawer__link ${link.type === "demo" || link.type === "case-study" ? "project-drawer__link--primary" : "project-drawer__link--secondary"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.type === "github" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" fill="currentColor"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"/>
              </svg>
            )}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
