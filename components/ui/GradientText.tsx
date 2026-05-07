import * as React from "react";
import { cn } from "@/lib/cn";

type GradientTextProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

/**
 * Aurora gradient text. Used at most once per viewport.
 * Background drifts horizontally over 9s. Disabled by reduced-motion.
 */
export function GradientText({
  as = "span",
  className,
  children,
}: GradientTextProps) {
  const Element = as as React.ElementType;
  return (
    <Element className={cn("gradient-text", className)}>{children}</Element>
  );
}
