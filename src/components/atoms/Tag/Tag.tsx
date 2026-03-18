import { getTechIcon } from "@/lib/tech-icons";
import "./Tag.css";

interface TagProps {
  label: string;
  colorClass?: string;
  size?: "sm" | "md";
}

export function Tag({ label, colorClass, size = "sm" }: TagProps) {
  const icon = size === "md" ? getTechIcon(label) : null;

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
