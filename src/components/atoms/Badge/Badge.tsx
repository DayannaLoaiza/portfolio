import "./Badge.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "available" | "status" | "experience";
  experienceVariant?: "lead" | "fullstack" | "analyst" | "frontend";
}

export function Badge({
  children,
  variant = "available",
  experienceVariant,
}: BadgeProps) {
  const className = [
    "badge",
    `badge--${variant}`,
    experienceVariant ? `badge--${experienceVariant}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={className}>{children}</span>;
}
