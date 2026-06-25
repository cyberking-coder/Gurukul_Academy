"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const IMAGES = [
  {
    src: "/gallery/gallery-1.png",
    alt: "Teacher with full batch of students on an outdoor excursion",
    quote: "Beyond the classroom, every experience is a lesson in disguise.",
    tag: "Batch Outing",
  },
  {
    src: "/gallery/gallery-2.png",
    alt: "Faculty and students together at outdoor trip",
    quote: "The best teachers don't just teach — they lead adventures.",
    tag: "Faculty & Students",
  },
  {
    src: "/gallery/gallery-3.png",
    alt: "Farewell 2023 celebration in the classroom",
    quote: "Every farewell is a celebration of the journey we shared together.",
    tag: "Farewell 2023",
  },
  {
    src: "/gallery/gallery-4.png",
    alt: "Educational field trip with students at Avani Agri Tourism",
    quote: "Learning has no boundaries — it blooms wherever curiosity takes root.",
    tag: "Educational Trip",
  },
  {
    src: "/gallery/gallery-5.png",
    alt: "Students dressed up for farewell party in classroom",
    quote: "Not goodbye — just see you at the top.",
    tag: "Farewell Party",
  },
  {
    src: "/gallery/gallery-6.png",
    alt: "Students attentively focused during a class at Gurukul Academy",
    quote: "Where focus meets passion, excellence is inevitable.",
    tag: "In Class",
  },
];

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
      style={{ height: `${IMAGES.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 mb-4 md:mb-6">
          <SectionHeading eyebrow="Gallery" title="Moments that made us." />
        </div>

        <div className="relative flex-1 max-h-[68vh]">
          {IMAGES.map((item, i) => {
            const start = i / IMAGES.length;
            const end = (i + 1) / IMAGES.length;
            return (
              <ScrollCard
                key={i}
                item={item}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

        <div className="flex justify-center gap-2 py-4">
          {IMAGES.map((_, i) => {
            const start = i / IMAGES.length;
            const end = (i + 1) / IMAGES.length;
            return (
              <DotIndicator
                key={i}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScrollCard({
  item,
  scrollYProgress,
  start,
  end,
}: {
  item: (typeof IMAGES)[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const pad = Math.min(0.05, (end - start) * 0.3);
  const opacity = useTransform(
    scrollYProgress,
    [start, start + pad, end - pad, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + pad, end - pad, end],
    [60, 0, 0, -60]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4"
      style={{ opacity, y }}
    >
      <div className="relative w-full max-w-2xl rounded-3xl border border-gold/30 bg-white/[0.03] overflow-hidden shadow-2xl shadow-black/60">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-gold/20 border border-gold/40 px-3 py-1 text-xs font-semibold text-gold tracking-widest uppercase">
            {item.tag}
          </span>
        </div>
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
  start,
  end,
}: {
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const mid = (start + end) / 2;
  const scale = useTransform(scrollYProgress, [start, mid, end], [1, 1.6, 1]);
  const bg = useTransform(
    scrollYProgress,
    [start, start + 0.02, end - 0.02, end],
    [
      "rgba(216,164,76,0.25)",
      "rgba(216,164,76,1)",
      "rgba(216,164,76,1)",
      "rgba(216,164,76,0.25)",
    ]
  );
  return (
    <motion.div
      className="h-2 w-2 rounded-full"
      style={{ scale, backgroundColor: bg }}
    />
  );
}
