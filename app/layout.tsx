import type { Metadata } from "next";
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
  title: "Binance Turkey Event Scenarios",
  description:
    "Three event activation scenarios for Binance Turkey: gaming, sports and Devconnect.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} bg-binance-charcoal text-binance-text`}>
        {children}
      </body>
    </html>
  );
}
