"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS, SITE } from "@/data/content";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <SectionHeading
          eyebrow="Reviews"
          title="118 reviews. One rating: 5.0."
        />
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="font-heading text-3xl font-bold">
            {SITE.rating}
          </span>
          <span className="text-cream/50 text-sm">
            on Google · {SITE.reviewCount} reviews
          </span>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-8"
          >
            <Quote className="text-gold/50" size={28} />
            <p className="mt-5 text-cream/75 leading-relaxed text-sm md:text-base flex-1">
              &ldquo;{t.text}&rdquo;
            </p>
            {t.translation && (
              <p className="mt-3 text-cream/40 text-xs italic leading-relaxed">
                {t.translation}
              </p>
            )}
            <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold font-heading font-bold">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-cream/45">{t.meta}</div>
              </div>
              <div className="ml-auto flex items-center gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
