"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROGRAMS } from "@/data/content";

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <SectionHeading
        eyebrow="Programs"
        title="Courses built around the student, not the syllabus."
        desc="Every program is designed for clarity, consistency, and measurable improvement — whether you're building foundations or sprinting toward boards."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.05] hover:border-gold/40 transition-all duration-500"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm md:text-base uppercase tracking-[0.2em] text-gold/80 font-semibold">
                {p.tag}
              </span>
              <ArrowUpRight
                size={20}
                className="text-cream/30 group-hover:text-gold group-hover:rotate-45 transition-all duration-500"
              />
            </div>
            <h3 className="font-heading mt-4 text-2xl md:text-3xl font-bold">
              {p.title}
            </h3>
            <p className="mt-4 text-cream/60 leading-relaxed text-base md:text-lg">
              {p.desc}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {p.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-center gap-2 text-sm md:text-base text-cream/70"
                >
                  <Check size={16} className="text-gold shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
