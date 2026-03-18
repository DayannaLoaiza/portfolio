import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle";
import { SocialIcon } from "@/components/atoms/SocialIcon/SocialIcon";
import { socialLinks } from "@/data/social";
import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <SectionTitle id="contact-title" title="Contacto" />
      <p className="contact-section__headline">
        Construyamos algo juntos.
      </p>
      <p className="contact-section__sub">
        Si quieres mejorar un proyecto, tienes una oportunidad de trabajo o simplemente quieres saludar, no dudes en contactarme.
      </p>
      <div>
        <a className="contact-section__email" href="mailto:lindadayannaloaiza@gmail.com">
          lindadayannaloaiza@gmail.com
        </a>
      </div>
      <div className="contact-section__social">
        {socialLinks.map((link) => (
          <SocialIcon key={link.name} type={link.icon} href={link.url} title={link.name} />
        ))}
        <SocialIcon
          type="cv"
          href="/files/linda-loaiza-cv.pdf"
          title="Descargar CV"
        />
      </div>
    </section>
  );
}
