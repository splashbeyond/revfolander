const CUSTOMERS = [
  { name: "Lumen Spa", style: "serif" },
  { name: "NORTHDENTAL", style: "sans" },
  { name: "/ axis chiro", style: "mono" },
  { name: "Maven & Co.", style: "serif" },
  { name: "FORM·STUDIO", style: "sans" },
  { name: "Sienna Aesthetics", style: "serif" },
  { name: "harbor.law", style: "mono" },
  { name: "Anika Skin", style: "serif" },
] as const;

const styleClass: Record<(typeof CUSTOMERS)[number]["style"], string> = {
  serif: "italic",
  sans: "font-semibold tracking-[-0.04em]",
  mono: "tracking-normal text-[15px]",
};

export function LogoStrip() {
  return (
    <section
      aria-label="Customers"
      className="border-t border-[var(--color-border-dark-2)] py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-12">
        <p
          className="mb-8 text-center text-[13px] text-[var(--color-mist-2)] md:text-[14px]"
        >
          Used by appointment-based businesses across the country
        </p>
        <ul
          className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-6"
          role="list"
        >
          {CUSTOMERS.map((c) => (
            <li
              key={c.name}
              className={`whitespace-nowrap text-[20px] tracking-[-0.02em] text-[var(--color-mist-2)] opacity-60 transition-[opacity,color] duration-200 [@media(hover:hover)]:hover:text-[var(--color-paper)] [@media(hover:hover)]:hover:opacity-100 ${styleClass[c.style]}`}
              style={{
                fontFamily:
                  c.style === "mono"
                    ? "var(--font-mono)"
                    : c.style === "sans"
                      ? "var(--font-sans)"
                      : "var(--font-display)",
              }}
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
