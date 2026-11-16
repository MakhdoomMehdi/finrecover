/**
 * Fin Recover design tokens — single source of truth.
 * Consumed by tailwind.config.ts (colors) and by components (motion).
 *
 * Brand palette (client-provided):
 *   slate    #284b63  primary / dark surfaces
 *   teal     #3c6e71  accent (money / recovery), CTAs on light surfaces
 *   mist     #d9d9d9  light neutral
 *   white    #ffffff
 *   charcoal #353535  neutral dark
 *
 * Derived shades (computed from the palette, used sparingly):
 *   deep     #1c3345  slate darkened ~30%  -> dark section backgrounds
 *   tint     #a3c6c8  teal lightened       -> text / glows ON dark surfaces
 *
 * Contrast notes (WCAG AA):
 *   white on slate      ~9.0:1   white on teal   ~5.6:1   white on deep  ~13:1
 *   slate on white      ~9.0:1   slate on tint   ~5.0:1   tint on deep   ~8.4:1
 *   Do NOT use teal text on slate/deep (too low); use tint instead.
 */
export const colors = {
  slate: "#284b63",
  teal: "#3c6e71",
  mist: "#d9d9d9",
  white: "#ffffff",
  charcoal: "#353535",
  deep: "#1c3345",
  tint: "#a3c6c8",
} as const;

export const fonts = {
  body: "Plus Jakarta Sans",
  heading: "Space Grotesk",
} as const;

export const motionTokens = {
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: { fast: 0.2, base: 0.55, slow: 0.9 },
  stagger: 0.08,
} as const;

export const radii = {
  card: "1rem", // rounded-2xl
  pill: "9999px",
} as const;
