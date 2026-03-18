"use client";

import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/atoms/SocialIcon/SocialIcon";
import { socialLinks } from "@/data/social";
import "./Sidebar.css";

const SECTIONS = ["home", "projects", "skills", "experience", "contact"];

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionElements = SECTIONS.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = SECTIONS.indexOf(entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar" aria-label="Section navigation and social links">
      <div className="sidebar__dot" />
      <nav className="sidebar__dots" aria-label="Section indicators">
        {SECTIONS.map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className={`sidebar__sdot${i === activeIndex ? " sidebar__sdot--active" : ""}`}
            aria-label={id}
            aria-current={i === activeIndex ? "true" : undefined}
          />
        ))}
      </nav>
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.name}
          type={link.icon}
          href={link.url}
          title={link.name}
          size="sm"
        />
      ))}
      <span className="sidebar__label">Linda Dayanna Loaiza</span>
    </aside>
  );
}
