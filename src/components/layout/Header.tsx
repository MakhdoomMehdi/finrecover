"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_NAME, type NavLink } from "@/lib/constants";

/** Parents that link somewhere (e.g. Services) get an "All …" entry as the first dropdown item. */
const NAV: NavLink[] = NAV_LINKS.map((l) =>
  l.children && l.href !== "#"
    ? { ...l, children: [{ label: `All ${l.label}`, href: l.href }, ...l.children] }
    : l
);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (link: NavLink) =>
    link.href !== "#" && (pathname === link.href || pathname.startsWith(`${link.href}/`)) ||
    !!link.children?.some((c) => pathname === c.href.split("#")[0] && c.href.split("#")[0] !== "/services");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-white/10 bg-brand-deep/80 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`container-tight flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE_NAME} — home`}>
          <div
            className={`relative transition-all duration-300 ${
              scrolled ? "h-11 w-40 sm:h-12 sm:w-44" : "h-12 w-44 sm:h-14 sm:w-52 md:h-[3.75rem] md:w-60"
            }`}
          >
            <Image
              src="/images/logo.webp"
              alt={SITE_NAME}
              fill
              priority
              sizes="(max-width: 640px) 176px, 240px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((link) => (
            <li key={link.label}>
              {link.children ? (
                <div
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenDropdown(null);
                  }}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                      isActive(link) ? "text-white" : "text-white/80"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full w-56 pt-2"
                      >
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-white py-2 shadow-card-hover">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm font-medium text-brand-slate transition-colors hover:bg-brand-mist/40 hover:text-brand-teal"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                    isActive(link) ? "text-white" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/free-consultation"
            className={`hidden items-center gap-2 rounded-xl bg-white font-bold text-brand-slate shadow-glow transition-all duration-300 hover:bg-brand-tint hover:shadow-glow-lg active:scale-95 lg:inline-flex ${
              scrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm"
            }`}
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto lg:hidden"
          >
            <ul className="container-tight space-y-1 pb-6 pt-2">
              {NAV.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={mobileExpanded === link.label}
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-3 font-medium text-white hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/free-consultation"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-brand-slate shadow-glow"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
