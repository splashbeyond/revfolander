import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const COLS = [
  {
    heading: "Product",
    links: [
      { label: "Websites", href: "#services" },
      { label: "SEO", href: "#services" },
      { label: "Reviews", href: "#services" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Customers", href: "#results" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case studies", href: "#results" },
      { label: "Newsletter", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Acceptable use", href: "#" },
      { label: "DPA", href: "#" },
    ],
  },
] as const;

const SOCIALS = [
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
] as const;

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border-dark-2)] bg-[var(--color-ink)] py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_repeat(4,1fr)] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" aria-label="Revfo home">
              <Logo />
            </a>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.5] text-[var(--color-mist)]">
              A growth engine for appointment-based businesses.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.heading}>
              <h5
                className="mb-4 text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-mist)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {col.heading}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[14px] text-[var(--color-paper)] transition-colors duration-100 [@media(hover:hover)]:hover:text-[var(--color-aurora-2)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-dark-2)] pt-6">
          <span
            className="text-[12px] text-[var(--color-mist-2)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Revfo Inc. All rights reserved.
          </span>
          <ul aria-label="Social" className="flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-dark)] text-[var(--color-mist)] transition-colors duration-200 [@media(hover:hover)]:hover:border-[var(--color-mist)] [@media(hover:hover)]:hover:text-[var(--color-paper)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
