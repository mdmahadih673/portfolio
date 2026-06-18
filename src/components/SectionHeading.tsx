"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-flex flex-col gap-3 ${align === "center" ? "items-center" : "items-start"}`}
      >
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          {title.split(" ")[0]}
        </span>
        <h2
          className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">{subtitle}</p>
        )}
        <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300" />
      </motion.div>
    </div>
  );
}
