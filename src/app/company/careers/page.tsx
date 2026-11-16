import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Users, TrendingUp, Heart, Zap } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Fin Recover — a fast-growing team of professionals in debt recovery, BPO, technology, and consultancy. Explore current openings.",
  path: "/company/careers",
});

const openRoles = [
  {
    title: "Senior Recovery Agent",
    department: "Loan Recovery",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description: "Drive outbound recovery campaigns for financial institution clients. Requires 2+ years collections experience.",
  },
  {
    title: "Team Leader — BPO Operations",
    department: "Workforce Outsourcing",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description: "Lead and mentor a team of 15-20 contact-centre agents. Responsible for SLA adherence, QA scores, and performance reporting.",
  },
  {
    title: "CRM Developer",
    department: "Technology",
    location: "Lahore / Remote",
    type: "Full-time",
    description: "Build and maintain our proprietary automated recovery platform. Node.js, React, and PostgreSQL experience required.",
  },
  {
    title: "Compliance Analyst",
    department: "Legal & Compliance",
    location: "Lahore, Pakistan",
    type: "Full-time",
    description: "Monitor regulatory changes, review collection scripts, and ensure operational compliance with SECP and SBP guidelines.",
  },
  {
    title: "Business Consultant",
    department: "Consultancy",
    location: "Lahore / Hybrid",
    type: "Full-time",
    description: "Advise financial clients on portfolio strategy, operational transformation, and digital collections capabilities.",
  },
];

const perks = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear progression paths and regular performance reviews. We promote from within.",
    color: "sky-mid",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    description: "Comprehensive medical coverage for you and your dependents.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Learning & Development",
    description: "Access to training programmes, workshops, and sponsored certifications.",
    color: "amber",
  },
  {
    icon: Users,
    title: "Great Culture",
    description: "A collaborative, inclusive workplace where your ideas are heard and valued.",
    color: "navy",
  },
];

const colorClass: Record<string, string> = {
  "sky-mid": "bg-sky-light/20 text-sky-mid",
  orange: "bg-orange/10 text-orange",
  amber: "bg-brand-tint/30 text-navy",
  navy: "bg-navy/10 text-navy",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 relative overflow-hidden">
        <div className="container-tight relative z-10">
          <SectionReveal>
            <span className="badge bg-white/15 text-sky-light mb-5">Join Our Team</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
              Build Your Career With{" "}
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Purpose
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Join a fast-growing team at the intersection of finance, technology, and operations. Meaningful work, real impact, and genuine growth.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <span className="badge bg-orange/10 text-orange mb-5">Our Culture</span>
              <h2 className="section-title mb-6">
                Where Talented People{" "}
                <span className="text-gradient">Do Their Best Work</span>
              </h2>
              <p className="text-navy/80 leading-relaxed mb-5">
                At Fin Recover, we believe the quality of our team is our greatest competitive advantage. We hire for potential, train rigorously, and create conditions for people to grow fast.
              </p>
              <p className="text-navy/80 leading-relaxed mb-8">
                Our culture is performance-driven but human-centred. We celebrate wins together, tackle challenges as one team, and make sure every person understands how their work contributes to client outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <div key={perk.title} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass[perk.color]}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">{perk.title}</div>
                        <div className="text-navy/80 text-xs">{perk.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-sky-mid/20" />
                <h3 className="font-display font-bold text-2xl mb-3 text-white">200+</h3>
                <p className="text-sky-light mb-8">Professionals across Pakistan and the region</p>
                <div className="space-y-4">
                  {["Fast career progression", "Best-in-class training", "Meaningful client impact", "Inclusive team culture", "Competitive compensation"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <SectionReveal className="mb-10">
            <span className="badge bg-sky-light/20 text-sky-mid mb-4">Open Positions</span>
            <h2 className="section-title mb-4">Current Openings</h2>
            <p className="section-subtitle">
              We&apos;re always looking for exceptional people. Even if no current role matches, we welcome speculative applications.
            </p>
          </SectionReveal>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <SectionReveal key={role.title} delay={idx * 0.08}>
                <div className="card-base hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="badge bg-sky-light/20 text-sky-mid text-xs">{role.department}</span>
                        <div className="flex items-center gap-1 text-navy/80 text-xs">
                          <MapPin className="w-3 h-3" /> {role.location}
                        </div>
                        <div className="flex items-center gap-1 text-navy/80 text-xs">
                          <Clock className="w-3 h-3" /> {role.type}
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-navy text-lg mb-1">{role.title}</h3>
                      <p className="text-navy/80 text-sm">{role.description}</p>
                    </div>
                    <Link
                      href={`/company/contact?role=${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-sky-mid transition-colors text-sm flex-shrink-0 group-hover:bg-sky-mid"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-10 text-center">
            <div className="card-base border-2 border-dashed border-sky-light max-w-xl mx-auto text-center">
              <p className="text-navy font-semibold mb-2">Don&apos;t see a role that fits?</p>
              <p className="text-navy/80 text-sm mb-5">
                We&apos;re always keen to hear from talented professionals. Send us your CV and we&apos;ll get in touch when the right opportunity arises.
              </p>
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 bg-orange text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-amber hover:text-navy transition-all text-sm"
              >
                Send Speculative Application <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
