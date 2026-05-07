"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { HeroFloatingLogo } from "@/components/HeroFloatingLogo";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";

const HEADLINE_LINE_1 = ["Get", "to", "the"] as const;
const HEADLINE_LINE_2 = ["of", "Google."] as const;

export function Hero() {
  const prefersReduce = useReducedMotion();

  const wordVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  // Reduced-motion: render content statically without animations.
  const transition = prefersReduce
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <Aurora variant="hero" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="w-full max-lg:flex max-lg:flex-col max-lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transition, delay: prefersReduce ? 0 : 0.1 }}
            className="mb-6 max-lg:flex max-lg:w-full max-lg:justify-center"
          >
            <Eyebrow>
              <span
                aria-hidden="true"
                className="mr-1.5 text-[var(--color-aurora-2)]"
              >
                ●
              </span>
              Growth engine for your business
            </Eyebrow>
          </motion.div>

          <div className="flex w-full flex-col gap-10 max-lg:items-center lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
            <h1
              className="min-w-0 max-w-[880px] flex-1 font-medium leading-[0.95] tracking-[-0.03em] text-[var(--color-paper)] max-lg:w-full max-lg:max-w-lg max-lg:flex-none max-lg:text-center max-lg:text-balance max-lg:pb-1 max-lg:leading-[1.02]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(44px, 8vw, 96px)",
              }}
            >
              <span className="block">
                {HEADLINE_LINE_1.map((word, i) => (
                  <motion.span
                    key={`l1-${word}`}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    transition={{
                      ...transition,
                      delay: prefersReduce ? 0 : 0.2 + i * 0.08,
                    }}
                    className="inline-block"
                  >
                    {word}
                    {i < HEADLINE_LINE_1.length - 1 && " "}
                  </motion.span>
                ))}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  transition={{ ...transition, delay: prefersReduce ? 0 : 0.44 }}
                  className="inline-block"
                >
                  {" "}
                  <GradientText>top</GradientText>
                </motion.span>
                {HEADLINE_LINE_2.map((word, i) => (
                  <motion.span
                    key={`l1b-${word}`}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariant}
                    transition={{
                      ...transition,
                      delay: prefersReduce ? 0 : 0.52 + i * 0.08,
                    }}
                    className="inline-block"
                  >
                    {" "}
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  transition={{ ...transition, delay: prefersReduce ? 0 : 0.72 }}
                  className="inline-block"
                >
                  Stay
                </motion.span>
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={wordVariant}
                  transition={{ ...transition, delay: prefersReduce ? 0 : 0.8 }}
                  className="inline-block italic font-normal"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {" "}there.
                </motion.span>
              </span>
            </h1>

            <HeroFloatingLogo className="flex shrink-0 max-lg:w-full max-lg:justify-center lg:self-center" />
          </div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transition, delay: prefersReduce ? 0 : 0.95 }}
            className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.55] text-[var(--color-mist)] max-lg:mt-12 max-lg:text-center max-lg:text-balance lg:mt-6 md:text-[20px]"
          >
            We build your website, run your SEO, and bring in your reviews. You
            run your business.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transition, delay: prefersReduce ? 0 : 1.05 }}
            className="mt-8 flex flex-wrap gap-3 max-lg:max-w-[400px] max-lg:justify-center max-[479px]:[&_a]:w-full md:mt-10 md:gap-4"
          >
            <Button variant="primary" size="lg" href="#pricing">
              Get started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" href="#flywheel">
              See the flywheel
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ ...transition, delay: prefersReduce ? 0 : 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6 max-lg:flex-col max-lg:items-center max-lg:gap-5 max-lg:text-center"
          >
            <span
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-mist-2)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Trusted by 200+ local businesses
            </span>
            <div className="flex items-center gap-2">
              <span
                aria-label="4.9 out of 5 stars"
                className="inline-flex gap-0.5 text-[var(--color-aurora-5)]"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    stroke="none"
                  />
                ))}
              </span>
              <span
                className="text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-mist-2)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                4.9 average customer rating
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
