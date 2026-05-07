/**
 * Stylized iMessage thread for the Reviews service block.
 * Demonstrates the two-message handshake pattern from the business plan.
 */
export function IMessageMockup() {
  return (
    <div className="rounded-[18px] border border-[var(--color-border-dark)] bg-gradient-to-b from-[#0F0F12] to-[var(--color-ink)] px-[18px] py-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="mb-[18px] flex flex-col items-center gap-1.5 border-b border-[var(--color-border-dark-2)] pb-[18px]">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-dark)] bg-gradient-to-br from-[#3D3D42] to-[#1A1A1D] text-base font-medium text-[var(--color-mist)]"
        >
          L
        </div>
        <div className="text-[13px] font-medium text-[var(--color-paper)]">
          Lumen Spa
        </div>
        <div
          className="text-[10px] text-[var(--color-mist-2)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          +1 (480) 555-0142
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="my-1.5 text-center text-[9px] tracking-wider text-[var(--color-mist-2)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Today 3:14 PM
        </div>

        <Bubble side="them">
          Hey Sarah — it&apos;s the Lumen Spa team. Hope your treatment went well
          today!
        </Bubble>
        <Bubble side="us">Yes, loved it 💆</Bubble>
        <Bubble side="them">
          Wonderful. Could you share your experience on Google? It takes 30
          seconds and helps a small team a lot.
          <span className="mt-1 block text-[11px] text-white/85 underline underline-offset-2">
            g.page/lumen-spa-review
          </span>
        </Bubble>
        <Bubble side="us">Done ✅</Bubble>
      </div>
    </div>
  );
}

function Bubble({
  side,
  children,
}: {
  side: "them" | "us";
  children: React.ReactNode;
}) {
  const themClass =
    "self-start rounded-bl-[6px] bg-[#2A2A2E] text-[var(--color-paper)]";
  const usClass =
    "self-end rounded-br-[6px] text-white bg-[linear-gradient(135deg,#3478F6_0%,#1B6AE8_100%)]";
  return (
    <div
      className={`max-w-[80%] rounded-[18px] px-3.5 py-2.5 text-[13px] leading-[1.4] ${
        side === "them" ? themClass : usClass
      }`}
    >
      {children}
    </div>
  );
}
