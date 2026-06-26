"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/data/content";

export default function TrialPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const full = document.documentElement.scrollHeight;
      // Trigger once the user is within 120px of the very bottom of the page
      if (scrolled >= full - 120) {
        setOpen(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-gold/30 bg-[#0d0e11] p-8 md:p-10 shadow-2xl shadow-black/70"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gold/15 blur-[90px]" />

            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 text-cream/50 hover:text-gold transition-colors"
            >
              <X size={22} />
            </button>

            <div className="relative">
              <div className="flex items-center gap-1.5 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1 text-sm font-semibold text-cream">
                  {SITE.rating} · {SITE.reviewCount}+ reviews
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                Get your <span className="text-gradient-gold">free trial class</span> — fast!
              </h3>
              <p className="mt-3 text-cream/65 leading-relaxed">
                Batches fill up quickly with only 12–15 students each. Watch a
                real class and see the Gurukul difference before you enroll.
              </p>

              <Link
                href="/trial"
                onClick={close}
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              >
                Take a Free Trial Class
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <button
                onClick={close}
                className="mt-3 w-full text-center text-xs text-cream/40 hover:text-cream/70 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
