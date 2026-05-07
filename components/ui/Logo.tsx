import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  size?: number;
  className?: string;
  /** Render the wordmark next to the pinwheel. */
  wordmark?: boolean;
  /** When true, label is announced; when false, decorative. */
  decorative?: boolean;
  /**
   * Subtle hover polish when wrapped in a parent with `group` (nav lockup).
   * Does not rotate the mark — scale + wordmark gradient only.
   */
  interactive?: boolean;
};

/**
 * Revfo pinwheel mark. Four identical curved blades around a hidden
 * center, forming a four-point star in negative space.
 *
 * The mark itself ships as `public/logo.png` (white-on-transparent so it
 * sits clean on the ink canvas). Per the brand guide, never apply drop
 * shadows, strokes, recolors, or hand rotations — the only acceptable
 * animation is a slow continuous rotor, handled separately.
 */
export function Logo({
  size = 24,
  className,
  wordmark = true,
  decorative = false,
  interactive = false,
}: LogoProps) {
  const ariaLabel = decorative ? undefined : "Revfo home";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-medium tracking-[-0.02em] text-[17px] text-[var(--color-paper)]",
        interactive &&
          "gap-2.5 transition-[gap] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:gap-3",
        className,
      )}
      aria-label={ariaLabel}
    >
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        priority
        aria-hidden="true"
        className={cn(
          "block",
          interactive &&
            "origin-center transition-[transform,filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.08] group-hover:brightness-110 group-hover:drop-shadow-[0_0_14px_rgba(199,112,240,0.35)]",
        )}
      />
      {wordmark ? (
        <span
          className={cn(
            interactive &&
              "transition-[letter-spacing,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-gradient-to-r group-hover:from-[var(--color-aurora-1)] group-hover:via-[var(--color-aurora-3)] group-hover:to-[var(--color-aurora-4)] group-hover:bg-clip-text group-hover:tracking-[-0.03em] group-hover:text-transparent",
          )}
        >
          Revfo
        </span>
      ) : null}
    </span>
  );
}
