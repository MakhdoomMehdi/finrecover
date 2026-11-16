"use client";

import { useEffect, useState } from "react";

interface ServiceNavProps {
  items: { id: string; label: string }[];
}

/** Sticky pill switcher; highlights the service section currently in view. */
export function ServiceNav({ items }: ServiceNavProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Service sections"
      className="sticky top-14 z-30 border-b border-brand-slate/10 bg-white/85 backdrop-blur-xl md:top-16"
    >
      <div className="container-tight">
        <ul className="scrollbar-hide flex gap-2 overflow-x-auto py-3">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-brand-slate text-white"
                      : "text-brand-slate/80 hover:bg-brand-mist/50 hover:text-brand-slate"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
