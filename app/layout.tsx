import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freight Africa \u2014 Africa's Digital Freight Marketplace",
  description:
    "Freight Africa connects available trucks with freight across the continent. Post loads, find trucks, and move cargo across Africa's major trade corridors.",
  keywords: [
    "Freight Africa",
    "freight marketplace",
    "truck load board Africa",
    "cross-border logistics",
    "African freight exchange",
  ],
  openGraph: {
    title: "Freight Africa \u2014 Africa's Digital Freight Marketplace",
    description:
      "Connecting available trucks with freight across Africa. Post loads, find trucks, move cargo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-canvas font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
