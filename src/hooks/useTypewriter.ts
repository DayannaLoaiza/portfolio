"use client";

import { useState, useEffect, useCallback } from "react";
import { TerminalLine } from "@/types/common";

interface UseTypewriterOptions {
  lines: TerminalLine[];
  typingSpeed?: number;
  lineDelay?: number;
  startDelay?: number;
}

interface TypewriterState {
  visibleLines: { text: string; type: "cmd" | "out"; complete: boolean }[];
  isComplete: boolean;
}

export function useTypewriter({
  lines,
  typingSpeed = 130,
  lineDelay = 550,
  startDelay = 900,
}: UseTypewriterOptions): TypewriterState {
  const [visibleLines, setVisibleLines] = useState<
    TypewriterState["visibleLines"]
  >([]);
  const [isComplete, setIsComplete] = useState(false);

  const animate = useCallback(async () => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    await sleep(startDelay);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.type === "cmd") {
        setVisibleLines((prev) => [
          ...prev,
          { text: "", type: "cmd", complete: false },
        ]);

        for (let c = 0; c < line.text.length; c++) {
          const charIndex = c;
          setVisibleLines((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              text: line.text.slice(0, charIndex + 1),
            };
            return updated;
          });
          await sleep(typingSpeed + Math.random() * 30);
        }

        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            complete: true,
          };
          return updated;
        });

        await sleep(lineDelay);
      } else {
        setVisibleLines((prev) => [
          ...prev,
          { text: line.text, type: "out", complete: true },
        ]);
        await sleep(120);
      }

      await sleep(i % 2 === 0 ? 100 : 60);
    }

    setIsComplete(true);
  }, [lines, typingSpeed, lineDelay, startDelay]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleLines(
        lines.map((line) => ({
          text: line.text,
          type: line.type,
          complete: true,
        }))
      );
      setIsComplete(true);
      return;
    }

    animate();
  }, [animate, lines]);

  return { visibleLines, isComplete };
}
