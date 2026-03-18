"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { terminalLines } from "@/data/social";
import "./TerminalBlock.css";

export function TerminalBlock() {
  const { visibleLines, isComplete } = useTypewriter({
    lines: terminalLines,
    typingSpeed: 58,
    lineDelay: 200,
    startDelay: 800,
  });

  return (
    <div className="terminal" role="img" aria-label="Terminal showing developer stats">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">linda@portfolio</span>
      </div>
      <div className="terminal__body">
        <noscript>
          {terminalLines.map((line, i) => (
            <div key={i} className="terminal__line terminal__line--visible">
              {line.type === "cmd" ? (
                <>
                  <span className="terminal__prompt">{line.prompt}</span>
                  <span className="terminal__cmd">{line.text}</span>
                </>
              ) : (
                <span className="terminal__output">{line.text}</span>
              )}
            </div>
          ))}
        </noscript>

        {visibleLines.map((line, i) => {
          const isLast = i === visibleLines.length - 1;
          return (
            <div key={i} className="terminal__line terminal__line--visible">
              {line.type === "cmd" ? (
                <>
                  <span className="terminal__prompt">▸ </span>
                  <span className="terminal__cmd">{line.text}</span>
                </>
              ) : (
                <span className="terminal__output" dangerouslySetInnerHTML={{ __html: line.text }} />
              )}
              {isComplete && isLast && <span className="terminal__cursor" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
