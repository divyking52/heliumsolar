import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import { SITE, ASSETS } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solar Company In Kanpur, UP | Helium Solar Since 2012",
  description:
    "Delivering high-performance rooftop solar systems, commercial solar installations, and industrial solar power solutions across India since 2012.",
  metadataBase: new URL(SITE.url),
  icons: {
    icon: ASSETS.favicon,
  },
  openGraph: {
    title: "Solar Company In Kanpur, UP | Helium Solar Since 2012",
    description:
      "India's Trusted Solar EPC Company Since 2012. Delivering high-performance solar solutions across India.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
