"use client";

import { useInView } from "@/hooks/useInView";
import { ReactNode } from "react";

interface ConstellationStripProps {
  children: ReactNode;
}

export function ConstellationStrip({ children }: ConstellationStripProps) {
  const { ref, isInView } = useInView({ triggerOnce: false, threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`constellation-strip${isInView ? "" : " is-paused"}`}
    >
      {children}
    </div>
  );
}
