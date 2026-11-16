"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "dark" | "light";
  maxTilt?: number;
}

/**
 * Glass card with 3D tilt and a border that glows where the cursor is.
 * The 1px outer wrapper paints the (cursor-following) gradient border.
 */
export function TiltCard({
  children,
  className = "",
  innerClassName = "",
  tone = "dark",
  maxTilt = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 170, damping: 18 });
  const sry = useSpring(ry, { stiffness: 170, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    el.style.setProperty("--mx", `${px}px`);
    el.style.setProperty("--my", `${py}px`);
    if (!reduce && e.pointerType === "mouse") {
      ry.set((px / r.width - 0.5) * maxTilt * 2);
      rx.set((0.5 - py / r.height) * maxTilt * 2);
    }
  };

  const onLeave = () => {
    setHover(false);
    rx.set(0);
    ry.set(0);
  };

  const dark = tone === "dark";
  const border = hover
    ? `radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(163,198,200,0.95), rgba(60,110,113,0.35) 45%, transparent 75%)`
    : dark
      ? "rgba(255,255,255,0.12)"
      : "rgba(40,75,99,0.14)";

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000, background: border }}
      className={`relative rounded-2xl p-px transition-shadow duration-300 ${hover ? (dark ? "shadow-glow" : "shadow-card-hover") : ""} ${className}`}
    >
      <div
        className={`relative h-full overflow-hidden rounded-[15px] ${
          dark ? "bg-brand-deep/90 text-white backdrop-blur-xl" : "bg-white text-brand-slate"
        } ${innerClassName}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: hover ? 1 : 0,
            background: dark
              ? "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(163,198,200,0.14), transparent 60%)"
              : "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(60,110,113,0.09), transparent 60%)",
          }}
        />
        <div className="relative">{children}</div>
      </div>
    </motion.div>
  );
}
