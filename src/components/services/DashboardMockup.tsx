"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";

const LINE = "M0 118 C 30 112, 45 104, 70 98 S 115 84, 140 70 S 190 58, 215 44 S 275 26, 320 12";
const AREA = `${LINE} L320 140 L0 140 Z`;

/** Illustrative recovery dashboard: climbing chart, live counter, floating glass cards. */
export function DashboardMockup() {
  const reduce = useReducedMotion();
  const [recovered, setRecovered] = useState(48.2);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setRecovered((v) => +(v + 0.1).toFixed(1)), 2400);
    return () => clearInterval(id);
  }, [reduce]);

  const float = (delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div className="relative mx-auto w-full max-w-md px-3 pb-10 pt-8 lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
        className="glass-strong relative rounded-3xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] sm:p-6"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-brand-tint">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-tint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-tint" />
            </span>
            Live recovery dashboard
          </span>
        </div>

        {/* Headline metric */}
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">Recovered to date</p>
            <p className="mt-1 font-display text-3xl font-bold tabular-nums text-white sm:text-4xl">
              PKR {recovered.toFixed(1)}M
            </p>
          </div>
          <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-brand-teal/60 px-2.5 py-1 text-xs font-semibold text-white">
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            +12.4%
          </span>
        </div>

        {/* Chart */}
        <svg viewBox="0 0 320 140" className="mt-4 h-36 w-full" role="img" aria-label="Chart showing recoveries climbing over time">
          <defs>
            <linearGradient id="dm-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a3c6c8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#a3c6c8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dm-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3c6e71" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          {[28, 56, 84, 112].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,0.08)" strokeDasharray="3 5" />
          ))}
          <motion.path
            d={AREA}
            fill="url(#dm-area)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          <motion.path
            d={LINE}
            fill="none"
            stroke="url(#dm-line)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, delay: 0.9, ease: "easeInOut" }}
          />
          <motion.circle
            cx="320"
            cy="12"
            r="5"
            fill="#ffffff"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6 }}
          />
        </svg>

        {/* Mini metrics */}
        <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
          {[
            ["1,284", "Accounts resolved"],
            ["18 days", "Avg. to resolve"],
            ["71%", "Contact rate"],
          ].map(([v, l]) => (
            <div key={l}>
              <dt className="text-[11px] text-white/70">{l}</dt>
              <dd className="mt-0.5 font-display text-sm font-bold text-white sm:text-base">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-center text-[10px] text-white/65">Illustrative data</p>
      </motion.div>

      {/* Floating: Promise-to-Pay */}
      <motion.div
        {...float(0)}
        className="absolute right-0 top-0 z-10 sm:-right-3"
      >
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow">
          <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90" aria-hidden="true">
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
            <motion.circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#a3c6c8"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.82 }}
              transition={{ duration: 1.6, delay: 1.2, ease: "easeOut" }}
            />
          </svg>
          <div>
            <p className="text-[11px] text-white/70">Promise-to-Pay</p>
            <p className="font-display text-xl font-bold leading-none text-white">82%</p>
          </div>
        </div>
      </motion.div>

      {/* Floating: Recovered this week */}
      <motion.div
        {...float(1.2)}
        className="absolute bottom-0 left-0 z-10 sm:-left-4"
      >
        <div className="glass-strong flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/70 text-white">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] text-white/70">Recovered this week</p>
            <p className="font-display text-lg font-bold leading-none text-white">+PKR 3.4M</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
