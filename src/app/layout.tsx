import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - Automatyzacja procesów biznesowych`,
  description: siteConfig.description.pl,
  keywords: [
    "automatyzacja",
    "n8n",
    "make",
    "zapier",
    "AI",
    "workflow",
    "biznes",
    "procesy",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - Automatyzacja procesów biznesowych`,
    description: siteConfig.description.pl,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Automatyzacja procesów biznesowych`,
    description: siteConfig.description.pl,
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
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
