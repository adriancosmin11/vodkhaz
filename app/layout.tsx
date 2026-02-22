import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VODKHAZ — Gust Tropical, Spirit Intens | Vodcă Premium",
  description:
    "VODKHAZ Green — vodcă premium, distilată cu grijă pentru un gust autentic. Ideală servită rece sau în cocktailuri. 40% Vol, 700ml.",
  keywords: ["vodka", "premium", "tropical", "VODKHAZ", "green", "cocktails", "România"],
  openGraph: {
    title: "VODKHAZ — Gust Tropical, Spirit Intens",
    description: "Vodcă Premium · Green Party Edition · 700ml · 40% Vol",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
