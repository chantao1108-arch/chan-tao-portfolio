import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chan Tao — AI Product & UX Analyst",
  description:
    "AI product and UX analyst portfolio featuring editorial AI prototypes, narrative systems, and analytics case studies.",
  openGraph: {
    title: "Chan Tao — AI Product & UX Analyst",
    description:
      "AI product and UX analyst portfolio featuring editorial AI prototypes, narrative systems, and analytics case studies.",
    type: "website",
    url: "https://chan-tao-portfolio.vercel.app",
    siteName: "Chan Tao Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-slate-950">{children}</body>
    </html>
  );
}
