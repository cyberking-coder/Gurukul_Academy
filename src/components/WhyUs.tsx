"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FEATURES } from "@/data/content";

function TempleIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      stroke="currentColor"
      strokeWidth={18}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Flag pole + flag */}
      <line x1="256" y1="30" x2="256" y2="85" />
      <polyline points="256,30 296,45 256,60" />

      {/* Shikhara dome */}
      <path d="M180,140 Q180,85 256,85 Q332,85 332,140" />

      {/* Shikhara tiers */}
      <line x1="170" y1="140" x2="342" y2="140" />
      <line x1="155" y1="168" x2="357" y2="168" />
      <line x1="140" y1="198" x2="372" y2="198" />
      <line x1="125" y1="230" x2="387" y2="230" />

      {/* Vertical sides of shikhara */}
      <line x1="180" y1="140" x2="155" y2="168" />
      <line x1="155" y1="168" x2="140" y2="198" />
      <line x1="140" y1="198" x2="125" y2="230" />
      <line x1="332" y1="140" x2="357" y2="168" />
      <line x1="357" y1="168" x2="372" y2="198" />
      <line x1="372" y1="198" x2="387" y2="230" />

      {/* Center vertical lines in shikhara */}
      <line x1="215" y1="140" x2="200" y2="230" />
      <line x1="297" y1="140" x2="312" y2="230" />

      {/* Platform / plinth top */}
      <rect x="90" y="230" width="332" height="30" rx="12" />

      {/* Side columns left */}
      <rect x="100" y="260" width="36" height="170" />
      <line x1="100" y1="300" x2="136" y2="300" />
      <line x1="100" y1="340" x2="136" y2="340" />
      <line x1="100" y1="380" x2="136" y2="380" />

      {/* Side columns right */}
      <rect x="376" y="260" width="36" height="170" />
      <line x1="376" y1="300" x2="412" y2="300" />
      <line x1="376" y1="340" x2="412" y2="340" />
      <line x1="376" y1="380" x2="412" y2="380" />

      {/* Inner walls */}
      <line x1="136" y1="260" x2="136" y2="430" />
      <line x1="376" y1="260" x2="376" y2="430" />

      {/* Arched door */}
      <path d="M210,430 L210,355 Q210,310 256,310 Q302,310 302,355 L302,430" />

      {/* Base slab */}
      <rect x="60" y="430" width="392" height="22" rx="11" />
    </svg>
  );
}

// Lucide icons for first 3 features; custom temple SVG for 4th
function FeatureIcon({ index }: { index: number }) {
  const LucideIcons = [Users, GraduationCap, TrendingUp];
  if (index < 3) {
    const Icon = LucideIcons[index];
    return <Icon size={22} />;
  }
  return <TempleIcon size={22} />;
}

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
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative bg-[#0b0c0e] p-8 hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden"
          >
            {/* Gold glow blob — fades in on hover, low opacity */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-gold/20 blur-[60px]" />
            </div>

            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors duration-300">
              <FeatureIcon index={i} />
            </div>
            <h3 className="font-heading mt-6 text-lg font-bold relative">
              {f.title}
            </h3>
            <p className="mt-3 text-sm text-cream/55 leading-relaxed relative">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
