"use client";
import { useEffect, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface Props {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number; // ms
  className?: string;
}

const directionMap: Record<Direction, string> = {
  up:    "translate-y-10",
  down:  "-translate-y-10",
  left:  "translate-x-10",
  right: "-translate-x-10",
  none:  "",
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionMap[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
