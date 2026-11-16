import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ITEMS = [
  { value: 95, suffix: "%", label: "Recovery Rate" },
  { value: 2, suffix: " Weeks", label: "Avg. Ramp Time" },
  { value: 60, suffix: "%", label: "Cost Reduction" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

/** Overlaps the bottom of the hero. Numbers count up when scrolled into view. */
export function StatsStrip() {
  return (
    <section aria-label="Key results" className="relative z-10 -mt-20 bg-brand-deep pb-4 md:-mt-24">
      <div className="container-tight">
        <SectionReveal>
          <dl className="glass-strong grid grid-cols-2 gap-px overflow-hidden rounded-3xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] md:grid-cols-4">
            {ITEMS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-brand-deep/60 px-4 py-7 text-center md:py-9">
                <dt className="mt-1.5 text-sm font-medium text-brand-tint">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </SectionReveal>
      </div>
    </section>
  );
}
