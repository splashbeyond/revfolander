import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Revfo — A growth engine for appointment-based businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Programmatic OG image. Dark canvas, aurora moment, oversized headline.
 * The pinwheel logo is read from public/ at request time and inlined as
 * a data URI so next/og's renderer can include it.
 */
export default async function OpengraphImage() {
  const logoBytes = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoDataUri = `data:image/png;base64,${logoBytes.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          position: "relative",
          fontFamily: "sans-serif",
          color: "#FAFAFA",
        }}
      >
        {/* Aurora blob */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 30% 30%, #C770F0 0%, rgba(91,141,239,0.6) 35%, rgba(79,209,197,0) 70%)",
            filter: "blur(60px)",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, #FF6B9D 0%, rgba(255,184,108,0) 60%)",
            filter: "blur(80px)",
            opacity: 0.55,
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUri} width={40} height={40} alt="" />
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Revfo
          </div>
        </div>

        {/* Headline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9494A0",
              marginBottom: 28,
            }}
          >
            Growth engine for local businesses
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: 1080,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Get to the top of Google.</span>
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>
              Stay there.
            </span>
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#9494A0",
              maxWidth: 880,
            }}
          >
            We build your website, run your SEO, and bring in your reviews. You
            run your business.
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6B6B74",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>revfo.com</span>
          <span>Websites · SEO · Reviews</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
