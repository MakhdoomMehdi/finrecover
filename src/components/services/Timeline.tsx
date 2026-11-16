"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { ServiceStep } from "@/lib/services";

interface TimelineProps {
  steps: ServiceStep[];
  tone: "dark" | "light";
}

/** 4-step process. The connecting line draws itself as the section scrolls into view. */
export function Timeline({ steps, tone }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const fill = reduce ? 1 : progress;
  const dark = tone === "dark";

  return (
    <div ref={ref} className="relative">
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        {/* Horizontal line (md and up) */}
        <div
          aria-hidden="true"
          className={`absolute left-6 right-[calc(25%-1.5rem)] top-6 hidden h-0.5 md:block ${
            dark ? "bg-white/15" : "bg-brand-slate/15"
          }`}
        >
          <motion.div
            style={{ scaleX: fill }}
            className="h-full origin-left bg-gradient-to-r from-brand-teal to-brand-tint"
          />
        </div>
        {/* Vertical line (mobile) */}
        <div
          aria-hidden="true"
          className={`absolute bottom-6 left-6 top-6 w-0.5 md:hidden ${dark ? "bg-white/15" : "bg-brand-slate/15"}`}
        >
          <motion.div
            style={{ scaleY: fill }}
            className="h-full origin-top bg-gradient-to-b from-brand-teal to-brand-tint"
          />
        </div>

        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative flex gap-5 md:flex-col md:gap-5"
          >
            <span
              className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-display text-lg font-bold ${
                dark
                  ? "border-brand-tint bg-brand-deep text-brand-tint"
                  : "border-brand-teal bg-white text-brand-teal"
              }`}
            >
              {i + 1}
            </span>
            <div>
              <h4 className={`font-display text-lg font-bold ${dark ? "text-white" : "text-brand-slate"}`}>
                {step.title}
              </h4>
              <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-white/75" : "text-brand-slate/80"}`}>
                {step.desc}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
