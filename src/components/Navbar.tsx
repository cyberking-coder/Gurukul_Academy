"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { SITE } from "@/data/content";

const LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#08090b]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-heading text-xl md:text-2xl font-bold tracking-tight">
            Gurukul<span className="text-gold">.</span>Academy
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cream/70 hover:text-gold transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-cream/80 hover:text-gold transition-colors"
          >
            <Phone size={15} />
            {SITE.phone}
          </a>
          <div className="flex items-center gap-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              <InstagramIcon size={28} />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              <YoutubeIcon size={30} />
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#08090b] border-t border-white/10 px-6 py-6 flex flex-col gap-5"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/80 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            Enroll Now
          </a>
          <div className="flex items-center gap-5 pt-2">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              <InstagramIcon size={28} />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              <YoutubeIcon size={30} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
