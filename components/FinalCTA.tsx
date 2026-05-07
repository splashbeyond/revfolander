import { ArrowRight } from "lucide-react";
import { Aurora } from "@/components/Aurora";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-b border-[var(--color-border-dark-2)] px-6 py-32 text-center md:px-10 md:py-40">
      <Aurora variant="intense" />
      <div className="relative z-10 mx-auto max-w-[760px]">
        <Eyebrow className="mb-5">Get started</Eyebrow>
        <h2
          className="font-medium leading-[1] tracking-[-0.03em] text-[var(--color-paper)]"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(44px, 8vw, 80px)",
          }}
        >
          Ready to be the
          <br />
          <GradientText as="span">top result?</GradientText>
        </h2>
        <p className="mt-5 text-[18px] leading-[1.5] text-[var(--color-mist)] md:mt-6 md:text-[22px]">
          Setup takes days. Results compound for years.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="lg" href="#pricing">
            Start the engine
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="lg" href="#pricing">
            See pricing
          </Button>
        </div>
        <p className="mt-6 text-[13px] text-[var(--color-mist-2)] md:text-[14px]">
          30-day money-back guarantee. Month-to-month. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
