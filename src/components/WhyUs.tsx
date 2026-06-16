"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FEATURES } from "@/data/content";

const ICONS = [Users, GraduationCap, TrendingUp, Heart];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Why Gurukul"
        title="A classroom that actually knows your name."
        desc="We kept everything that made the old gurukul tradition work — closeness, mentorship, accountability — and paired it with rigorous modern teaching."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
        {FEATURES.map((f, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#0b0c0e] p-8 hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Icon size={22} />
              </div>
              <h3 className="font-heading mt-6 text-lg font-bold">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-cream/55 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
