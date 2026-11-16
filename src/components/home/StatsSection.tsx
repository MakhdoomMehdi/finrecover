import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-navy section-padding relative overflow-hidden" aria-label="Key statistics">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full bg-sky-mid -top-20 -right-20" />
        <div className="absolute w-64 h-64 rounded-full bg-orange -bottom-10 -left-10" />
      </div>

      <div className="container-tight relative z-10">
        <SectionReveal className="text-center mb-12">
          <span className="badge bg-white/10 text-sky-light mb-4">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Numbers That Tell Our Story
          </h2>
          <p className="text-white/65 max-w-xl mx-auto">
            Proven performance across portfolios, clients, and markets.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <SectionReveal key={stat.label} delay={idx * 0.1} className="text-center">
              <div className="mb-2">
                <span className="text-4xl sm:text-5xl font-display font-bold text-amber">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/65 text-xs">{stat.description}</div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
