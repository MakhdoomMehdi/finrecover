"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_PHONE } from "@/lib/constants";

/** Bottom-fixed conversion bar for small screens. Appears after the hero, hidden on the booking page. */
export function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/free-consultation") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-brand-deep/90 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-3">
            <Link
              href="/free-consultation"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-brand-slate shadow-glow active:scale-[0.98]"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
              aria-label="Call Fin Recover"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/30 text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
