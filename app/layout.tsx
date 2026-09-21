import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { offer } from "@/data/offer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: offer.meta.title,
  description: offer.meta.description,
  metadataBase: new URL("https://ibc-saar-growth-package.vercel.app"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-saar-base text-saar-text`}>
        {children}
      </body>
    </html>
  );
}
