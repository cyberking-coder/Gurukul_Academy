"use client";

import { motion } from "framer-motion";
import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="border-l border-white/10 pl-5"
          >
            <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">
              {stat.value}
              <span className="text-2xl md:text-3xl">{stat.suffix}</span>
            </div>
            <div className="mt-2 text-sm text-cream/55 tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
