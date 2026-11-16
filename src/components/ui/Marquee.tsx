import type { ReactNode } from "react";

interface MarqueeProps {
  items: { icon: ReactNode; label: string }[];
  label?: string;
}

/** Pure-CSS infinite marquee. Pauses on hover; stops under reduced motion (see globals.css). */
export function Marquee({ items, label = "Trust badges" }: MarqueeProps) {
  const group = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item.label}
          className="glass flex items-center gap-3 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-white"
        >
          <span className="text-brand-tint">{item.icon}</span>
          {item.label}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      role="region"
      aria-label={label}
      className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
