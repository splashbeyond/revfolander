import { LayoutTemplate, TrendingUp, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ITEMS = [
  {
    icon: LayoutTemplate,
    title: "A site that keeps leveling up.",
    body:
      "Fast hosting, security, and updates are handled for you. Customers stay because the storefront they rely on gets faster and safer over time — without extra work on their end.",
    bars: [18, 28, 38, 52, 62, 74, 86, 96],
  },
  {
    icon: TrendingUp,
    title: "SEO that stacks month over month.",
    body:
      "Content, technical fixes, and local signals compound. People stay when they see rankings and qualified traffic climb steadily instead of stalling after a one-time project.",
    bars: [22, 34, 46, 58, 68, 78, 88, 98],
  },
  {
    icon: MessagesSquare,
    title: "Reviews that keep flowing.",
    body:
      "Smart timing, templates, and follow-ups are built in — review velocity stays high without spreadsheets or manual chasing. The payoff is obvious after the first steady wave of new five-stars.",
    bars: [20, 32, 44, 56, 66, 76, 90, 100],
  },
] as const;

const iconShellClass =
  "mb-6 inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(16,185,129,0.35)] bg-[rgba(16,185,129,0.12)] text-[#34d399]";

const barClass =
  "flex-1 rounded-t-[2px] bg-gradient-to-t from-[rgba(16,185,129,0.15)] to-[rgba(52,211,153,0.85)]";

export function StickinessSection() {
  return (
    <section id="stickiness" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mb-12 max-w-[720px] md:mb-16">
          <Eyebrow number="04">Compounding value</Eyebrow>
          <h2
            className="mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            Why customers{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              stay.
            </span>
          </h2>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            Most teams renew because the results keep getting better — clearer
            visibility, steadier leads, and a reputation that grows. Here are
            three reasons staying with Revfo feels like the obvious win.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                as="article"
                className="border-[rgba(16,185,129,0.28)] bg-[rgba(16,185,129,0.06)] shadow-[0_0_0_1px_rgba(16,185,129,0.06)_inset] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(52,211,153,0.45)] hover:shadow-[0_0_32px_-12px_rgba(16,185,129,0.35)]"
              >
                <div className={iconShellClass}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-[20px] font-medium leading-[1.2] tracking-[-0.01em] text-[var(--color-paper)] md:text-[28px]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[var(--color-mist)] md:text-[16px]">
                  {item.body}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-5 flex h-12 items-end gap-[3px]"
                >
                  {item.bars.map((h, i) => (
                    <span
                      key={i}
                      className={barClass}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
