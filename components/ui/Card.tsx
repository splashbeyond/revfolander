import * as React from "react";
import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  /** When true, the border transitions to an animated aurora gradient on hover. */
  aurora?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Surface card. Dark elevated background, hairline border.
 * Pass `aurora` to enable the aurora-border hover treatment used on
 * problem/lock-in cards and feature blocks.
 */
export function Card({
  aurora = false,
  className,
  children,
  as = "div",
  ...rest
}: CardProps) {
  const Element = as as React.ElementType;
  return (
    <Element
      className={cn(
        "relative rounded-[16px] border border-[var(--color-border-dark)] bg-[var(--color-shadow)] p-6 md:p-7",
        "transition-[border-color,transform] duration-[250ms] ease-out",
        aurora && "card-aurora",
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}
