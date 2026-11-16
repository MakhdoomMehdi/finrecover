import { Search, Wrench, BarChart2, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    description:
      "We begin with a thorough diagnostic of your portfolio, operations, and goals. No assumptions — just data-driven clarity on where the opportunities and risks lie.",
    color: "sky-mid",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Execute",
    description:
      "Our expert teams and proprietary technology platforms spring into action. Every recovery, every agent, every automation is calibrated to your specific requirements.",
    color: "orange",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Report & Optimise",
    description:
      "Real-time dashboards and weekly reporting give you full visibility. We continuously refine the approach — iterating until performance is at its peak.",
    color: "navy",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-tight">
        <SectionReveal className="text-center mb-14">
          <span className="badge bg-sky-light/20 text-sky-mid mb-4">Our Process</span>
          <h2 className="section-title mb-4">
            Simple Process,{" "}
            <span className="text-gradient">Exceptional Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We&apos;ve refined our engagement model over a decade. Getting started is straightforward; the results speak for themselves.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-light via-sky-mid to-navy mx-28 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <SectionReveal key={step.number} delay={idx * 0.15}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${
                        step.color === "sky-mid"
                          ? "bg-sky-mid text-white"
                          : step.color === "orange"
                          ? "bg-orange text-white"
                          : "bg-navy text-white"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber text-navy text-xs font-bold rounded-full flex items-center justify-center">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-3">{step.title}</h3>
                    <p className="text-navy/80 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center mt-8 md:hidden">
                      <ArrowRight className="w-6 h-6 text-sky-mid rotate-90" />
                    </div>
                  )}
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
