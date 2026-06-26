import { SITE } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-lg font-bold">
            Gurukul<span className="text-gold">.</span>Academy
          </span>
          <span className="font-devanagari text-cream/40 text-sm">
            गुरुकुल अकॅडमी
          </span>
        </div>
        <p className="text-xs text-cream/40 text-center md:text-left">
          {SITE.address}
        </p>
        <p className="text-xs text-cream/30">
          © {new Date().getFullYear()} Gurukul Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
