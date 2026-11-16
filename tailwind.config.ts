import type { Config } from "tailwindcss";
import { colors } from "./src/lib/design-tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New semantic tokens
        brand: {
          slate: colors.slate,
          teal: colors.teal,
          mist: colors.mist,
          charcoal: colors.charcoal,
          deep: colors.deep,
          tint: colors.tint,
        },
        // Legacy aliases — remapped so existing pages adopt the new palette
        navy: colors.slate,
        "sky-mid": colors.teal,
        "sky-light": colors.mist,
        orange: colors.teal,
        amber: colors.tint,
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        pageIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.15)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "page-in": "pageIn 0.45s ease-out both",
        marquee: "marquee 34s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "pulse-glow": "pulseGlow 9s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(40, 75, 99, 0.14)",
        "card-hover": "0 14px 40px -8px rgba(40, 75, 99, 0.28)",
        glow: "0 0 36px -6px rgba(163, 198, 200, 0.45)",
        "glow-lg": "0 0 56px -4px rgba(163, 198, 200, 0.65)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
