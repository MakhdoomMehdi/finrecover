"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="section-padding bg-sky-light/10" id="testimonials">
      <div className="container-tight">
        <SectionReveal className="text-center mb-14">
          <span className="badge bg-sky-mid/15 text-sky-mid mb-4">Client Stories</span>
          <h2 className="section-title mb-4">
            Trusted by{" "}
            <span className="text-gradient">Leading Institutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our results speak through the businesses we&apos;ve helped transform.
          </p>
        </SectionReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-card p-8 md:p-12">
            {/* Large quote mark */}
            <Quote className="absolute top-6 left-8 w-12 h-12 text-sky-light opacity-50" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="pt-6"
              >
                <p className="text-navy/80 text-lg md:text-xl leading-relaxed italic mb-8">
                  &ldquo;{TESTIMONIALS[current].quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-mid to-navy flex items-center justify-center text-white font-bold text-sm">
                    {TESTIMONIALS[current].initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-sm">
                      {TESTIMONIALS[current].author}
                    </div>
                    <div className="text-sky-mid text-xs font-medium">
                      {TESTIMONIALS[current].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      idx === current ? "bg-sky-mid w-6" : "bg-sky-light/50"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 border-sky-light/50 flex items-center justify-center hover:border-sky-mid hover:text-sky-mid transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-sky-mid text-white flex items-center justify-center hover:bg-navy transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
