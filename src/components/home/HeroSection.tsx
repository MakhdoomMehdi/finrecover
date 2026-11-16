"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const badges = [
  { icon: Shield, label: "Compliance-First" },
  { icon: TrendingUp, label: "95% Recovery Rate" },
  { icon: Zap, label: "AI-Powered Automation" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden" aria-label="Hero">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(60,110,113,0.4) 0%, transparent 70%)",
          top: "5%",
          right: "-10%",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(163,198,200,0.14) 0%, transparent 70%)",
          bottom: "10%",
          left: "5%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-tight relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-sky-light text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10"
              >
                <Icon className="w-3.5 h-3.5 text-amber" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Transforming{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Debt Recovery
              </span>
            </span>
            {" "}&{" "}
            <span className="bg-gradient-to-r from-white to-amber bg-clip-text text-transparent">
              Business Operations
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10"
          >
            Fin Recover delivers cutting-edge loan recovery, scalable workforce outsourcing, 
            automated CRM systems, and strategic consultancy — purpose-built for financial institutions and digital lenders.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-amber hover:text-navy transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 text-base"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 active:scale-95 text-base"
            >
              Book a Free Consultation
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap items-center gap-6 text-white/65 text-xs font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Active Recovery Operations
            </span>
            <span>200+ Clients Served</span>
            <span>Regulatory Compliant</span>
            <span>Lahore, Pakistan</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/65" />
      </motion.div>
    </section>
  );
}
