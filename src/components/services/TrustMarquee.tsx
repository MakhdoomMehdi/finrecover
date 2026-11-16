import { ShieldCheck, Lock, Languages, LineChart } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";

const BADGES = [
  { icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />, label: "Compliance-First" },
  { icon: <Lock className="h-5 w-5" aria-hidden="true" />, label: "Data Protection" },
  { icon: <Languages className="h-5 w-5" aria-hidden="true" />, label: "Multilingual" },
  { icon: <LineChart className="h-5 w-5" aria-hidden="true" />, label: "Real-Time Reporting" },
];

export function TrustMarquee() {
  return (
    <section aria-label="Our commitments" className="bg-brand-deep py-12 md:py-14">
      <Marquee items={[...BADGES, ...BADGES]} label="What we stand for" />
    </section>
  );
}
