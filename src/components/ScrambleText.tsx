"use client";
import { useEffect, useState, useRef } from "react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function ScrambleText({ text, className = "", delay = 0 }: Props) {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    // Si no está disponible IntersectionObserver, saltamos directo al texto
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setDisplayText(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            let iteration = 0;
            const interval = setInterval(() => {
              setDisplayText(
                text
                  .split("")
                  .map((char, index) => {
                    if (char === " ") return " ";
                    if (index < iteration) {
                      return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                  })
                  .join("")
              );

              if (iteration >= text.length) {
                clearInterval(interval);
                setDisplayText(text);
              }
              iteration += 1;
            }, 30);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [text, hasAnimated, delay]);

  return (
    <span ref={containerRef} className={className}>
      {displayText || text}
    </span>
  );
}
