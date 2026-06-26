"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS, SITE } from "@/data/content";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (j: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.4 + j * 0.06, ease: "backOut" },
  }),
};

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <SectionHeading eyebrow="Reviews" title="118 reviews. One rating: 5.0." />

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
              >
                <Star size={20} fill="currentColor" strokeWidth={0} />
              </motion.span>
            ))}
          </div>
          <span className="font-heading text-3xl font-bold">{SITE.rating}</span>
          <span className="text-cream/50 text-sm">
            on Google · {SITE.reviewCount} reviews
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8 overflow-hidden cursor-default"
          >
            {/* Shimmer border glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: "inset 0 0 0 1px rgba(216,164,76,0.4), 0 0 30px 0 rgba(216,164,76,0.08)" }}
            />

            {/* Floating quote icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: i * 0.5 }}
            >
              <Quote className="text-gold/40 group-hover:text-gold/70 transition-colors duration-300" size={30} />
            </motion.div>

            <p className="mt-5 text-cream/75 leading-relaxed text-sm md:text-base flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/10">
              {/* Avatar with pulse ring on hover */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold font-heading font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
              </div>

              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-cream/45">{t.meta}</div>
              </div>

              {/* Stars pop in */}
              <div className="ml-auto flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <motion.span
                    key={j}
                    custom={j}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={starVariants}
                  >
                    <Star size={12} fill="currentColor" strokeWidth={0} />
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
