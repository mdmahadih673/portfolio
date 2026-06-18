"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { skills } from "@/lib/data";

function SkillBar({
  name,
  percentage,
  index,
}: {
  name: string;
  percentage: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <ScrollReveal delay={index * 0.04}>
      <div ref={ref} className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium text-zinc-200">{name}</span>
          <span className="text-sm font-semibold text-cyan-300">{percentage}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/30">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Proficiency across the full stack, from frontend interfaces to backend databases."
        />

        <div className="glass-card mx-auto max-w-5xl rounded-2xl p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
