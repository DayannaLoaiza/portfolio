import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle";
import { FeaturedCertCard } from "@/components/molecules/FeaturedCertCard/FeaturedCertCard";
import { CertCard } from "@/components/molecules/CertCard/CertCard";
import { featuredCert, listCerts } from "@/data/certifications";
import "./CertsSection.css";

export function CertsSection() {
  return (
    <section id="certs" className="certs-section" aria-labelledby="certs-title">
      <SectionTitle id="certs-title" title="Certificaciones" />

      <div className="certs-section__layout">
        <div className="certs-section__featured">
          <FeaturedCertCard cert={featuredCert} />
        </div>

        <div className="certs-section__list">
          {listCerts.map((cert) => (
            <CertCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>

      <div className="certs-section__hint">
        <div className="certs-section__hint-line" />
        <span className="certs-section__hint-text">
          {"// todas las certificaciones disponibles a solicitud"}
        </span>
        <div className="certs-section__hint-line" />
      </div>
    </section>
  );
}
