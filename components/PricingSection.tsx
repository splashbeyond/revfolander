import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type Tier = {
  name: string;
  eyebrow: string;
  description: string;
  features: readonly string[];
  ctaVariant: "primary" | "ghost";
  featured?: boolean;
};

const TIERS: readonly Tier[] = [
  {
    name: "Site",
    eyebrow: "Tier 01 — Site",
    description: "For owners replacing a broken or dated site.",
    features: [
      "Professional, mobile-first website",
      "Hosting + SSL + 95+ PageSpeed",
      "Schema markup, click-to-call, booking widget",
      "Embedded reviews widget",
      "Single dashboard for traffic + conversion",
    ],
    ctaVariant: "ghost",
  },
  {
    name: "Site + SEO",
    eyebrow: "Tier 02 — Site + SEO",
    description: "For established businesses ready to grow traffic.",
    features: [
      "Everything in Site",
      "Full Google Business Profile management",
      "50+ local citations, monitored continuously",
      "2 location-targeted blog posts / month",
      "Weekly ranking reports",
      "Priority support",
    ],
    ctaVariant: "primary",
    featured: true,
  },
  {
    name: "Full Engine",
    eyebrow: "Tier 03 — Full Engine",
    description: "For owners who want maximum compounding growth.",
    features: [
      "Everything in Site + SEO",
      "Universal CSV-drop review system",
      "iMessage delivery, intelligent pacing",
      "Reply tracking + global unsubscribe",
      "Dedicated growth advisor",
      "Quarterly business review",
    ],
    ctaVariant: "ghost",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <Eyebrow number="05">Plans</Eyebrow>
          <h2
            className="mx-auto mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Three tiers.{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book a demo.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            We&apos;ll walk through the right package for your market — scope,
            timeline, and what success looks like — on a short call.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:gap-5">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-[16px] p-6 md:p-8",
                tier.featured
                  ? "price-card-featured border border-transparent bg-gradient-to-b from-[#1F1F22] to-[#161618] md:-translate-y-3 md:p-10"
                  : "border border-[var(--color-border-dark)] bg-[var(--color-shadow)]",
              )}
            >
              {tier.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[var(--color-border-dark)] bg-[var(--color-ink)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-paper)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Most popular
                </span>
              )}

              <Eyebrow
                className={cn(
                  "mb-2",
                  tier.featured && "text-[var(--color-paper)]",
                )}
              >
                {tier.eyebrow}
              </Eyebrow>
              <h3 className="mb-2 text-[20px] font-medium tracking-[-0.02em] text-[var(--color-paper)]">
                {tier.name}
              </h3>
              <p className="mb-6 text-[13px] leading-[1.5] text-[var(--color-mist)]">
                {tier.description}
              </p>

              <ul className="my-6 flex flex-col gap-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14px] text-[var(--color-paper)]"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-success)]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button
                  variant={tier.ctaVariant}
                  href="#"
                  className="w-full"
                >
                  Book a demo
                </Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-[var(--color-mist-2)] md:text-[14px]">
          No obligation — see the product, ask questions, and get a tailored
          recommendation.
        </p>
      </div>
    </section>
  );
}
