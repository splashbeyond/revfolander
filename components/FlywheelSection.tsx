"use client";

import * as React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const NODES = [
  { n: "01", label: "Website", cx: 280, cy: 98, glowDelay: "0s" },
  { n: "02", label: "SEO", cx: 462, cy: 280, glowDelay: "2s" },
  { n: "03", label: "Reviews", cx: 280, cy: 462, glowDelay: "4s" },
  { n: "04", label: "Rankings", cx: 98, cy: 280, glowDelay: "6s" },
] as const;

const STATS = [
  { value: "95+", label: "Google PageSpeed score, day one" },
  { value: "3.2×", label: "Average ranking lift in 90 days" },
  { value: "5×", label: "Review velocity vs. before" },
  { value: "42%", label: "Booked-call conversion lift" },
] as const;

export function FlywheelSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReduce = useReducedMotion();

  return (
    <section id="flywheel" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <Eyebrow number="03">The flywheel</Eyebrow>
          <h2
            className="mx-auto mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Three services.{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One flywheel.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            Each cycle compounds. The customer at month 12 has all three
            operating at full strength — and is now the #1 result for every
            search that matters.
          </p>
        </div>

        <div
          ref={ref}
          className="relative my-12 flex items-center justify-center"
        >
          {/* Desktop SVG flywheel */}
          <div className="relative hidden aspect-square w-full max-w-[560px] md:block">
            <svg
              viewBox="0 0 560 560"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="fw-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF6B9D" />
                  <stop offset="33%" stopColor="#C770F0" />
                  <stop offset="66%" stopColor="#5B8DEF" />
                  <stop offset="100%" stopColor="#4FD1C5" />
                </linearGradient>
                <radialGradient id="fw-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C770F0" stopOpacity="0.6" />
                  <stop offset="60%" stopColor="#5B8DEF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="280" cy="280" r="220" fill="url(#fw-glow)" opacity="0.4" />

              {/* Slowly rotating ring + tick marks. Only animates when in view (or reduced-motion off). */}
              <g
                style={{
                  transformOrigin: "50% 50%",
                  animation:
                    !prefersReduce && inView
                      ? "rotorSpin 60s linear infinite"
                      : "none",
                }}
              >
                <circle
                  cx="280"
                  cy="280"
                  r="180"
                  fill="none"
                  stroke="url(#fw-grad)"
                  strokeWidth="1"
                  strokeDasharray="2 8"
                  opacity="0.5"
                />
                <g stroke="#27272A" strokeWidth="1">
                  <line x1="280" y1="98" x2="280" y2="106" />
                  <line x1="462" y1="280" x2="454" y2="280" />
                  <line x1="280" y1="462" x2="280" y2="454" />
                  <line x1="98" y1="280" x2="106" y2="280" />
                </g>
              </g>

              {/* Center hub */}
              <g>
                <circle
                  cx="280"
                  cy="280"
                  r="64"
                  fill="#0F0F12"
                  stroke="#27272A"
                  strokeWidth="1"
                />
                <text
                  x="280"
                  y="272"
                  textAnchor="middle"
                  className="fw-sub"
                  fill="#9494A0"
                  fontSize="10"
                  letterSpacing="0.04em"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  THE ENGINE
                </text>
                <text
                  x="280"
                  y="296"
                  textAnchor="middle"
                  fill="#FAFAFA"
                  fontSize="14"
                  fontWeight="500"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Revfo
                </text>
              </g>

              {/* Nodes */}
              {NODES.map((node) => (
                <g key={node.n}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="56"
                    fill="url(#fw-glow)"
                    style={{
                      animation:
                        !prefersReduce && inView
                          ? `nodeGlow 8s ease-in-out infinite ${node.glowDelay}`
                          : "none",
                      opacity: 0,
                    }}
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="48"
                    fill="#1A1A1D"
                    stroke="#27272A"
                    strokeWidth="1.5"
                  />
                  <text
                    x={node.cx}
                    y={node.cy - 6}
                    textAnchor="middle"
                    fill="#9494A0"
                    fontSize="10"
                    letterSpacing="0.04em"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {node.n}
                  </text>
                  <text
                    x={node.cx}
                    y={node.cy + 12}
                    textAnchor="middle"
                    fill="#FAFAFA"
                    fontSize="14"
                    fontWeight="500"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {node.label}
                  </text>
                </g>
              ))}

              {/* Connecting arcs */}
              <g
                fill="none"
                stroke="url(#fw-grad)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.6"
              >
                <path d="M 326 110 A 180 180 0 0 1 450 234" />
                <path d="M 450 326 A 180 180 0 0 1 326 450" />
                <path d="M 234 450 A 180 180 0 0 1 110 326" />
                <path d="M 110 234 A 180 180 0 0 1 234 110" />
              </g>

              {/* Arrow heads */}
              <g fill="url(#fw-grad)">
                <polygon points="450,234 444,222 458,228" />
                <polygon points="326,450 314,444 320,458" />
                <polygon points="110,326 116,314 102,320" />
                <polygon points="234,110 246,116 240,102" />
              </g>
            </svg>
          </div>

          {/* Mobile vertical flow */}
          <div className="flex w-full max-w-[420px] flex-col gap-2 md:hidden">
            {NODES.map((node, i) => (
              <div
                key={node.n}
                className="relative flex items-center gap-3.5 rounded-[16px] border border-[var(--color-border-dark)] bg-[var(--color-shadow)] px-4 py-4"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-aurora-3), var(--color-aurora-2))",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {node.n}
                </span>
                <div className="flex-1">
                  <div className="text-[14px] font-medium text-[var(--color-paper)]">
                    {node.label}
                  </div>
                  <div
                    className="text-[11px] text-[var(--color-mist)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {flywheelMobileSubtitle(i)}
                  </div>
                </div>
                {i < NODES.length - 1 && (
                  <span className="absolute -bottom-2.5 left-8 h-2.5 w-px bg-[var(--color-border-dark)]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--color-border-dark-2)] pt-8 md:mt-16 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-1.5"
            >
              <span
                className="text-[32px] font-medium leading-none tracking-[-0.02em] text-[var(--color-paper)] md:text-[40px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {s.value}
              </span>
              <span className="text-[13px] leading-[1.3] text-[var(--color-mist)]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function flywheelMobileSubtitle(i: number): string {
  const subs = [
    "Traffic actually converts",
    "Map pack + organic climb",
    "Velocity beats volume",
    "Compound month over month",
  ] as const;
  return subs[i] ?? "";
}
