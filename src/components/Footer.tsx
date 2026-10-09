import Image from "next/image";
import { Phone } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { SITE } from "@/data/content";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#faf6ef]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={`${BASE}/logo.webp`}
              alt="Gurukul Academy"
              width={150}
              height={100}
              className="h-14 w-auto"
            />
            <span className="font-devanagari text-cream/50 text-sm">
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-cream/70 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href={SITE.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-cream/70 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <YoutubeIcon size={26} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-black/10">
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
