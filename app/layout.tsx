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
  title: "Pocket Director AI — AI Product Photography & UGC Video Generator",
  description:
    "Upload one product photo and get 8 professional variations — white background, lifestyle, luxury, and more — in under 4 minutes. Starting at $15.20/month with 200 free credits, no credit card required.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pocket Director AI",
  url: "https://pocketdirectorai.com",
  description:
    "AI product photography and UGC video generation platform for e-commerce brands. Generate 8 professional product photos and UGC-style videos from a single product upload in under 4 minutes.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
