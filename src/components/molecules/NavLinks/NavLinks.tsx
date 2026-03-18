"use client";

import { useState } from "react";
import { navLinks } from "@/data/social";
import "./NavLinks.css";

export function NavLinks() {
  const [activeHash, setActiveHash] = useState("#home");

  const handleClick = (href: string) => {
    setActiveHash(href);
  };

  return (
    <nav className="nav-links" aria-label="Main navigation">
      {navLinks.map((link) => (
        <a
          key={link.href}
          className={`nav-links__item${activeHash === link.href ? " nav-links__item--active" : ""}`}
          href={link.href}
          onClick={() => handleClick(link.href)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
