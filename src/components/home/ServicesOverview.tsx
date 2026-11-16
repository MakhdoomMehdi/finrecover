import Link from "next/link";
import { TrendingUp, Users, Cpu, Lightbulb, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  Cpu,
  Lightbulb,
};

const services = [
  {
    id: "loan-recovery",
    icon: "TrendingUp",
    title: "Loan Recovery & Debt Handling",
    description:
      "Expert end-to-end debt recovery — from early-stage collections to complex legal escalations — maximising recovery rates while preserving your client relationships.",
    color: "sky-mid",
    href: "/services#loan-recovery",
    badge: "95% Recovery Rate",
    badgeColor: "bg-sky-light/20 text-sky-mid",
  },
  {
    id: "workforce-outsourcing",
    icon: "Users",
    title: "Workforce Outsourcing (BPO)",
    description:
      "Scalable, trained contact-centre and back-office talent on demand. We handle hiring, training, QA and operations so you focus on growth.",
    color: "orange",
    href: "/services#workforce-outsourcing",
    badge: "Ramp in 2 Weeks",
    badgeColor: "bg-orange/10 text-orange",
  },
  {
    id: "automated-crm",
    icon: "Cpu",
    title: "Automated Recovery & CRM",
    description:
      "Purpose-built automation for digital lenders. Omnichannel workflows, predictive scoring, and seamless CRM integration reduce costs by up to 60%.",
    color: "navy",
    href: "/services#automated-crm",
    badge: "60% Cost Reduction",
    badgeColor: "bg-navy/10 text-navy",
  },
  {
    id: "consultancy",
    icon: "Lightbulb",
    title: "Business Consultancy",
    description:
      "Strategic advisory for financial institutions navigating complex recovery landscapes — from portfolio restructuring to regulatory compliance and tech road-mapping.",
    color: "amber",
    href: "/services#consultancy",
    badge: "10+ Years Expertise",
    badgeColor: "bg-brand-tint/30 text-navy",
  },
];

const colorMap: Record<string, string> = {
  "sky-mid": "bg-sky-mid/10 text-sky-mid group-hover:bg-sky-mid group-hover:text-white",
  "orange": "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white",
  "navy": "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white",
  "amber": "bg-brand-tint/30 text-navy group-hover:bg-amber group-hover:text-navy",
};

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white" id="services-overview">
      <div className="container-tight">
        <SectionReveal className="text-center mb-14">
          <span className="badge bg-sky-light/20 text-sky-mid mb-4">What We Do</span>
          <h2 className="section-title mb-4">
            End-to-End Recovery &{" "}
            <span className="text-gradient">Operations Solutions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From portfolio recovery to outsourced workforce and intelligent CRM automation — we provide every layer 
            your financial business needs to operate at peak performance.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <SectionReveal key={service.id} delay={idx * 0.1}>
                <Link href={service.href} className="group block card-base h-full hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colorMap[service.color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="text-navy font-display font-bold text-lg leading-tight">
                          {service.title}
                        </h3>
                        <span className={`badge text-xs ${service.badgeColor}`}>{service.badge}</span>
                      </div>
                      <p className="text-navy/80 text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-1 text-sky-mid text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold border-2 border-navy px-8 py-3 rounded-xl hover:bg-navy hover:text-white transition-all duration-200 active:scale-95"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
