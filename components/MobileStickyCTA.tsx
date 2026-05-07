"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/**
 * Sticky bottom CTA for mobile only. Appears once the user has scrolled
 * past ~60% of the first viewport. Hidden on md+ where the nav CTA is
 * already always visible.
 */
export function MobileStickyCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border-dark)] bg-[rgba(10,10,11,0.85)] px-4 backdrop-blur-[14px] transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{
        paddingTop: 12,
        paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
      }}
    >
      <Button variant="primary" href="#pricing" className="w-full">
        Get started <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
