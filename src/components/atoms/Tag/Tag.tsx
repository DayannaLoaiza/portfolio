import { getTechIcon } from "@/lib/tech-icons";
import "./Tag.css";

interface TagProps {
  label: string;
  colorClass?: string;
  size?: "sm" | "md";
  /** Debe ser unico por cada sitio donde se pinta el mismo icono (ver getTechIcon). */
  iconScope?: string;
}

export function Tag({ label, colorClass, size = "sm", iconScope = "tag" }: TagProps) {
  const icon = size === "md" ? getTechIcon(label, `${iconScope}-${label}`) : null;

  const className = ["tag", `tag--${size}`, colorClass || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={className}>
      {icon && <span className="tag__icon">{icon}</span>}
      {label}
    </span>
  );
}
