"use client";

import { motion, type Variants } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/data/content";

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      delay: 0.15 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function RevealWord({ children, i }: { children: string; i: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-1">
      <motion.span
        className="inline-block"
        custom={i}
        initial="hidden"
        animate="visible"
        variants={wordVariants}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-terracotta/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f3efe7 1px, transparent 1px), linear-gradient(to bottom, #f3efe7 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-devanagari text-gold/80 text-lg md:text-xl mb-6 tracking-wide"
        >
          गुरुकुल अकॅडेमी
        </motion.div>

        <h1 className="font-heading font-extrabold leading-[0.95] tracking-tight text-[13vw] md:text-[7vw] lg:text-[6.2vw]">
          <RevealWord i={0}>Where</RevealWord>{" "}
          <RevealWord i={1}>Brilliance</RevealWord>
          <br />
          <span className="text-gradient-gold">
            <RevealWord i={2}>Begins.</RevealWord>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-xl text-base md:text-lg text-cream/65 leading-relaxed"
        >
          Pune&rsquo;s most trusted coaching institute for Class 9–12 Maths &amp;
          Science — small batches of 10, personally mentored, consistently
          excellent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="/trial"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Take a Free Trial Class
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <div className="flex items-center gap-2 text-sm text-cream/70">
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-semibold text-cream">{SITE.rating}</span>
            <span>· {SITE.reviewCount} Google reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-6 flex items-center gap-2 text-xs md:text-sm text-cream/45"
        >
          <MapPin size={14} />
          Karvenagar, Pune — Maharashtra 411052
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
