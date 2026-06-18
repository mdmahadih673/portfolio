"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { tools } from "@/lib/data";

export default function Tools() {
  return (
    <section id="tools" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Software & Tools"
          subtitle="The technologies and platforms I use to design, build, and ship products."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />
                <div className="relative flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} text-sm font-black text-slate-950 shadow-lg`}
                  >
                    {tool.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{tool.name}</h3>
                    <p className="text-xs text-zinc-500">Daily workflow tool</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
