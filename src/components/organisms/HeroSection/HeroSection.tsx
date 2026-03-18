import { Button } from "@/components/atoms/Button/Button";
import { PhotoHex } from "@/components/molecules/PhotoHex/PhotoHex";
import { TerminalBlock } from "@/components/molecules/TerminalBlock/TerminalBlock";
import { Header } from "@/components/organisms/Header/Header";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="hero-section__glow" />
      <Header />

      <div className="hero-section__grid">
        <PhotoHex />

        <div className="hero-section__text">
          <div className="hero-section__badge">
            <span className="hero-section__badge-dot" />
            Ready to Build
          </div>

          <div className="hero-section__name-block">
            <h1 className="hero-section__name">
              Linda Dayanna
              <br />
              <span className="hero-section__name-accent">Loaiza.</span>
            </h1>
            <p className="hero-section__role">Full Stack Developer</p>
          </div>

          <div className="hero-section__tagline">
            <span className="hero-section__tagline-top">
              Construyo productos digitales de nueva generaci&oacute;n
            </span>
            <span className="hero-section__tagline-bottom">
              donde el <span className="hero-section__tagline-highlight">c&oacute;digo elegante</span>, el <span className="hero-section__tagline-highlight">dise&ntilde;o inteligente</span> y la <span className="hero-section__tagline-highlight">automatizaci&oacute;n</span> convergen.
            </span>
          </div>

          <TerminalBlock />

          <div className="hero-section__cta">
            <Button href="#projects">Ver proyectos ↓</Button>
            <Button variant="ghost" href="/files/linda-loaiza-cv.pdf" download>
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
