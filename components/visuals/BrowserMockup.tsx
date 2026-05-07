/**
 * Stylized browser frame for the Websites service block.
 * Pure CSS/SVG — no images, no client JS, fully server-renderable.
 */
export function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-border-dark)] bg-[var(--color-shadow)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-border-dark)] bg-[#0F0F11] px-3.5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C940]" />
        <span
          className="ml-3 flex-1 truncate rounded-md border border-[var(--color-border-dark)] bg-[var(--color-ink)] px-2.5 py-1.5 text-[11px] text-[var(--color-mist)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          https://lumenspa.com
        </span>
      </div>
      <div className="bg-gradient-to-b from-[#0F0F12] to-[var(--color-ink)] p-6">
        <div className="mb-5 flex items-center justify-between">
          <span
            className="italic text-[18px] text-[var(--color-paper)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lumen Spa
          </span>
          <div
            className="flex gap-3 text-[10px] text-[var(--color-mist)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span>SERVICES</span>
            <span>BOOK</span>
            <span>CONTACT</span>
          </div>
        </div>
        <div className="pb-8">
          <div className="mb-2 text-[20px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-paper)]">
            Skin care that{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              works.
            </span>
          </div>
          <p className="mb-3.5 text-[11px] leading-[1.4] text-[var(--color-mist)]">
            Med-spa treatments by board-certified specialists. Scottsdale, AZ.
          </p>
          <div className="flex gap-2">
            <span className="rounded-md bg-[var(--color-paper)] px-3 py-1.5 text-[10px] font-medium text-[var(--color-ink)]">
              Book now
            </span>
            <span className="rounded-md border border-[var(--color-border-dark)] px-3 py-1.5 text-[10px] font-medium text-[var(--color-paper)]">
              Services
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-[42px] rounded-md border border-[var(--color-border-dark)] bg-gradient-to-br from-[#1A1A1D] to-[#0F0F12]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
