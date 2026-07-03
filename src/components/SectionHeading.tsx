"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl"
    >
      <span className="text-gold text-sm md:text-base uppercase tracking-[0.25em] font-semibold">
        {eyebrow}
      </span>
      <h2 className="font-heading mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-cream/60 text-base md:text-lg leading-relaxed">
          {desc}
        </p>
      )}
    </motion.div>
  );
}
