import { ExternalLink } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { LINKEDIN_URL, SITE_NAME } from "@/lib/constants";

export function LinkedInStrip() {
  return (
    <section className="bg-white py-10 border-t border-sky-light/20">
      <div className="container-tight">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center">
              <LinkedInIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-navy text-sm">Follow us on LinkedIn</p>
              <p className="text-navy/80 text-xs">Stay updated with industry insights, company news, and career opportunities.</p>
            </div>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#004182] transition-colors duration-200 text-sm flex-shrink-0"
          >
            <LinkedInIcon className="w-4 h-4" />
            {SITE_NAME}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
