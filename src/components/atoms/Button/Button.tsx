import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  download?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  download,
  onClick,
}: ButtonProps) {
  const className = `button button--${variant}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const isAnchor = href.startsWith("#");

    return (
      <a
        className={className}
        href={href}
        download={download || undefined}
        target={isExternal && !download ? "_blank" : undefined}
        rel={isExternal && !download ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  );
}
