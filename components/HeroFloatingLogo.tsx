"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type HeroFloatingLogoProps = {
  className?: string;
};

/**
 * Mark-only hero tile: large glass lockup beside the headline on lg+;
 * centers below the headline on smaller breakpoints. Tile gets tilt/scale
 * on hover; the pinwheel itself follows Logo `interactive` (no spin).
 */
export function HeroFloatingLogo({ className }: HeroFloatingLogoProps) {
  const prefersReduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: prefersReduce ? 0 : 0.9,
        delay: prefersReduce ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        className="relative"
        animate={
          prefersReduce
            ? undefined
            : {
                y: [0, -14, 0],
              }
        }
        transition={{
          duration: 4.25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Ambient pulse — tile only */}
        {!prefersReduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--color-aurora-1)]/30 via-[var(--color-aurora-3)]/20 to-[var(--color-aurora-4)]/25 blur-3xl"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <motion.a
          href="#"
          aria-label="Revfo home"
          className={cn(
            "group relative flex items-center justify-center",
            "rounded-[28px] border-2 border-[var(--color-border-dark)]/95",
            "bg-[var(--color-shadow)]/65",
            "px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10",
            "shadow-[0_20px_56px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
            "backdrop-blur-[18px] backdrop-saturate-175 outline-none",
            "transition-shadow duration-500 ease-out",
            "group-hover:shadow-[0_28px_64px_-18px_rgba(91,141,239,0.35),0_0_60px_-12px_rgba(199,112,240,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset]",
            "focus-visible:ring-2 focus-visible:ring-[var(--color-aurora-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]",
          )}
          whileHover={
            prefersReduce
              ? undefined
              : {
                  scale: 1.12,
                  rotate: 3.5,
                }
          }
          whileTap={prefersReduce ? undefined : { scale: 0.94, rotate: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          {/* Hover shimmer sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[26px]"
          >
            <span
              className={cn(
                "absolute -inset-full z-10 bg-gradient-to-r from-transparent via-white/12 to-transparent",
                "translate-x-[-100%] skew-x-12",
                "transition-transform duration-0",
                "group-hover:translate-x-[200%] group-hover:duration-700 group-hover:ease-out",
              )}
            />
          </span>

          <span
            aria-hidden
            className="pointer-events-none absolute -inset-5 -z-10 rounded-[36px] bg-gradient-to-br from-[var(--color-aurora-1)]/35 via-[var(--color-aurora-3)]/25 to-[var(--color-aurora-4)]/30 opacity-80 blur-3xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-[40px]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-tr from-[var(--color-aurora-2)]/0 via-[var(--color-aurora-2)]/20 to-[var(--color-aurora-3)]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] border-2 border-transparent transition-all duration-300 group-hover:border-[rgba(199,112,240,0.55)] group-hover:shadow-[0_0_48px_-8px_rgba(91,141,239,0.65),inset_0_0_24px_-8px_rgba(255,107,157,0.15)]"
          />

          <Logo
            decorative
            interactive
            wordmark={false}
            size={112}
            className={cn(
              "relative z-10",
              "[&_img]:!h-[4.5rem] [&_img]:!w-[4.5rem]",
              "sm:[&_img]:!h-[5.5rem] sm:[&_img]:!w-[5.5rem]",
              "lg:[&_img]:!h-[6.75rem] lg:[&_img]:!w-[6.75rem]",
              "xl:[&_img]:!h-[7.25rem] xl:[&_img]:!w-[7.25rem]",
            )}
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
