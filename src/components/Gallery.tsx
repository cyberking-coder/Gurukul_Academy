"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const IMAGES = [
  {
    src: `${BASE}/gallery/gallery-1.png`,
    alt: "Teacher with full batch of students on an outdoor excursion",
    tag: "Batch Outing",
  },
  {
    src: `${BASE}/gallery/gallery-2.png`,
    alt: "Faculty and students together at outdoor trip",
    tag: "Faculty & Students",
  },
  {
    src: `${BASE}/gallery/gallery-3.png`,
    alt: "Farewell 2023 celebration in the classroom",
    tag: "Farewell 2023",
  },
  {
    src: `${BASE}/gallery/gallery-4.png`,
    alt: "Educational field trip with students at Avani Agri Tourism",
    tag: "Educational Trip",
  },
  {
    src: `${BASE}/gallery/gallery-5.png`,
    alt: "Students dressed up for farewell party in classroom",
    tag: "Farewell Party",
  },
  {
    src: `${BASE}/gallery/gallery-6.png`,
    alt: "Students attentively focused during a class at Gurukul Academy",
    tag: "In Class",
  },
  {
    src: `${BASE}/gallery/gallery-7.png`,
    alt: "Teacher guiding a full classroom of students at their desks",
    tag: "In Class",
  },
  {
    src: `${BASE}/gallery/gallery-8.png`,
    alt: "Students posing together outside the Gurukul Academy signboard",
    tag: "Students",
  },
  {
    src: `${BASE}/gallery/gallery-9.jpg`,
    alt: "Teacher reviewing work with a group of students",
    tag: "Faculty & Students",
  },
];

const N = IMAGES.length;

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0, scale: 0.96 }),
};

export default function Gallery() {
  // index + direction of the last move (for the slide animation)
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);

  const paginate = (d: number) =>
    setState(([i]) => [(i + d + N) % N, d]);

  const goTo = (target: number) =>
    setState(([i]) => [target, target > i ? 1 : -1]);

  const current = IMAGES[index];

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments that made us."
        desc="Swipe through life at Gurukul — classes, celebrations and trips beyond the classroom."
      />

      <div className="mt-12 md:mt-16">
        {/* Stage */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={dir} mode="popLayout">
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 32 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.35 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  const swipe = info.offset.x;
                  if (swipe < -80 || info.velocity.x < -400) paginate(1);
                  else if (swipe > 80 || info.velocity.x > 400) paginate(-1);
                }}
                className="relative aspect-[4/3] w-full cursor-grab overflow-hidden rounded-3xl border border-gold/30 bg-[#faf6ef] shadow-2xl shadow-black/15 active:cursor-grabbing"
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  draggable={false}
                  className="select-none object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority={false}
                />
                {/* Tag badge */}
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-cream shadow-sm backdrop-blur-sm">
                  {current.tag}
                </div>
                {/* Counter */}
                <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {index + 1} / {N}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-cream shadow-md shadow-black/10 backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink md:left-0 md:-translate-x-1/2"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-cream shadow-md shadow-black/10 backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink md:right-0 md:translate-x-1/2"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
