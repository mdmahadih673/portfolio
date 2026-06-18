"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-teal-300 to-amber-300 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/20"
          >
            MH
          </motion.div>

          <blockquote className="max-w-xl text-sm italic leading-relaxed text-zinc-500">
            &ldquo;{siteConfig.quote}&rdquo;
          </blockquote>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <p className="text-xs text-zinc-600">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
