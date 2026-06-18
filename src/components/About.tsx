"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-6 text-base leading-relaxed text-zinc-400 sm:p-8 sm:text-lg [&_p+p]:mt-5">
              <p>
                <span className="font-semibold text-white">Md. Mahadi Hasan</span> is a
                passionate full stack web developer focused on building modern, responsive,
                and user-friendly digital experiences with HTML, CSS, JavaScript, React.js,
                Next.js, Node.js, Express.js, MongoDB, and Mongoose.
              </p>
              <p>
                He works comfortably with Redux, Tailwind CSS, JavaScript ES6, Git & GitHub,
                VS Code, and Vercel to create clean frontends, reliable APIs, and polished
                full stack projects ready for deployment.
              </p>
              <p>
                He also uses modern AI coding tools like ChatGPT, Claude Code, Anti Gravity,
                Cursor, Lovable, and Google AI Studio to explore ideas faster, improve
                workflow, and transform concepts into professional digital products.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {personalInfo.map((info, index) => (
              <ScrollReveal key={info.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-sm font-bold text-cyan-200">
                    {info.icon}
                  </span>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{info.value}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
