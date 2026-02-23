import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aitradingsaas",
  description: "AI Trading SaaS – launch your own AI‑powered trading platform.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dij4v6vtx/image/upload/v1771838976/Gemini_Generated_Image_ro5ow2ro5ow2ro5o-removebg-preview_pmroh6.png",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://readdy.ai/api/public/assistant/widget?projectId=PLACEHOLDER_PROJECT_ID"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
