"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/content";

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    SITE.whatsappMessage
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[9990] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#fff"
        className="relative"
      >
        <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.117.553 4.184 1.605 6.006L4 29l8.17-1.573a11.94 11.94 0 0 0 3.833.63h.001C22.62 28.057 28 22.674 28 16.054 28 9.434 22.62 3.05 16.003 3zm0 21.86h-.001a9.9 9.9 0 0 1-3.44-.61l-.247-.098-4.85.934.943-4.723-.16-.243a9.86 9.86 0 0 1-1.51-5.257c0-5.463 4.446-9.909 9.916-9.909 2.648 0 5.137 1.032 7.008 2.904a9.85 9.85 0 0 1 2.902 7.008c0 5.463-4.446 9.909-9.913 9.909zm5.436-7.418c-.298-.149-1.762-.869-2.035-.968-.273-.099-.472-.149-.671.15-.198.297-.77.967-.944 1.166-.173.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.479-.886-.79-1.484-1.766-1.658-2.064-.173-.298-.019-.459.13-.607.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.372-.025-.52-.075-.15-.671-1.617-.92-2.213-.242-.581-.487-.502-.671-.512l-.571-.01c-.198 0-.52.074-.793.372-.273.298-1.04 1.017-1.04 2.48 0 1.464 1.065 2.878 1.213 3.076.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.762-.72 2.01-1.415.248-.695.248-1.29.173-1.415-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </motion.a>
  );
}
