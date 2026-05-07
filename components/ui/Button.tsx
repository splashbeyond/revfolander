import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium leading-none rounded-[10px] transition-transform duration-200 ease-out active:scale-[0.98] focus-visible:outline-none";

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[15px] min-w-[44px]",
  lg: "h-[52px] px-7 text-base min-w-[44px]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-paper)] text-[var(--color-ink)] " +
    "before:content-[''] before:absolute before:-inset-1.5 before:rounded-[16px] " +
    "before:bg-[linear-gradient(110deg,var(--color-aurora-1),var(--color-aurora-2),var(--color-aurora-3),var(--color-aurora-4),var(--color-aurora-5))] " +
    "before:bg-[length:200%_200%] before:blur-[18px] before:opacity-0 before:scale-[0.92] before:-z-10 " +
    "before:transition-[opacity,transform] before:duration-200 before:ease-out " +
    "[@media(hover:hover)]:hover:before:opacity-65 [@media(hover:hover)]:hover:before:scale-[1.08]",
  ghost:
    "bg-transparent text-[var(--color-paper)] border border-[var(--color-border-dark)] " +
    "[@media(hover:hover)]:hover:border-[var(--color-mist)] " +
    "transition-colors duration-200",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <a href={href} className={cls} {...rest}>
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  const { href: _, ...rest } = props as ButtonAsButton;
  return (
    <button className={cls} {...rest}>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}
