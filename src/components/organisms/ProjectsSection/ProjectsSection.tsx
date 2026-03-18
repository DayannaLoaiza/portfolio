"use client";

import { useState, useCallback } from "react";
import { SectionTitle } from "@/components/atoms/SectionTitle/SectionTitle";
import { ProjectRow } from "@/components/molecules/ProjectRow/ProjectRow";
import { ProjectDrawer } from "@/components/molecules/ProjectDrawer/ProjectDrawer";
import { projects } from "@/data/projects";
import "./ProjectsSection.css";

export function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isOpen = activeIdx >= 0;

  const toggle = useCallback((i: number) => {
    if (activeIdx === i) {
      setDrawerVisible(false);
      setTimeout(() => setActiveIdx(-1), 300);
      return;
    }
    setDrawerVisible(false);
    setActiveIdx(i);
    setTimeout(() => setDrawerVisible(true), 180);
  }, [activeIdx]);

  const close = useCallback(() => {
    setDrawerVisible(false);
    setTimeout(() => setActiveIdx(-1), 300);
  }, []);

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <SectionTitle id="projects-title" title="Proyectos" />

      <div className={`projects-section__body ${isOpen ? "projects-section__body--open" : ""}`}>
        <div className={`projects-section__list ${isOpen ? "projects-section__list--open" : ""}`}>
          {projects.map((p, i) => (
            <ProjectRow
              key={p.slug}
              index={i}
              title={p.title}
              techKeys={p.techKeys}
              year={p.year}
              isActive={activeIdx === i}
              isOpen={isOpen}
              onClick={() => toggle(i)}
            />
          ))}
        </div>

        <div className={`projects-section__drawer ${isOpen ? "projects-section__drawer--open" : ""}`}>
          {activeIdx >= 0 && (
            <ProjectDrawer
              project={projects[activeIdx]}
              visible={drawerVisible}
              onClose={close}
            />
          )}
        </div>
      </div>
    </section>
  );
}
