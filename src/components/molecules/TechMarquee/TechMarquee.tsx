import { marqueeItems } from "@/data/skills";
import "./TechMarquee.css";

export function TechMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee__track">
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="tech-marquee__item">
            <span className="tech-marquee__dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
