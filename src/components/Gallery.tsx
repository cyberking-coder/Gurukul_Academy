"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  {
    src: `${BASE}/gallery/gallery-1.png`,
    alt: "Teacher with full batch of students on an outdoor excursion",
    quote: "Beyond the classroom, every experience is a lesson in disguise.",
    tag: "Batch Outing",
  },
  {
    src: `${BASE}/gallery/gallery-2.png`,
    alt: "Faculty and students together at outdoor trip",
    quote: "The best teachers don't just teach — they lead adventures.",
    tag: "Faculty & Students",
  },
  {
    src: `${BASE}/gallery/gallery-3.png`,
    alt: "Farewell 2023 celebration in the classroom",
    quote: "Every farewell is a celebration of the journey we shared together.",
    tag: "Farewell 2023",
  },
  {
    src: `${BASE}/gallery/gallery-4.png`,
    alt: "Educational field trip with students at Avani Agri Tourism",
    quote: "Learning has no boundaries — it blooms wherever curiosity takes root.",
    tag: "Educational Trip",
  },
  {
    src: `${BASE}/gallery/gallery-5.png`,
    alt: "Students dressed up for farewell party in classroom",
    quote: "Not goodbye — just see you at the top.",
    tag: "Farewell Party",
  },
  {
    src: `${BASE}/gallery/gallery-6.png`,
    alt: "Students attentively focused during a class at Gurukul Academy",
    quote: "Where focus meets passion, excellence is inevitable.",
    tag: "In Class",
  },
];

const N = IMAGES.length;
// Give a little breathing room at start and end so first/last card are fully readable
const SECTION_MULTIPLIER = N + 1; // 7 × 100vh

function getRange(i: number) {
  // Each image occupies 1/N of the scroll range
  // We offset by half a unit so there's padding before image 0 and after image N-1
  const unit = 1 / SECTION_MULTIPLIER;
  const center = (i + 1) * unit; // starts at unit (after 1 unit of intro padding)
  const half = unit * 0.45;
  return {
    fadeIn: Math.max(0, center - half),
    fullIn: center - half * 0.1,
    fullOut: center + half * 0.1,
    fadeOut: Math.min(1, center + half),
  };
}

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      style={{ height: `${SECTION_MULTIPLIER * 100}vh` }}
      className="relative"
    >
      {/* sticky viewport panel */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* heading — fixed height */}
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-20 md:pt-24 pb-4 md:pb-6">
          <SectionHeading eyebrow="Gallery" title="Moments that made us." />
        </div>

        {/* card stack — explicit height so absolute children have room */}
        <div
          className="relative w-full"
          style={{ height: "calc(100vh - 180px)" }}
        >
          {IMAGES.map((item, i) => {
            const r = getRange(i);
            return (
              <ScrollCard
                key={i}
                item={item}
                scrollYProgress={scrollYProgress}
                range={r}
              />
            );
          })}
        </div>

        {/* progress dots */}
        <div className="flex justify-center gap-2 pt-3">
          {IMAGES.map((_, i) => {
            const r = getRange(i);
            return (
              <DotIndicator
                key={i}
                scrollYProgress={scrollYProgress}
                range={r}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Range = { fadeIn: number; fullIn: number; fullOut: number; fadeOut: number };

function ScrollCard({
  item,
  scrollYProgress,
  range,
}: {
  item: (typeof IMAGES)[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: Range;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [range.fadeIn, range.fullIn, range.fullOut, range.fadeOut],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [range.fadeIn, range.fullIn, range.fullOut, range.fadeOut],
    [55, 0, 0, -55]
  );
  const scale = useTransform(
    scrollYProgress,
    [range.fadeIn, range.fullIn, range.fullOut, range.fadeOut],
    [0.95, 1, 1, 0.95]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4"
      style={{ opacity, y, scale }}
    >
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold/30 bg-white/[0.03] overflow-hidden shadow-2xl shadow-black/60">
        {/* photo */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/75 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-gold/20 border border-gold/40 px-3 py-1 text-xs font-semibold text-gold tracking-widest uppercase">
            {item.tag}
          </span>
        </div>
        {/* quote */}
        <div className="px-6 md:px-8 py-5 md:py-6">
          <p className="font-heading text-base md:text-xl text-cream/90 leading-relaxed italic">
            &ldquo;{item.quote}&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DotIndicator({
  scrollYProgress,
  range,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: Range;
}) {
  const mid = (range.fullIn + range.fullOut) / 2;
  const scale = useTransform(
    scrollYProgress,
    [range.fadeIn, mid, range.fadeOut],
    [1, 1.6, 1]
  );
  const bg = useTransform(scrollYProgress, [range.fadeIn, range.fullIn, range.fullOut, range.fadeOut], [
    "rgba(216,164,76,0.25)",
    "rgba(216,164,76,1)",
    "rgba(216,164,76,1)",
    "rgba(216,164,76,0.25)",
  ]);
  return (
    <motion.div className="h-2 w-2 rounded-full" style={{ scale, backgroundColor: bg }} />
  );
}
