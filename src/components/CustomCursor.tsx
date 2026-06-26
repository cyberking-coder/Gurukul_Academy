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

    // Use event delegation so the ring grows over any interactive element,
    // including ones rendered after mount (popups, mobile menu, etc.).
    // Scaling is done via the CSS `scale` property (see .cursor-ring.is-hovering)
    // which composes with the inline translate transform instead of overriding it,
    // so the ring stays centred on the cursor instead of drifting away.
    const handleOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button")) {
        ring.classList.add("is-hovering");
      }
    };
    const handleOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button")) {
        ring.classList.remove("is-hovering");
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}
