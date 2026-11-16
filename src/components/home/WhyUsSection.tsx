import { Shield, Cpu, BarChart3, Globe, Award, Handshake } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SITE_NAME } from "@/lib/constants";

const pillars = [
  {
    icon: Shield,
    title: "Compliance-First Approach",
    description:
      "Every recovery operation is conducted within strict regulatory frameworks. We protect your business from legal risk while maximising recovery outcomes.",
    color: "sky-mid",
  },
  {
    icon: Cpu,
    title: "Technology-Driven",
    description:
      "AI-powered workflows, predictive scoring, and omnichannel automation replace manual effort — delivering faster results at a fraction of the cost.",
    color: "orange",
  },
  {
    icon: BarChart3,
    title: "End-to-End Coverage",
    description:
      "From day-one delinquency management to late-stage legal recovery, our full-service model means no gaps, no handoffs, no excuses.",
    color: "navy",
  },
  {
    icon: Globe,
    title: "Scalable Operations",
    description:
      "Whether you need 10 agents or 200, we scale your operations within days — not months — with zero compromise on quality or compliance.",
    color: "sky-mid",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "10+ years of measurable results. 95% recovery rates. 200+ satisfied clients. Our reputation speaks for itself — and our clients return.",
    color: "amber",
  },
  {
    icon: Handshake,
    title: "Partnership, Not Vendor",
    description:
      "We embed ourselves in your operations as a true partner — sharing your goals, your pressures, and your victories. We succeed when you succeed.",
    color: "orange",
  },
];

const colorClass: Record<string, string> = {
  "sky-mid": "bg-sky-light/30 text-sky-mid",
  "orange": "bg-orange/10 text-orange",
  "navy": "bg-navy/10 text-navy",
  "amber": "bg-brand-tint/30 text-navy",
};

const borderClass: Record<string, string> = {
  "sky-mid": "group-hover:border-sky-mid",
  "orange": "group-hover:border-orange",
  "navy": "group-hover:border-navy",
  "amber": "group-hover:border-amber",
};

export function WhyUsSection() {
  return (
    <section className="section-padding bg-gray-50" id="why-us">
      <div className="container-tight">
        <SectionReveal className="text-center mb-14">
          <span className="badge bg-orange/10 text-orange mb-4">Why {SITE_NAME}</span>
          <h2 className="section-title mb-4">
            The Competitive Edge Your{" "}
            <span className="text-gradient">Business Deserves</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine deep sector expertise with cutting-edge technology to deliver results that traditional recovery agencies simply cannot match.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <SectionReveal key={pillar.title} delay={idx * 0.1}>
                <div className={`group card-base border-2 border-transparent transition-all duration-300 hover:-translate-y-1 ${borderClass[pillar.color]}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorClass[pillar.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-lg mb-3">{pillar.title}</h3>
                  <p className="text-navy/80 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
