import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  /** Tailwind class for the avatar gradient. */
  avatar: string;
  feature?: boolean;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "We went from 38 reviews to 240 in a year. Our front desk used to do this by hand — twice a week, on a good week. Now we drop a CSV in on Mondays and it just runs.",
    name: "Maya Patel",
    meta: "Owner, Lumen Spa · Scottsdale, AZ",
    avatar:
      "bg-[linear-gradient(135deg,#FF6B9D_0%,#C770F0_50%,#5B8DEF_100%)]",
    feature: true,
  },
  {
    quote:
      "I'd hired three SEO agencies before Revfo. None of them moved the needle. We went from page three to the map pack in 70 days.",
    name: "Daniel Wu",
    meta: "Practice manager, North Dental · Tempe, AZ",
    avatar: "bg-[linear-gradient(135deg,#4FD1C5,#5B8DEF)]",
  },
  {
    quote:
      "The site they built closed at almost double the rate of what we had before. Same traffic, twice the bookings.",
    name: "Rachel Kim",
    meta: "Founder, Form Studio · Mesa, AZ",
    avatar: "bg-[linear-gradient(135deg,#FFB86C,#FF6B9D)]",
  },
  {
    quote:
      "One bill, one team, one dashboard. I stopped chasing three vendors. That alone was worth it.",
    name: "Marcus Lee",
    meta: "Owner, Axis Chiropractic · Phoenix, AZ",
    avatar: "bg-[linear-gradient(135deg,#C770F0,#4FD1C5)]",
  },
  {
    quote:
      "Customers actually appreciate the text. Less than 1% have asked to opt out. Reviews come in steady, not in bursts.",
    name: "Priya Shah",
    meta: "Director, Sienna Aesthetics · Tucson, AZ",
    avatar: "bg-[linear-gradient(135deg,#5B8DEF,#FF6B9D)]",
  },
  {
    quote:
      "I run the practice. They run the marketing. That's the whole arrangement and it just works.",
    name: "James Holloway",
    meta: "Partner, Harbor Law · Chandler, AZ",
    avatar: "bg-[linear-gradient(135deg,#FFB86C,#C770F0)]",
  },
];

export function TestimonialsSection() {
  return (
    <section id="results" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="mb-12 max-w-[720px] md:mb-16">
          <Eyebrow number="06">Results</Eyebrow>
          <h2
            className="mt-3 font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-paper)]"
            style={{ fontSize: "clamp(32px, 5vw, 48px)" }}
          >
            What customers{" "}
            <span
              className="italic text-[var(--color-mist)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              say.
            </span>
          </h2>
          <p className="mt-4 max-w-[580px] text-[17px] leading-[1.55] text-[var(--color-mist)] md:text-[19px]">
            Real businesses. Real ranking moves. Real review volume.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.name}
              as="article"
              className={cn(
                "flex flex-col gap-5 px-6 py-7",
                t.feature &&
                  "bg-gradient-to-b from-[#1F1F22] to-[#16161A] lg:col-span-2",
              )}
            >
              {t.feature ? (
                <p
                  className="italic text-[24px] leading-[1.3] tracking-[-0.02em] text-[var(--color-paper)] md:text-[32px]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              ) : (
                <p className="text-[17px] leading-[1.5] tracking-[-0.01em] text-[var(--color-paper)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              )}
              <div className="mt-auto flex items-center gap-3.5 pt-2">
                <div
                  className={cn(
                    "h-10 w-10 flex-shrink-0 rounded-full",
                    t.avatar,
                  )}
                />
                <div>
                  <div className="text-[14px] font-medium leading-[1.2] text-[var(--color-paper)]">
                    {t.name}
                  </div>
                  <div
                    className="text-[11px] tracking-[0.04em] text-[var(--color-mist)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {t.meta}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
