import { ReactNode } from "react";
import { Certification } from "@/types/common";
import "./CertCard.css";

const certIcons: Record<string, ReactNode> = {
  scrum: (
    <svg viewBox="0 0 24 24" fill="#00FFC8" aria-hidden="true">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    </svg>
  ),
  pmi: (
    <svg viewBox="0 0 24 24" fill="#0078D4" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  platzi: (
    <svg viewBox="0 0 24 24" fill="#62CB31" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 14.5v-9l7 4.5-7 4.5z"/>
    </svg>
  ),
};

interface CertCardProps {
  cert: Certification;
}

export function CertCard({ cert }: CertCardProps) {
  return (
    <div
      className="cert-card"
      style={{ "--lc": cert.color } as React.CSSProperties}
    >
      <div className="cert-card__strip" />
      <div className="cert-card__inner">
        <div className="cert-card__logo">
          {certIcons[cert.iconKey]}
        </div>
        <div className="cert-card__info">
          <span className="cert-card__name">{cert.name}</span>
          <div className="cert-card__meta">
            <span>{cert.issuer}</span>
            <span className="cert-card__sep">&middot;</span>
            <span className="cert-card__year">{cert.year}</span>
          </div>
        </div>
        <span className="cert-card__badge">{cert.badge}</span>
      </div>
    </div>
  );
}
