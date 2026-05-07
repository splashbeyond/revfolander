type Row = {
  keyword: string;
  was: string;
  now: string;
};

const ROWS: readonly Row[] = [
  { keyword: "med spa near me", was: "#14", now: "#1" },
  { keyword: "botox phoenix", was: "#22", now: "#2" },
  { keyword: "microneedling scottsdale", was: "#38", now: "#3" },
];

const BAR_HEIGHTS = [18, 22, 20, 30, 35, 32, 48, 60, 72, 82, 90, 98];

export function RankingsMockup() {
  return (
    <div className="rounded-[14px] border border-[var(--color-border-dark)] bg-[var(--color-shadow)] p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="mb-5 flex items-center justify-between">
        <span
          className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-mist)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Map pack — Phoenix, AZ
        </span>
        <span
          className="rounded-full border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.12)] px-2.5 py-1 text-[11px] text-[var(--color-success)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          +312% in 90 days
        </span>
      </div>

      {ROWS.map((r, i) => (
        <div
          key={r.keyword}
          className={`grid grid-cols-[1fr_60px_60px] items-center gap-3 py-3.5 text-[13px] ${
            i < ROWS.length - 1 ? "border-b border-[var(--color-border-dark-2)]" : ""
          }`}
        >
          <span
            className="text-[12px] text-[var(--color-paper)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {r.keyword}
          </span>
          <span
            className="text-right text-[12px] text-[var(--color-mist-2)] line-through"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {r.was}
          </span>
          <span
            className="text-right text-[12px] font-medium text-[var(--color-success)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {r.now}
          </span>
        </div>
      ))}

      <div
        aria-hidden="true"
        className="mt-6 flex h-20 items-end gap-1.5 border-t border-[var(--color-border-dark-2)] pt-3"
      >
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-[3px] bg-gradient-to-b from-[var(--color-aurora-3)] to-[var(--color-aurora-4)]"
            style={{
              height: `${h}%`,
              opacity: i >= 7 ? 0.9 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
