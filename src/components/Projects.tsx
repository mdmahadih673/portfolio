"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of modern web applications built with cutting-edge technologies."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}
                >
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-white/30" />
                      <span className="h-3 w-3 rounded-full bg-white/30" />
                      <span className="h-3 w-3 rounded-full bg-white/30" />
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-4 gap-2">
                        <div className="col-span-3 h-3 rounded bg-white/25" />
                        <div className="h-3 rounded bg-white/15" />
                        <div className="col-span-2 h-3 rounded bg-white/15" />
                        <div className="col-span-2 h-3 rounded bg-white/10" />
                      </div>
                      <div className="h-16 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                      Preview
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demo}
                      className="flex-1 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-400 py-2.5 text-center text-sm font-bold text-slate-950 transition-all hover:opacity-90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
