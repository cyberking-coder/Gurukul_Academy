import { Phone } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { SITE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold">
              Gurukul<span className="text-gold">.</span>Academy
            </span>
            <span className="font-devanagari text-cream/40 text-sm">
              गुरुकुल अकॅडमी
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-sm text-cream/70 hover:text-gold transition-colors"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <a
              href={`tel:${SITE.phone2.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-sm text-cream/70 hover:text-gold transition-colors"
            >
              <Phone size={14} />
              {SITE.phone2}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-cream/70 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-cream/70 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <YoutubeIcon size={26} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-cream/40 text-center md:text-left">
            {SITE.address}
          </p>
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Gurukul Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
