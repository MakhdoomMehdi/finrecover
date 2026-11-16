import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/home/CTASection";
import { Shield, Lightbulb, Handshake, TrendingUp, Award, Eye } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Vision and Values",
  description:
    "Discover the mission, vision, and core values that guide every decision at Fin Recover — from client engagement to compliance and culture.",
  path: "/company/vision-and-values",
});

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with unwavering ethical standards — in every client conversation, every recovery call, and every contract. Our compliance-first approach is non-negotiable.",
    color: "sky-mid",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We challenge the status quo. Technology, process improvement, and creative problem-solving are embedded in our DNA — we don't just follow industry trends, we set them.",
    color: "amber",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "Our clients are partners, not accounts. We share in their challenges, celebrate their wins, and build relationships that extend far beyond any single engagement.",
    color: "orange",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description:
      "Good enough is never good enough. We set the highest standards for ourselves, our teams, and our outputs — then we work relentlessly to exceed them.",
    color: "navy",
  },
  {
    icon: Award,
    title: "Accountability",
    description:
      "We own our results. When something doesn't go as planned, we diagnose, learn, and fix — never make excuses. Our clients can always count on us to deliver.",
    color: "sky-mid",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Full visibility into every operation, every result, every invoice. We believe informed clients are empowered clients — and empowered clients grow with us.",
    color: "orange",
  },
];

const colorClass: Record<string, { icon: string; bg: string }> = {
  "sky-mid": { icon: "text-sky-mid", bg: "bg-sky-light/20" },
  amber: { icon: "text-navy", bg: "bg-brand-tint/30" },
  orange: { icon: "text-orange", bg: "bg-orange/10" },
  navy: { icon: "text-navy", bg: "bg-navy/10" },
};

export default function VisionValuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 relative overflow-hidden">
        <div className="container-tight relative z-10">
          <SectionReveal>
            <span className="badge bg-white/15 text-sky-light mb-5">Vision & Values</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
              Guided by Purpose,{" "}
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Anchored in Values
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Our mission, vision, and values are not aspirational slogans. They are the operating principles that govern everything we do.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="bg-gradient-to-br from-navy to-sky-mid rounded-3xl p-10 text-white h-full">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-sky-light" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  To be the most trusted and technologically advanced recovery and business operations partner for financial institutions across South Asia and the Gulf — redefining what ethical, intelligent collections looks like.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="bg-gradient-to-br from-orange to-amber rounded-3xl p-10 text-navy h-full">
                <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-navy" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
                <p className="text-navy/80 text-lg leading-relaxed">
                  To help financial businesses recover, grow, and operate with confidence — by delivering measurable results through compliance-first recovery, scalable outsourcing, and intelligent automation.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <SectionReveal className="text-center mb-14">
            <span className="badge bg-orange/10 text-orange mb-4">Our Core Values</span>
            <h2 className="section-title mb-4">
              The Principles We{" "}
              <span className="text-gradient">Never Compromise</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Six values, deeply held, consistently applied — in every client interaction, hiring decision, and business choice.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const { icon: iconColor, bg: bgColor } = colorClass[value.color];
              return (
                <SectionReveal key={value.title} delay={idx * 0.1}>
                  <div className="card-base h-full hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${bgColor}`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <h3 className="font-display font-bold text-navy text-xl mb-3">{value.title}</h3>
                    <p className="text-navy/80 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
