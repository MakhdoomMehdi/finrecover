import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { buildMetadata } from "@/lib/metadata";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CTASection } from "@/components/home/CTASection";
import { CEO_LINKEDIN_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Leadership",
  description:
    "Meet the leadership team behind Fin Recover — experienced professionals driving innovation in debt recovery, BPO, and financial services.",
  path: "/company/leadership",
});

const leadershipTeam = [
  {
    name: "Wasif Ali Khan",
    title: "Founder & CEO",
    bio: "With deep expertise in financial services, collections, and business operations, Wasif Ali Khan founded Fin Recover with a clear mission: to bring ethical, technology-enabled debt recovery and BPO excellence to businesses across Pakistan and beyond. He combines regulatory insight with a relentless focus on results — building a firm that is trusted by lenders, respected by clients, and feared by delinquent portfolios.",
    image: "/images/ceo.webp",
    linkedin: CEO_LINKEDIN_URL,
    email: "wasifalikhanjadoon@gmail.com",
    whatsapp: "https://wa.me/923185417337",
    isFounder: true,
  },
];

const advisors = [
  {
    initials: "COO",
    name: "Chief Operating Officer",
    title: "Head of BPO & Operations",
    bio: "Oversees day-to-day operations across all client accounts, the BPO division, and quality assurance. 10+ years in contact-centre management.",
  },
  {
    initials: "CTO",
    name: "Chief Technology Officer",
    title: "Head of Technology & CRM",
    bio: "Architect of our proprietary automated recovery platform. Leads all technology, integrations, and product development initiatives.",
  },
  {
    initials: "CCO",
    name: "Chief Compliance Officer",
    title: "Head of Legal & Compliance",
    bio: "Ensures all recovery operations adhere to local and international regulatory frameworks. Former regulatory official with 12 years of compliance experience.",
  },
  {
    initials: "CSO",
    name: "Chief Strategy Officer",
    title: "Head of Consultancy",
    bio: "Leads the consultancy practice. Advises financial institutions on portfolio strategy, operational efficiency, and digital transformation road-maps.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-20 relative overflow-hidden">
        <div className="container-tight relative z-10">
          <SectionReveal>
            <span className="badge bg-white/15 text-sky-light mb-5">Our Team</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 max-w-3xl leading-tight">
              Leadership That{" "}
              <span className="bg-gradient-to-r from-amber to-white bg-clip-text text-transparent">
                Delivers
              </span>
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Experienced professionals with deep sector expertise, united by a commitment to ethical, technology-driven excellence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CEO Feature */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          <SectionReveal className="text-center mb-10">
            <span className="badge bg-sky-light/20 text-sky-mid mb-4">Founder & Leadership</span>
            <h2 className="section-title mb-4">Meet the Team</h2>
          </SectionReveal>

          {leadershipTeam.map((leader) => (
            <SectionReveal key={leader.name}>
              <div className="bg-gradient-to-br from-navy/5 to-sky-light/10 rounded-3xl p-8 md:p-12 border border-sky-light/20">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} — ${leader.title}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {leader.isFounder && (
                      <div className="mt-3 flex justify-center">
                        <span className="badge bg-orange/10 text-orange text-xs">Founder</span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-3xl font-display font-bold text-navy mb-1">{leader.name}</h3>
                      <p className="text-sky-mid font-semibold text-sm uppercase tracking-wider">{leader.title}</p>
                    </div>
                    <p className="text-navy/80 text-lg leading-relaxed mb-8">{leader.bio}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-[#004182] transition-colors text-sm"
                      >
                        <LinkedInIcon className="w-4 h-4" /> LinkedIn
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-2 bg-navy/10 text-navy font-semibold px-5 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" /> Email
                      </a>
                      <a
                        href={leader.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors text-sm"
                      >
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Leadership team grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-tight">
          <SectionReveal className="text-center mb-10">
            <h2 className="section-title mb-4">Senior Leadership</h2>
            <p className="section-subtitle mx-auto">
              A team of experienced professionals across operations, technology, compliance, and strategy.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((person, idx) => (
              <SectionReveal key={person.initials} delay={idx * 0.1}>
                <div className="card-base text-center hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-mid to-navy text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                    {person.initials}
                  </div>
                  <h3 className="font-display font-bold text-navy text-sm mb-1">{person.name}</h3>
                  <p className="text-sky-mid text-xs font-semibold uppercase tracking-wide mb-3">{person.title}</p>
                  <p className="text-navy/80 text-xs leading-relaxed">{person.bio}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
