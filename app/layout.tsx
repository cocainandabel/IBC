import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "American Fortress, Asia Market Strategy",
  description: "IBC 90-day Korea and China go-to-market strategy for American Fortress ($AF).",
  metadataBase: new URL("https://binance-tr-scenarios.vercel.app"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} bg-fortress-base text-fortress-text`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
