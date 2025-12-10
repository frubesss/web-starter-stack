import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Providers from "./providers";
import React from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "NPM Upgrade Assistant",
  applicationCategory: "DeveloperApplication",
  url: "https://npm-upgrade-assistant.com",
  description:
    "Analyse breaking changes and migration steps when upgrading npm packages — concise, actionable insights.",
  inLanguage: "en",
  operatingSystem: "Any",
} as const;

export const metadata: Metadata = {
  metadataBase: "https://npm-upgrade-assistant.com",
  title: {
    default: "NPM Upgrade Assistant",
    template: "%s · NPM Upgrade Assistant",
  },
  description:
    "Analyse breaking changes and migration steps when upgrading npm packages — concise, actionable insights.",
  applicationName: "NPM Upgrade Assistant",
  authors: [{ name: "Craig Robertson" }],
  keywords: [
    "npm",
    "upgrade",
    "assistant",
    "breaking changes",
    "migration",
    "changelog",
    "dependencies",
    "javascript",
    "typescript",
    "node.js",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "NPM Upgrade Assistant",
    description:
      "Quickly understand breaking changes and migration steps for npm package upgrades.",
    type: "website",
    url: "https://npm-upgrade-assistant.com",
    siteName: "NPM Upgrade Assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "NPM Upgrade Assistant",
    description:
      "Actionable insights for upgrading npm packages: breaking changes, migration steps, and new features.",
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
