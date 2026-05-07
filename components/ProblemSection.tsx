import { Globe, SearchX, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PROBLEMS = [
  {
    n: "01",
    label: "Website",
    icon: Globe,
    title: "Your site is a liability.",
    body:
      "Slow load. No mobile path to booking. Dated design. Visitors leave in three seconds. Every abandoned visit is a lost appointment worth hundreds of dollars.",
  },
  {
    n: "02",
    label: "SEO",
    icon: SearchX,
    title: "You're invisible on Google.",
    body:
      "Customers click one of the top three map results — almost never anything below. If you're not in the pack, you don't exist. Most local businesses aren't.",
  },
  {
    n: "03",
    label: "Reviews",
    icon: MessageSquare,
    title: "Your reviews are old and stale.",
    body:
      "Front desk staff forget. Email blasts open at 3%. Generic SMS tools need integrations you don't have. Your competitor has 240 reviews. You have 38.",
  },
] as const;

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mb-12 max-w-[720px] md:mb-16">
          <Eyebrow number="01">The problem</Eyebrow>
          <h2
            className="mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Local businesses don&apos;t have a marketing problem.
            <br />
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              They have a system problem.
            </span>
          </h2>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            Three failures, every time. Each one feeds the next. The business
            spirals down in slow motion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PROBLEMS.map((p) => {
            const Icon = p.icon;
            return (
              <Card key={p.n} aurora as="article">
                <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-dark)] bg-white/[0.04] text-[var(--color-mist)]">
                  <Icon className="h-4 w-4" />
                </div>
                <Eyebrow number={p.n} className="mb-3">
                  {p.label}
                </Eyebrow>
                <h3
                  className="mb-3 text-[20px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--color-paper)] md:text-[28px]"
                >
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-mist)] md:text-[16px]">
                  {p.body}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
