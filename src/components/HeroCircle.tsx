"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, GraduationCap, Award, Sparkles } from "lucide-react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PHOTOS = [
  { src: `${BASE}/hero/student-1.png`, alt: "Teacher personally mentoring a student" },
  { src: `${BASE}/hero/student-2.png`, alt: "Focused student studying" },
  { src: `${BASE}/hero/student-3.png`, alt: "Student preparing for exams" },
];

export default function HeroCircle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-[82vw] max-w-[540px] lg:w-full"
    >
      {/* Rotating gold gradient arc */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, #f0c878 300deg, #d8a44c 340deg, transparent 360deg)",
          padding: "6px",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
        }}
      />

      {/* Soft glow behind the circle */}
      <div className="absolute inset-2 rounded-full bg-gold/15 blur-[80px]" />

      {/* Thin static ring */}
      <div className="absolute inset-[10px] rounded-full border border-gold/20" />

      {/* Photo circle */}
      <div className="absolute inset-[18px] rounded-full overflow-hidden bg-[#0d0e11]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={PHOTOS[index].src}
              alt={PHOTOS[index].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 82vw, 540px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Vignette so the photo edges melt into the dark theme */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, transparent 52%, rgba(8,9,11,0.35) 74%, rgba(8,9,11,0.85) 100%)",
          }}
        />
        {/* Gentle warm tint from the bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/55 via-transparent to-transparent" />
        {/* Inner gold rim light */}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-gold/25" />
      </div>

      {/* Floating badges */}
      <FloatBadge className="top-[6%] left-[-4%]" delay={0}>
        <BookOpen size={20} />
      </FloatBadge>
      <FloatBadge className="top-[38%] right-[-6%]" delay={0.6}>
        <GraduationCap size={20} />
      </FloatBadge>
      <FloatBadge className="bottom-[6%] left-[8%]" delay={1.2}>
        <Award size={20} />
      </FloatBadge>
      <FloatBadge className="bottom-[24%] right-[2%]" delay={1.8}>
        <Sparkles size={18} />
      </FloatBadge>

      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {PHOTOS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-gold" : "w-1.5 bg-gold/30"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FloatBadge({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay }}
      className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-[#0d0e11]/90 text-gold backdrop-blur-md shadow-lg shadow-black/40 ${className}`}
    >
      {children}
    </motion.div>
  );
}
