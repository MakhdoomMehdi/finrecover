import type { ReactNode } from "react";
import {
  TrendingUp,
  Users,
  Cpu,
  Lightbulb,
  ShieldCheck,
  LineChart,
  Layers,
  Languages,
  ArrowUpRight,
} from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface TileProps {
  icon: ReactNode;
  title: string;
  text: string;
  href?: string;
  className?: string;
  feature?: boolean;
  children?: ReactNode;
}

function Tile({ icon, title, text, href, className = "", feature, children }: TileProps) {
  const surface = feature
    ? "bg-brand-slate text-white border-brand-slate hover:border-brand-tint/60"
    : "bg-white text-brand-slate border-brand-slate/10 hover:border-brand-teal/50";

  const body = (
    <>
      <div className="flex items-start justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
            feature ? "bg-brand-teal text-white" : "bg-brand-slate/10 text-brand-slate"
          }`}
        >
          {icon}
        </span>
        {href && (
          <ArrowUpRight
            aria-hidden="true"
            className={`h-5 w-5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${
              feature ? "text-brand-tint" : "text-brand-teal"
            }`}
          />
        )}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold tracking-tight">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${feature ? "text-white/80" : "text-brand-slate/80"}`}>{text}</p>
      {children}
    </>
  );

  const classes = `group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${surface} ${className}`;

  return href ? (
    <a href={href} className={classes}>
      {body}
    </a>
  ) : (
    <div className={classes}>{body}</div>
  );
}

const BARS = [28, 42, 38, 58, 72, 95];

export function BentoGrid() {
  const ic = "h-6 w-6";
  return (
    <section aria-labelledby="bento-title" className="bg-white py-20 md:py-28">
      <div className="container-tight">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-teal">Why Fin Recover</p>
          <h2
            id="bento-title"
            className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] text-brand-slate md:text-5xl"
          >
            One partner. Four ways to win.
          </h2>
          <p className="mt-4 text-lg text-brand-slate/80">
            Every service is built on the same foundations: compliance, visibility and speed.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-14">
          <div className="grid auto-rows-[minmax(11rem,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Tile
              feature
              href="#loan-recovery"
              className="md:col-span-2 lg:row-span-2"
              icon={<TrendingUp className={ic} aria-hidden="true" />}
              title="Loan Recovery & Debt Handling"
              text="From early-stage collections to legal escalation, maximising recovery while preserving client relationships."
            >
              <div className="mt-auto flex h-32 items-end gap-2 pt-6" aria-hidden="true">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-brand-teal to-brand-tint transition-transform duration-500 group-hover:scale-y-110"
                    style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
                  />
                ))}
              </div>
            </Tile>

            <Tile
              href="#workforce-outsourcing"
              icon={<Users className={ic} aria-hidden="true" />}
              title="Workforce Outsourcing"
              text="Trained contact-centre and back-office talent, live in about 2 weeks."
            />
            <Tile
              href="#automated-crm"
              icon={<Cpu className={ic} aria-hidden="true" />}
              title="Automated CRM"
              text="SMS, WhatsApp, email and IVR workflows with promise-to-pay tracking."
            />
            <Tile
              href="#consultancy"
              className="md:col-span-2"
              icon={<Lightbulb className={ic} aria-hidden="true" />}
              title="Business Consultancy"
              text="Sector expertise, regulatory insight and hands-on implementation, not just a report."
            />

            <Tile
              icon={<ShieldCheck className={ic} aria-hidden="true" />}
              title="Compliance-first"
              text="Every contact follows strict regulatory standards."
            />
            <Tile
              icon={<LineChart className={ic} aria-hidden="true" />}
              title="Real-time dashboards"
              text="Live recovery data instead of month-end surprises."
            />
            <Tile
              icon={<Layers className={ic} aria-hidden="true" />}
              title="Omnichannel"
              text="Reach debtors on the channel they actually respond to."
            />
            <Tile
              icon={<Languages className={ic} aria-hidden="true" />}
              title="Multilingual"
              text="Agents who speak your customers' language."
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
