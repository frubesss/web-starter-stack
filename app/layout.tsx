import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Providers from "./providers";
import React from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "update type",
  name: "update",
  applicationCategory: "update",
  url: "update",
  description: "update",
  inLanguage: "en",
  operatingSystem: "Any",
} as const;

export const metadata: Metadata = {
  metadataBase: "update",
  title: {
    default: "update",
    template: "update",
  },
  description: "update",
  applicationName: "update",
  authors: [{ name: "update" }],
  keywords: ["update"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "update",
    description: "update",
    type: "website",
    url: "update",
    siteName: "update",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script id="ld-json-webapp" type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </Script>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
