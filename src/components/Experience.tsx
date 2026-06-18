"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience Timeline"
          subtitle="My journey through frontend, full stack, and AI-assisted development."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 sm:left-1/2 sm:-translate-x-px" />

          {experience.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col sm:mb-16 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden w-1/2 sm:block" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative w-full sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div
                    className={`absolute top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-cyan-500/30 ${
                      index % 2 === 0
                        ? "left-2.5 sm:left-auto sm:-right-2"
                        : "left-2.5 sm:left-0 sm:-translate-x-1/2"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="ml-12 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.055] sm:ml-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.period}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
