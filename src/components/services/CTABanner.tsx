import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CONTACT_PHONE } from "@/lib/constants";

export function CTABanner() {
  return (
    <section aria-labelledby="cta-title" className="grain relative isolate overflow-hidden bg-hero py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-20 top-0 h-80 w-80 animate-pulse-glow rounded-full bg-brand-teal/60 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-96 w-96 animate-pulse-glow rounded-full bg-brand-tint/30 blur-[110px] [animation-delay:3s]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-white/10 blur-[90px] [animation-delay:6s]" />
        <div className="bg-grid absolute inset-0 opacity-50" />
      </div>

      <div className="container-tight">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-title"
            className="font-display text-4xl font-bold tracking-[-0.035em] text-white md:text-6xl"
          >
            Let&apos;s Discuss Your <span className="text-gradient-animated">Recovery Strategy</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Whether you&apos;re battling a delinquent portfolio, need to scale operations or want to automate
            collections, we have the solution.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/free-consultation" variant="solid-light">
              Get a Free Consultation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} variant="outline-light">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Us Now
            </MagneticButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
