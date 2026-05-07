"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type FAQ = { q: string; a: string };

const FAQS: readonly FAQ[] = [
  {
    q: "How long does setup take?",
    a: "Site live in 5–10 days. Google Business Profile optimized within the first week. First reviews flowing within two weeks. The flywheel is fully turning by day 30.",
  },
  {
    q: "Do I need to do anything?",
    a: "Onboarding takes 30 minutes. After that, you drop your appointment CSV once a week. We handle the rest. No checklists, no plugin updates, no calls with vendors.",
  },
  {
    q: "What if I already have a website?",
    a: "When did you last update it? When was the last time someone booked through it on a phone? We compare your conversion rate to what we ship and you decide from there. Most customers replace what they have within the first week.",
  },
  {
    q: "Will my customers like getting texts?",
    a: "They opted in when they booked. We send one polite, branded message after their visit. Complaint rates are well under 1%. Most customers actually appreciate being asked.",
  },
  {
    q: "How is this different from an agency?",
    a: "Agencies sell hours. We sell outcomes. You see your rankings, your traffic, and your reviews on the dashboard every day. If they're not going up, you don't pay.",
  },
  {
    q: "What's the contract length?",
    a: "Month-to-month. Cancel any time. Most customers stay because the system compounds — but you're never locked in.",
  },
  {
    q: "How long until I see results?",
    a: "Site converting on day one. First Google reviews within two weeks. Map pack movement within 60–90 days. The 12-month customer is unrecognizable from the day-one customer.",
  },
  {
    q: "What if it doesn't work for my business?",
    a: "30-day money-back guarantee. If we haven't delivered the promised work — site live, GBP optimized, first reviews flowing — you pay nothing and we refund the month.",
  },
];

export function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <Eyebrow number="07">FAQ</Eyebrow>
          <h2
            className="mx-auto mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Common{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              questions.
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-[780px]">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              index={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              isLast={i === FAQS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  isLast,
}: {
  index: number;
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const prefersReduce = useReducedMotion();
  const transition = prefersReduce
    ? { duration: 0 }
    : { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div
      className={cn(
        "border-t border-[var(--color-border-dark-2)]",
        isLast && "border-b",
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium leading-[1.3] tracking-[-0.01em] text-[var(--color-paper)] md:py-7 md:text-[19px]"
      >
        <span>{faq.q}</span>
        <span
          className={cn(
            "inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border bg-white/[0.04] text-[var(--color-mist)] transition-[transform,background,color,border-color] duration-200",
            isOpen
              ? "rotate-45 border-[rgba(255,107,157,0.3)] bg-[rgba(255,107,157,0.1)] text-[var(--color-aurora-1)]"
              : "border-[var(--color-border-dark)]",
          )}
        >
          <Plus className="h-3.5 w-3.5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-12 text-[15px] leading-[1.6] text-[var(--color-mist)] md:text-[16px]">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
