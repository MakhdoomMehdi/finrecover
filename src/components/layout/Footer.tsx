import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";
import { FOOTER_LINKS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, LINKEDIN_URL, WHATSAPP_URL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-brand-deep pb-20 text-white lg:pb-0">
      {/* Main footer */}
      <div className="container-tight py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3" aria-label={SITE_NAME}>
              <div className="relative h-14 w-52 sm:h-16 sm:w-60">
                <Image
                  src="/images/logo.webp"
                  alt={`${SITE_NAME} logo`}
                  fill
                  sizes="240px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Transforming debt recovery, business operations and digital lending through expertise, technology and trust.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-[#0A66C2] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-green-500 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-2.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-white/60 hover:text-sky-light text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-mid" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/60 hover:text-sky-light text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-mid" />
                {CONTACT_PHONE}
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-sky-mid flex-shrink-0" />
                {CONTACT_ADDRESS}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-sky-light text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-sky-light text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-display font-bold text-sm uppercase tracking-widest mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-sky-light text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    {link.label === "Data Processing Agreement" && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/65 text-xs">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy-policy" className="text-white/65 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20 text-xs">•</span>
            <Link href="/legal/terms-of-service" className="text-white/65 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20 text-xs">•</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-sky-light text-xs transition-colors flex items-center gap-1"
            >
              <LinkedInIcon className="w-3 h-3" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
