"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, MessageCircle, Mail, PhoneCall, CheckCircle2 } from "lucide-react";

const CHANNELS = [
  { icon: MessageSquare, name: "SMS", msg: "Friendly reminder: your instalment is due on the 5th." },
  { icon: MessageCircle, name: "WhatsApp", msg: "Tap to pay now or share your promise-to-pay date." },
  { icon: Mail, name: "Email", msg: "Your statement and a secure payment link." },
  { icon: PhoneCall, name: "IVR", msg: "Automated call with an option to speak to an agent." },
];

/** Animated flow: SMS → WhatsApp → Email → IVR messages firing in sequence. */
export function OmnichannelFlow({ tone = "light" }: { tone?: "dark" | "light" }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? CHANNELS.length : 0);
  const dark = tone === "dark";

  useEffect(() => {
    if (reduce) {
      setActive(CHANNELS.length);
      return;
    }
    const id = setInterval(() => setActive((a) => (a + 1) % (CHANNELS.length + 1)), 1700);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="p-6 md:p-8">
      <p className={`eyebrow ${dark ? "text-brand-tint" : "text-brand-teal"}`}>Automated escalation cadence</p>
      <ol className="mt-5 space-y-2">
        {CHANNELS.map((c, i) => {
          const fired = i < active || reduce;
          const current = i === active - 1 && !reduce;
          return (
            <li key={c.name}>
              <div
                className={`flex items-start gap-3 rounded-xl border p-3 transition-all duration-500 ${
                  fired
                    ? dark
                      ? "border-brand-tint/50 bg-white/10"
                      : "border-brand-teal/40 bg-brand-mist/30"
                    : dark
                      ? "border-white/10 bg-white/[0.03] opacity-60"
                      : "border-brand-slate/10 bg-white opacity-60"
                } ${current ? (dark ? "shadow-glow" : "shadow-card-hover") : ""}`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-500 ${
                    fired ? "bg-brand-teal text-white" : dark ? "bg-white/10 text-white/70" : "bg-brand-mist/60 text-brand-slate/70"
                  }`}
                >
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm font-bold ${dark ? "text-white" : "text-brand-slate"}`}>
                      {i + 1}. {c.name}
                    </span>
                    {fired && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={dark ? "text-brand-tint" : "text-brand-teal"}
                      >
                        <CheckCircle2 className="h-4 w-4" aria-label="Sent" />
                      </motion.span>
                    )}
                  </div>
                  <p className={`mt-0.5 text-xs leading-relaxed ${dark ? "text-white/75" : "text-brand-slate/80"}`}>
                    {c.msg}
                  </p>
                </div>
              </div>
              {i < CHANNELS.length - 1 && (
                <div aria-hidden="true" className="ml-8 h-3 w-0.5 overflow-hidden rounded bg-brand-slate/15">
                  <motion.div
                    className="w-full bg-brand-teal"
                    animate={{ height: i < active - 1 || reduce ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <p className={`mt-4 text-xs ${dark ? "text-white/70" : "text-brand-slate/70"}`}>
        Escalates automatically until a promise-to-pay is logged.
      </p>
    </div>
  );
}
