import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Free stand-ins for the brand's Maison Neue (sans) and Maison Neue Mono
// (display). Swap these two imports to change the typefaces site-wide.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wtf.basta.app"),
  title: {
    default: "Basta — Buy and sell through auction",
    template: "%s — Basta",
  },
  description:
    "Basta is an out of the box auctions platform made for anyone with something to auction. Launch easily in weeks, not months.",
  openGraph: {
    title: "Basta — Buy and sell through auction",
    description:
      "An out of the box auctions platform built for fast and easy setup.",
    url: "https://wtf.basta.app",
    siteName: "Basta",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
