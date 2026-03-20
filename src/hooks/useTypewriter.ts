"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
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

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function useTypewriter({
  lines,
  typingSpeed = 130,
  lineDelay = 550,
  startDelay = 900,
}: UseTypewriterOptions): TypewriterState {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const [visibleLines, setVisibleLines] = useState<
    TypewriterState["visibleLines"]
  >(() =>
    prefersReducedMotion
      ? lines.map((line) => ({
          text: line.text,
          type: line.type,
          complete: true,
        }))
      : []
  );
  const [isComplete, setIsComplete] = useState(prefersReducedMotion);
  const abortRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    abortRef.current = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        if (abortRef.current) clearTimeout(id);
      });

    const linesBuffer: TypewriterState["visibleLines"] = [];
    let rafId = 0;

    const flushToState = () => {
      rafId = requestAnimationFrame(() => {
        setVisibleLines([...linesBuffer]);
      });
    };

    (async () => {
      await sleep(startDelay);
      if (abortRef.current) return;

      for (let i = 0; i < lines.length; i++) {
        if (abortRef.current) return;
        const line = lines[i];

        if (line.type === "cmd") {
          linesBuffer.push({ text: "", type: "cmd", complete: false });
          flushToState();

          for (let c = 0; c < line.text.length; c++) {
            if (abortRef.current) return;
            linesBuffer[linesBuffer.length - 1] = {
              ...linesBuffer[linesBuffer.length - 1],
              text: line.text.slice(0, c + 1),
            };
            flushToState();
            await sleep(typingSpeed + Math.random() * 30);
          }

          linesBuffer[linesBuffer.length - 1] = {
            ...linesBuffer[linesBuffer.length - 1],
            complete: true,
          };
          flushToState();
          await sleep(lineDelay);
        } else {
          linesBuffer.push({ text: line.text, type: "out", complete: true });
          flushToState();
          await sleep(120);
        }

        await sleep(i % 2 === 0 ? 100 : 60);
      }

      if (!abortRef.current) setIsComplete(true);
    })();

    return () => {
      abortRef.current = true;
      cancelAnimationFrame(rafId);
    };
  }, [lines, typingSpeed, lineDelay, startDelay, prefersReducedMotion]);

  return { visibleLines, isComplete };
}
