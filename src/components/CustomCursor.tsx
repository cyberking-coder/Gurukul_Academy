"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Single shared source of truth for position so the dot and ring are
    // always concentric. Scale is baked into the same transform string and
    // eased per-frame, so it can never override or desync the translate.
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const render = () => {
      scale += (targetScale - scale) * 0.2;
      dot.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
      ring.style.transform = `translate(${x - 18}px, ${y - 18}px) scale(${scale.toFixed(3)})`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const handleMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    // Event delegation grows the ring over any interactive element, including
    // ones rendered after mount (popups, mobile menu, etc.).
    const handleOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button")) targetScale = 1.6;
    };
    const handleOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.("a, button")) targetScale = 1;
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      cancelAnimationFrame(raf);
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
