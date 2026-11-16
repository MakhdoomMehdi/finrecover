"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DashboardMockup } from "./DashboardMockup";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HEADLINE: { word: string; accent?: boolean }[] = [
  { word: "Turn" },
  { word: "Unpaid" },
  { word: "Loans" },
  { word: "Into" },
  { word: "Recovered", accent: true },
  { word: "Revenue.", accent: true },
];

// Deterministic (no Math.random) so server and client markup match.
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + (i % 3),
  delay: (i % 7) * 0.6,
  duration: 3.5 + (i % 5),
}));

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="grain relative isolate overflow-hidden bg-hero pb-36 pt-28 md:pb-44 md:pt-36"
    >
      {/* Background: grid, orbs, particles */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-24 top-10 h-96 w-96 animate-pulse-glow rounded-full bg-brand-teal/40 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] animate-pulse-glow rounded-full bg-brand-tint/20 blur-[120px] [animation-delay:3s]" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute animate-twinkle rounded-full bg-white"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container-tight grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-brand-tint" aria-hidden="true" />
            Loan Recovery • BPO • Automated CRM • Consultancy
          </motion.p>

          <h1
            id="services-hero-title"
            className="mt-7 font-display text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
          >
            {HEADLINE.map(({ word, accent }, i) => (
              <span key={word} className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${accent ? "text-gradient-animated" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 + i * 0.09, ease: EASE }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Expert collectors, smart automation and 10+ years of sector experience. One partner for your entire
            recovery operation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/free-consultation" variant="solid-light">
              Book a Free Consultation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href="#services" variant="outline-light">
              See How It Works
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
