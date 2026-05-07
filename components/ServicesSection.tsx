import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrowserMockup } from "@/components/visuals/BrowserMockup";
import { RankingsMockup } from "@/components/visuals/RankingsMockup";
import { IMessageMockup } from "@/components/visuals/IMessageMockup";
import { cn } from "@/lib/cn";

type Service = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly string[];
  visual: "browser" | "rankings" | "imessage";
  reverse?: boolean;
};

const SERVICES: readonly Service[] = [
  {
    eyebrow: "Websites",
    title: "A site that turns visits into appointments.",
    body:
      "Fast, mobile-first, scored 95+ on Google PageSpeed. Designed in days, not months. The kind of site that closes the deal before a prospect picks up the phone.",
    bullets: [
      "Schema markup, click-to-call, embedded booking",
      "95+ PageSpeed on first paint",
      "Reviews widget that auto-pulls Google reviews",
    ],
    visual: "browser",
  },
  {
    eyebrow: "Local SEO",
    title: "The map pack. Owned.",
    body:
      "We claim and tune your Google Business Profile, build out 50+ citations, and publish location pages that rank for the searches that actually convert. The dashboard updates weekly. You see the numbers move.",
    bullets: [
      "Google Business Profile, fully optimized",
      "50+ local citations, monitored continuously",
      "Two location-targeted blog posts a month",
    ],
    visual: "rankings",
    reverse: true,
  },
  {
    eyebrow: "Reviews",
    title: "A review pipeline that runs itself.",
    body:
      "Drop a CSV from any booking software. We parse it, dedupe, then send a polite iMessage after each visit. Customers reply. Reviews land. Rankings move.",
    bullets: [
      "Universal CSV-drop. Works with any PMS",
      "iMessage delivery, paced like a human",
      "30 → 200+ reviews in 12 months",
    ],
    visual: "imessage",
  },
];

function Visual({ kind }: { kind: Service["visual"] }) {
  switch (kind) {
    case "browser":
      return <BrowserMockup />;
    case "rankings":
      return <RankingsMockup />;
    case "imessage":
      return <IMessageMockup />;
  }
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mb-12 max-w-[720px] md:mb-16">
          <Eyebrow number="02">The bundle</Eyebrow>
          <h2
            className="mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Three services.{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Seamlessly connected.
            </span>
          </h2>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            Each one makes the others measurably more valuable. Pull one out and
            the system loses 60% of its power. That&apos;s the lock-in.
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {SERVICES.map((s, idx) => (
            <article
              key={s.eyebrow}
              className={cn(
                "grid grid-cols-1 items-center gap-8 lg:gap-16",
                idx > 0 && "border-t border-[var(--color-border-dark-2)] pt-12 md:pt-20",
                "lg:grid-cols-2",
              )}
            >
              <div className={cn(s.reverse ? "lg:order-2" : "lg:order-1")}>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <h3
                  className="mt-3 mb-4 font-medium leading-[1.05] tracking-[-0.025em] text-[var(--color-paper)]"
                  style={{ fontSize: "clamp(32px, 4.5vw, 44px)" }}
                >
                  {s.title}
                </h3>
                <p className="mb-6 text-[16px] leading-[1.6] text-[var(--color-mist)] md:text-[18px]">
                  {s.body}
                </p>
                <ul className="flex flex-col gap-3.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[13px] text-[var(--color-paper)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      <Check
                        className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-[var(--color-success)]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn(s.reverse ? "lg:order-1" : "lg:order-2")}>
                <div className="relative overflow-hidden rounded-[24px] p-6 md:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 80% at 30% 20%, rgba(199,112,240,0.18) 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 70% 80%, rgba(91,141,239,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 50% 50%, rgba(79,209,197,0.1) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <div className="relative z-10">
                    <Visual kind={s.visual} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
