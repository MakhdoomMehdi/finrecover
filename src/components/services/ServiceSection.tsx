"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Cpu, Lightbulb, ArrowRight } from "lucide-react";
import type { Service, ServiceStat } from "@/lib/services";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimatedCheck } from "@/components/ui/AnimatedCheck";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Timeline } from "./Timeline";

const ICONS = { TrendingUp, Users, Cpu, Lightbulb };

interface ServiceSectionProps {
  service: Service;
  index: number;
  tone: "dark" | "light";
  /** Optional custom visual (replaces the stat panel), e.g. the omnichannel flow */
  visual?: ReactNode;
}

function StatBlock({ stat, dark, big }: { stat: ServiceStat; dark: boolean; big?: boolean }) {
  const isPercent = stat.suffix === "%";
  return (
    <div>
      <p
        className={`font-display font-bold tracking-tight ${big ? "text-6xl md:text-7xl" : "text-4xl"} ${
          dark ? "text-white" : "text-brand-slate"
        }`}
      >
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </p>
      <p className={`mt-1 font-medium ${big ? "text-lg" : "text-sm"} ${dark ? "text-brand-tint" : "text-brand-teal"}`}>
        {stat.label}
      </p>
      {isPercent && (
        <div
          className={`mt-4 h-2 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-brand-slate/10"}`}
          role="presentation"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${stat.value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-tint"
          />
        </div>
      )}
    </div>
  );
}

export function ServiceSection({ service, index, tone, visual }: ServiceSectionProps) {
  const dark = tone === "dark";
  const reverse = index % 2 === 1;
  const Icon = ICONS[service.icon];
  const [main, ...rest] = service.stats;

  const surface = dark
    ? "grain bg-brand-deep text-white"
    : index === 0
      ? "bg-white text-brand-slate"
      : "bg-brand-mist/25 text-brand-slate";

  return (
    <section id={service.id} aria-labelledby={`${service.id}-title`} className={`relative scroll-mt-28 overflow-hidden py-20 md:py-28 ${surface}`}>
      {dark && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 animate-pulse-glow rounded-full bg-brand-teal/30 blur-[120px]" />
          <div className="bg-grid absolute inset-0 opacity-40" />
        </div>
      )}

      <div className="container-tight relative z-[1]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <SectionReveal className={`lg:col-span-7 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <p className={`eyebrow ${dark ? "text-brand-tint" : "text-brand-teal"}`}>
              {String(index + 1).padStart(2, "0")} — Service
            </p>
            <div className="mt-4 flex items-start gap-4">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                  dark ? "bg-brand-teal text-white shadow-glow" : "bg-brand-slate text-white shadow-card"
                }`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2
                id={`${service.id}-title`}
                className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] md:text-4xl lg:text-[2.75rem]"
              >
                {service.title}
              </h2>
            </div>

            <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-brand-slate/80"}`}>
              {service.description}
            </p>

            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {service.features.map((f, i) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
                    <AnimatedCheck delay={i * 0.1} />
                  </span>
                  <span className={`text-[15px] leading-snug ${dark ? "text-white/90" : "text-brand-slate"}`}>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href={`/free-consultation?service=${service.formValue}`}
                variant={dark ? "solid-light" : "solid-dark"}
                size="md"
              >
                Discuss {service.shortTitle}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                href={`/free-consultation?service=${service.formValue}&intent=assessment`}
                variant={dark ? "outline-light" : "outline-dark"}
                size="md"
              >
                Get a Free Assessment
              </MagneticButton>
            </div>
          </SectionReveal>

          {/* Visual */}
          <SectionReveal delay={0.15} className={`lg:col-span-5 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <TiltCard tone={dark ? "dark" : "light"} innerClassName="min-h-[16rem]">
              {visual ?? (
                <div className="p-7 md:p-9">
                  <p className={`eyebrow ${dark ? "text-brand-tint" : "text-brand-teal"}`}>Headline result</p>
                  {main && (
                    <div className="mt-4">
                      <StatBlock stat={main} dark={dark} big />
                    </div>
                  )}
                  {rest.length > 0 && (
                    <div className={`mt-8 grid grid-cols-2 gap-6 border-t pt-6 ${dark ? "border-white/10" : "border-brand-slate/10"}`}>
                      {rest.map((s) => (
                        <StatBlock key={s.label} stat={s} dark={dark} />
                      ))}
                    </div>
                  )}
                  <Icon
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 ${
                      dark ? "text-white/[0.06]" : "text-brand-slate/[0.06]"
                    }`}
                  />
                </div>
              )}
            </TiltCard>
          </SectionReveal>
        </div>

        {/* Process */}
        <SectionReveal className="mt-16 md:mt-24">
          <h3 className={`eyebrow mb-8 ${dark ? "text-brand-tint" : "text-brand-teal"}`}>How it works</h3>
          <Timeline steps={service.steps} tone={tone} />
        </SectionReveal>
      </div>
    </section>
  );
}
