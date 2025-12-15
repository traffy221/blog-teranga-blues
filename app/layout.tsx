import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

// Google Fonts - Elegant Typography
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "#221 Blog | Réflexions & Société",
  description: "Réflexions personnelles sur la vie, la société, et les questions qui nous touchent profondément.",
  keywords: ["blog", "réflexions", "société", "vie", "philosophie"],
  authors: [{ name: "Traffy" }],
  openGraph: {
    title: "#221 Blog",
    description: "La vie c'est comme un piano...",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <CommandPalette />
      </body>
    </html>
  );
}
