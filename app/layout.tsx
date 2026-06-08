import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndiaData — Explore India's States",
  description: "A modern dashboard to explore Indian states and districts data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise-bg antialiased">{children}</body>
    </html>
  );
}
