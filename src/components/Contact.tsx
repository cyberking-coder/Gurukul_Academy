"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-10 md:p-16">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative grid lg:grid-cols-2 gap-12"
        >
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">
              Get Started
            </span>
            <h2 className="font-heading mt-4 text-4xl md:text-5xl font-bold leading-[1.05]">
              Your seat in the
              <br />
              next batch is waiting.
            </h2>
            <p className="mt-5 text-cream/60 max-w-md leading-relaxed">
              Batches are limited to 12–15 students. Take a free trial class
              today and see why parents and students rate us 5.0 out of 5.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink hover:scale-105 transition-transform"
              >
                <Phone size={16} />
                Call {SITE.phone}
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gurukul%20Academy%20Karvenagar%20Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
              >
                Get Directions
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <InfoRow icon={MapPin} label="Address">
              {SITE.address}
            </InfoRow>
            <InfoRow icon={Clock} label="Hours">
              {SITE.hours}
            </InfoRow>
            <InfoRow icon={Phone} label="Phone">
              {SITE.phone}
            </InfoRow>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-cream/40">
          {label}
        </div>
        <div className="mt-1 text-sm text-cream/85 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
