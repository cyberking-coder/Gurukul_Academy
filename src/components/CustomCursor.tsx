"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const handleMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      ring.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
    };

    window.addEventListener("mousemove", handleMove);

    const interactive = document.querySelectorAll("a, button");
    const grow = () => ring.classList.add("scale-150");
    const shrink = () => ring.classList.remove("scale-150");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block transition-[scale] duration-200 ease-out"
      />
    </>
  );
}
