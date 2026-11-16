import type { Metadata } from "next";
import { Suspense } from "react";
import { ClipboardList, Map, Calculator, FileCheck, Mail, Phone, MapPin, MessageCircle, Quote } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, WHATSAPP_URL, TESTIMONIALS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ConsultationForm, ConsultationFormSkeleton } from "@/components/consultation/ConsultationForm";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute strategy call with Fin Recover. We'll assess your portfolio and show you where the recoverable money is. No obligation.",
  path: "/free-consultation",
});

const DELIVERABLES = [
  { icon: ClipboardList, title: "Portfolio snapshot", text: "A quick read on age, risk tiers and recoverable value." },
  { icon: Map, title: "Recovery roadmap", text: "A clear, step-by-step plan tailored to your accounts." },
  { icon: Calculator, title: "Cost-saving estimate", text: "What automation and outsourcing could save you." },
  { icon: FileCheck, title: "Compliance check", text: "A review of your collections against regulatory standards." },
];

const TRUST = [
  { value: 95, suffix: "%", label: "Recovery Rate" },
  { value: 24, suffix: "h", label: "Response time" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

// Placeholder quote; swap in a real, approved client testimonial before launch.
const QUOTE = TESTIMONIALS[0];

export default function FreeConsultationPage() {
  const tel = `tel:${CONTACT_PHONE.replace(/\s/g, "")}`;

  return (
    <section aria-labelledby="consult-title" className="grain relative isolate overflow-hidden bg-hero pb-24 pt-28 md:pb-32 md:pt-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-24 top-20 h-96 w-96 animate-pulse-glow rounded-full bg-brand-teal/40 blur-[110px]" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 animate-pulse-glow rounded-full bg-brand-tint/20 blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="container-tight grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Left: pitch */}
        <div className="lg:col-span-6">
          <SectionReveal>
            <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-brand-tint" aria-hidden="true" />
              Free 30-minute strategy call
            </p>
            <h1
              id="consult-title"
              className="mt-6 font-display text-5xl font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl"
            >
              Let&apos;s <span className="text-gradient-animated">Recover</span> What&apos;s Yours.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Book a free 30-minute strategy call. We&apos;ll assess your portfolio and show you where the recoverable
              money is. No obligation.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mt-10">
            <h2 className="eyebrow text-brand-tint">What you&apos;ll get</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {DELIVERABLES.map(({ icon: Icon, title, text }) => (
                <li key={title} className="glass flex items-start gap-3 rounded-2xl p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-white">{title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/75">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.15} className="mt-10">
            <dl className="grid grid-cols-3 gap-3">
              {TRUST.map((t) => (
                <div key={t.label} className="glass flex flex-col-reverse rounded-2xl px-3 py-4 text-center">
                  <dt className="mt-1 text-xs font-medium text-brand-tint sm:text-sm">{t.label}</dt>
                  <dd className="font-display text-3xl font-bold text-white">
                    <AnimatedCounter value={t.value} suffix={t.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </SectionReveal>

          <SectionReveal delay={0.2} className="mt-10">
            <figure className="glass relative rounded-2xl p-6">
              <Quote className="absolute right-5 top-5 h-8 w-8 text-white/15" aria-hidden="true" />
              <blockquote className="text-[15px] leading-relaxed text-white/90">&ldquo;{QUOTE.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand-tint">
                {QUOTE.author}, {QUOTE.company}
              </figcaption>
            </figure>
          </SectionReveal>

          <SectionReveal delay={0.25} className="mt-10">
            <h2 className="eyebrow text-brand-tint">Prefer to talk now?</h2>
            <ul className="mt-5 space-y-3 text-white">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-brand-tint">
                  <Mail className="h-5 w-5 text-brand-tint" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={tel} className="flex items-center gap-3 hover:text-brand-tint">
                  <Phone className="h-5 w-5 text-brand-tint" aria-hidden="true" />
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-tint" aria-hidden="true" />
                {CONTACT_ADDRESS}
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </SectionReveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-6">
          <SectionReveal delay={0.1}>
            <Suspense fallback={<ConsultationFormSkeleton />}>
              <ConsultationForm />
            </Suspense>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
