import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/cn";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const SITE_URL = process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://revfo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Revfo — A growth engine for appointment-based businesses",
    template: "%s | Revfo",
  },
  description:
    "We build your website, run your SEO, and bring in your reviews. One bundle. Done for you. Get to the top of Google.",
  keywords: [
    "local SEO",
    "appointment-based business",
    "Google reviews",
    "website builder",
    "med spa marketing",
    "dental marketing",
    "local search",
  ],
  authors: [{ name: "Revfo" }],
  creator: "Revfo",
  publisher: "Revfo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Revfo — A growth engine for appointment-based businesses",
    description:
      "Websites, SEO, and reviews. One bundle. Done for you. Get to the top of Google.",
    siteName: "Revfo",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revfo — A growth engine for appointment-based businesses",
    description:
      "Websites, SEO, and reviews. One bundle. Done for you. Get to the top of Google.",
    creator: "@revfo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revfo",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  sameAs: [
    "https://twitter.com/revfo",
    "https://www.linkedin.com/company/revfo",
  ],
  description:
    "A growth engine for appointment-based businesses. Websites, local SEO, and review generation, bundled.",
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Revfo Full Engine",
  description:
    "Bundled website, local SEO, and automated review generation for appointment-based businesses.",
  brand: { "@type": "Brand", name: "Revfo" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "499",
    highPrice: "2499",
    offerCount: 3,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        instrumentSerif.variable,
      )}
    >
      <body className="bg-ink text-paper antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </body>
    </html>
  );
}
