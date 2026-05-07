import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FlywheelSection } from "@/components/FlywheelSection";
import { StickinessSection } from "@/components/StickinessSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <LogoStrip />
        <hr className="mx-auto h-px max-w-[1280px] border-0 bg-[var(--color-border-dark-2)]" />
        <ProblemSection />
        <hr className="aurora-rule mx-auto w-[90%] max-w-[880px]" />
        <ServicesSection />
        <hr className="aurora-rule mx-auto w-[90%] max-w-[880px]" />
        <FlywheelSection />
        <StickinessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
