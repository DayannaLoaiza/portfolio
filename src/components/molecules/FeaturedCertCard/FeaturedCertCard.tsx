import { FeaturedCertification } from "@/types/common";
import "./FeaturedCertCard.css";

interface FeaturedCertCardProps {
  cert: FeaturedCertification;
}

export function FeaturedCertCard({ cert }: FeaturedCertCardProps) {
  return (
    <div className="featured-cert">
      <div className="featured-cert__bg">
        {cert.pills.map((pill, i) => (
          <span
            key={pill}
            className="featured-cert__pill"
            data-position={i}
          >
            {pill}
          </span>
        ))}

        <div className="featured-cert__icon">
          <svg viewBox="0 0 24 24" fill="#7B61FF" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>

        <span className="featured-cert__year">{cert.year}</span>
      </div>

      <div className="featured-cert__body">
        <div className="featured-cert__tag">
          <span className="featured-cert__dot" />
          {cert.tag}
        </div>
        <h3 className="featured-cert__name">{cert.name}</h3>
        <p className="featured-cert__issuer">{cert.issuer}</p>

        <div className="featured-cert__diplomas">
          {cert.diplomas.map((diploma) => (
            <div key={diploma.name} className="featured-cert__diploma">
              <span className="featured-cert__diploma-bullet" />
              <span className="featured-cert__diploma-name">{diploma.name}</span>
              <span className="featured-cert__diploma-tag">Diplomado</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
