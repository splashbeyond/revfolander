import * as React from "react";
import { cn } from "@/lib/cn";

type AuroraProps = {
  /** "hero" = larger, more visible; "ambient" = lower opacity for sub-sections; "intense" = full final-CTA strength. */
  variant?: "hero" | "ambient" | "intense";
  className?: string;
};

const variantOpacity: Record<NonNullable<AuroraProps["variant"]>, number> = {
  hero: 0.4,
  ambient: 0.25,
  intense: 0.5,
};

/**
 * The aurora background system. Three blurred radial blobs that drift
 * slowly. Two of them are hidden under 768px to honor the brand rule of
 * "one signature aurora per viewport" on mobile. Wrapped behind content
 * with z-0 — the consuming section should set its content to z-10+.
 *
 * All animations are CSS keyframes (auroraDriftA/B/C in globals.css) so
 * the layer can render purely on the compositor thread. No JS hot path.
 *
 * Honors `prefers-reduced-motion: reduce` via the global CSS rule that
 * collapses animation duration to ~0.
 */
export function Aurora({ variant = "hero", className }: AuroraProps) {
  const baseOpacity = variantOpacity[variant];
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden z-0", className)}
    >
      <div
        className="absolute -left-[8%] -top-[12%] h-[520px] w-[520px] rounded-full mix-blend-screen will-change-transform md:h-[640px] md:w-[640px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-aurora-1) 0%, rgba(255,107,157,0) 60%)",
          filter: "blur(90px)",
          opacity: baseOpacity * 0.85,
          animation: "auroraDriftA 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-[12%] top-[8%] hidden h-[640px] w-[640px] rounded-full mix-blend-screen will-change-transform md:block"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--color-aurora-3) 0%, rgba(91,141,239,0) 60%)",
          filter: "blur(110px)",
          opacity: baseOpacity,
          animation: "auroraDriftB 22s ease-in-out infinite",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute -bottom-[18%] left-[30%] hidden h-[640px] w-[640px] rounded-full mix-blend-screen will-change-transform md:block"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--color-aurora-2) 0%, rgba(199,112,240,0) 60%)",
          filter: "blur(110px)",
          opacity: baseOpacity * 0.9,
          animation: "auroraDriftC 20s ease-in-out infinite",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
