import * as React from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = React.HTMLAttributes<HTMLSpanElement> & {
  number?: string;
};

/**
 * Mono uppercase eyebrow label.
 * Common pattern: <Eyebrow number="01">The problem</Eyebrow>
 */
export function Eyebrow({
  number,
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[12px] md:text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--color-mist)]",
        className,
      )}
      style={{ fontFamily: "var(--font-mono)" }}
      {...rest}
    >
      {number ? `${number} — ` : null}
      {children}
    </span>
  );
}
