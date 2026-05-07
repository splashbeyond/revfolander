import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Revfo — A growth engine for appointment-based businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Programmatic OG image that centers the Revfo logo on a dark
 * aurora background so iMessage/social previews show brand-first.
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
          alignItems: "center",
          justifyContent: "center",
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

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 420,
            height: 420,
            borderRadius: 56,
            border: "2px solid rgba(199, 112, 240, 0.45)",
            background:
              "linear-gradient(145deg, rgba(31,31,34,0.9), rgba(20,20,22,0.82))",
            boxShadow:
              "0 24px 60px -24px rgba(0,0,0,0.7), 0 0 80px -18px rgba(91,141,239,0.45)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              width: 320,
              height: 320,
              borderRadius: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 50% 40%, rgba(199,112,240,0.2), rgba(31,31,34,0.2) 55%, rgba(10,10,11,0.2) 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} width={240} height={240} alt="Revfo logo" />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
