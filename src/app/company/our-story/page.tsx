import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/home/CTASection";
import { Target, Heart, Rocket } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Story",
  description:
    "Learn how Fin Recover was founded and how we grew into a leading debt recovery, BPO and CRM solutions provider across Pakistan and beyond.",
  path: "/company/our-story",
});

const timeline = [
  {
    year: "2014",
    title: "Founded in Lahore",
    description:
      "Fin Recover was established with a simple but powerful vision: to bring ethical, technology-enabled debt recovery to the financial sector in Pakistan. We launched with a small team of five and a big promise to our first clients.",
    icon: Rocket,
  },
  {
    year: "2016",
    title: "BPO Division Launched",
    description:
      "Recognising the growing demand for managed contact-centre services, we launched our Workforce Outsourcing division. Within 18 months, we had grown to a team of 50 and were serving three major financial institutions.",
    icon: Target,
  },
  {
    year: "2019",
    title: "Technology Platform Developed",
    description:
      "We built our first proprietary automated recovery platform — an omnichannel CRM and workflow engine tailored for digital lenders. It reduced recovery costs for our clients by an average of 60% in the first year.",
    icon: Heart,
  },
  {
    year: "2021",
    title: "Regional Expansion",
    description:
      "Demand from regional clients led to our expansion beyond Pakistan. We now serve clients across South Asia and the Gulf, with operations spanning multiple jurisdictions and regulatory frameworks.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "200+ Clients & Counting",
    description:
      "Today, Fin Recover employs 200+ professionals and has recovered over USD 50 million for clients across banking, microfinance, fintech, leasing, and insurance sectors. Our journey has just begun.",
    icon: Target,
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 relative overflow-hidden">
        <div className="container-tight relative z-10">
          <SectionReveal>
            <span className="badge bg-white/15 text-sky-light mb-5">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
              Built on Purpose,{" "}
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Driven by Results
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              From a five-person Lahore startup to a regional leader in debt recovery and business operations — this is the story of Fin Recover.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission statement */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <p className="text-2xl md:text-3xl font-display font-medium text-navy leading-relaxed">
                &ldquo;We exist to help financial businesses recover what is rightfully theirs — ethically, efficiently, and at scale.&rdquo;
              </p>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-orange to-amber mx-auto rounded-full" />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Story body */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="section-title mb-6">
                Where It All Began
              </h2>
              <div className="space-y-5 text-navy/80 leading-relaxed">
                <p>
                  Fin Recover was born from a frustration. Our founder, having spent years inside a major bank&apos;s collections department, saw first-hand how legacy processes, lack of technology, and poor debtor communication strategies were costing institutions millions in unrecovered debt.
                </p>
                <p>
                  The recovery industry was stuck in the past — aggressive phone tactics, paper-heavy processes, and zero use of data. Meanwhile, digital lending was exploding, creating entirely new portfolios that the old-guard agencies simply didn&apos;t understand.
                </p>
                <p>
                  We launched Fin Recover with a commitment to do things differently: compliance at the core, technology as an enabler, and genuine respect for both lenders and borrowers as the foundation of every engagement.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <h2 className="section-title mb-6">
                How We Grew
              </h2>
              <div className="space-y-5 text-navy/80 leading-relaxed">
                <p>
                  Growth came through results. Our first clients saw recovery rates above 90% — a figure unheard of in an industry where 60-70% was considered acceptable. Word spread quickly.
                </p>
                <p>
                  We reinvested relentlessly in technology. While competitors were still sending physical demand notices, we were deploying SMS automation, WhatsApp collections, and predictive delinquency models. The gap widened.
                </p>
                <p>
                  Today, our BPO division alone employs hundreds of trained professionals. Our CRM platform powers recovery operations for some of Pakistan&apos;s fastest-growing digital lenders. And our consultancy practice advises institutions that want to build world-class collections capabilities in-house.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionReveal className="text-center mb-14">
            <h2 className="section-title mb-4">Our Journey</h2>
            <p className="section-subtitle mx-auto">A decade of growth, innovation, and impact.</p>
          </SectionReveal>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-mid via-navy to-orange" />

            <div className="space-y-10">
              {timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <SectionReveal key={item.year} delay={idx * 0.1}>
                    <div className="flex gap-6 pl-20 relative">
                      {/* Circle on line */}
                      <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-white border-2 border-sky-mid flex items-center justify-center -translate-x-1/2 shadow-md">
                        <Icon className="w-4 h-4 text-sky-mid" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="badge bg-orange/10 text-orange text-xs">{item.year}</span>
                          <h3 className="font-display font-bold text-navy text-lg">{item.title}</h3>
                        </div>
                        <p className="text-navy/80 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
