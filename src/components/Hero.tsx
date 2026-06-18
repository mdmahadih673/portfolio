"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black pt-20"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
      >
        <source src="/Man_waving_hand_programming_code_202606181609.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/60 to-[#07080d]" />
        <div className="absolute inset-0 bg-grid opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="gradient-text">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg font-medium text-zinc-200 sm:text-xl"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          {siteConfig.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-cyan-500/35"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-teal-300 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:border-cyan-300/40 hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-md"
        >
          {[
            ["12+", "Skills"],
            ["6", "Projects"],
            ["MERN", "Stack"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-white/[0.04] px-3 py-4">
              <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white sm:text-2xl">
                {value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
                {label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <a href="#about" aria-label="Scroll to about section" className="animate-float">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-1 rounded-full bg-cyan-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
