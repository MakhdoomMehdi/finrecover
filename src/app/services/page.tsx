import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import { getServiceSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { ServicesHero } from "@/components/services/ServicesHero";
import { StatsStrip } from "@/components/services/StatsStrip";
import { TrustMarquee } from "@/components/services/TrustMarquee";
import { ServiceNav } from "@/components/services/ServiceNav";
import { ServiceSection } from "@/components/services/ServiceSection";
import { OmnichannelFlow } from "@/components/services/OmnichannelFlow";
import { BentoGrid } from "@/components/services/BentoGrid";
import { CTABanner } from "@/components/services/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Loan Recovery, BPO, Automated CRM & Consultancy",
  description:
    "Turn unpaid loans into recovered revenue. Fin Recover offers loan recovery, workforce outsourcing (BPO), automated recovery & CRM systems for digital lenders, and strategic consultancy.",
  path: "/services",
});

// Alternating light / dark sections for contrast
const TONES = ["light", "dark", "light", "dark"] as const;

export default function ServicesPage() {
  const schemas = SERVICES.map((s) => getServiceSchema(s));

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ServicesHero />
      <StatsStrip />
      <TrustMarquee />

      <div id="services" className="scroll-mt-16">
        <ServiceNav items={SERVICES.map((s) => ({ id: s.id, label: s.shortTitle }))} />
        {SERVICES.map((service, i) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={i}
            tone={TONES[i]}
            visual={service.id === "automated-crm" ? <OmnichannelFlow tone={TONES[i]} /> : undefined}
          />
        ))}
      </div>

      <BentoGrid />
      <CTABanner />
    </>
  );
}
