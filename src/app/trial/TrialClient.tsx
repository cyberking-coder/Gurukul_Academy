"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star, Phone } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/data/content";

export default function TrialClient() {
  return (
    <main className="min-h-screen bg-[#08090b] flex flex-col">
      <div className="mx-auto max-w-4xl w-full px-6 lg:px-10 py-10 flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cream/60 hover:text-gold transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">
            Free Trial Class
          </span>
          <h1 className="font-heading mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Experience Gurukul,<br />
            <span className="text-gradient-gold">before you enroll.</span>
          </h1>
          <p className="mt-4 text-cream/60 max-w-lg mx-auto leading-relaxed">
            Watch our faculty explain a concept — the same clarity and depth
            every student experiences in every class.
          </p>
        </motion.div>

        {/* Video player — replace src with actual video URL when ready */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-2xl shadow-black/60"
        >
          <div className="relative w-full aspect-video flex items-center justify-center bg-black/40">
            {/* Swap this <div> for a <video> or <iframe> once the video is ready */}
            <div className="flex flex-col items-center gap-4 text-cream/40 select-none">
              <div className="h-20 w-20 rounded-full border-2 border-gold/40 flex items-center justify-center">
                <div className="h-0 w-0 border-t-[14px] border-t-transparent border-l-[26px] border-l-gold/60 border-b-[14px] border-b-transparent ml-2" />
              </div>
              <p className="text-sm">Video coming soon — check back shortly</p>
            </div>

            {/* Uncomment and set src once video is available:
            <video
              src="/Gurukul_Academy/trial-lesson.mp4"
              controls
              className="w-full h-full"
              poster="/Gurukul_Academy/gallery/gallery-6.png"
            />
            */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-6"
        >
          <div>
            <div className="flex items-center gap-2 text-gold mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
              ))}
              <span className="text-cream font-semibold text-sm ml-1">
                {SITE.rating} · {SITE.reviewCount}+ students
              </span>
            </div>
            <p className="font-heading text-xl font-bold">
              Ready to join the next batch?
            </p>
            <p className="text-cream/55 text-sm mt-1">
              Batches fill fast — 12–15 students only.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:scale-105 transition-transform"
            >
              <Phone size={15} />
              Call Now
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              Enroll Online
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
