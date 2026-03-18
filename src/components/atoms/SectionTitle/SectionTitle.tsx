import "./SectionTitle.css";

interface SectionTitleProps {
  id?: string;
  title: string;
}

export function SectionTitle({ id, title }: SectionTitleProps) {
  return (
    <div className="section-label">
      <h2 className="section-label__title" id={id}>
        {title}
        <span className="section-label__dot">.</span>
      </h2>
      <div className="section-label__render">return()</div>
      <div className="section-label__line" />
    </div>
  );
}
