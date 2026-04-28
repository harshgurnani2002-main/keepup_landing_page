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
  title: "Neurodo | Master Your Time, Ignite Your Potential",
  description: "The unified workspace for habit tracking, task management, and deep focus. Built for consistency and growth.",
  metadataBase: new URL("https://neurodo.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neurodo | Master Your Time, Ignite Your Potential",
    description: "The unified workspace for habit tracking, task management, and deep focus.",
    url: "https://neurodo.me",
    siteName: "Neurodo",
    images: [
      {
        url: "/images/neurodo.png",
        width: 800,
        height: 600,
        alt: "Neurodo Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurodo | Master Your Time, Ignite Your Potential",
    description: "The unified workspace for habit tracking, task management, and deep focus.",
    images: ["/images/neurodo.png"],
  },
  icons: {
    icon: "/images/neurodo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
