"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export type MagneticVariant = "solid-light" | "solid-dark" | "outline-light" | "outline-dark";

const VARIANTS: Record<MagneticVariant, string> = {
  "solid-light": "bg-white text-brand-slate shadow-glow hover:bg-brand-tint hover:shadow-glow-lg",
  "solid-dark": "bg-brand-slate text-white shadow-card hover:bg-brand-teal hover:shadow-card-hover",
  "outline-light": "border border-white/40 bg-white/5 text-white backdrop-blur hover:bg-white/15",
  "outline-dark": "border border-brand-slate/35 text-brand-slate hover:bg-brand-slate hover:text-white",
};

const SIZES = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: MagneticVariant;
  size?: keyof typeof SIZES;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

/** CTA with a magnetic hover pull, glow, and press feedback. */
export function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid-light",
  size = "lg",
  className = "",
  external,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.97] ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const isExternal = external ?? (!!href && /^(https?:|tel:|mailto:)/.test(href));

  let inner: ReactNode;
  if (href && isExternal) {
    inner = (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  } else if (href) {
    inner = (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  } else {
    inner = (
      <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
