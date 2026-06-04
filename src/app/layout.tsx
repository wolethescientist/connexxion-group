import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Chatbot } from "@/components/ui/Chatbot";

const clash = localFont({
  variable: "--font-clash",
  display: "swap",
  src: [
    { path: "../../public/fonts/ClashDisplay-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/ClashDisplay-700.woff2", weight: "700", style: "normal" },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "../../public/fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
  ],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0b0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://connexxiongroup.com"),
  title: {
    default: "Connexxion Group — Recreating Tomorrow Today",
    template: "%s · Connexxion Group",
  },
  description:
    "Connexxion Group is a diversified African holding company building the future across Technology, Engineering, Energy, Fintech, Agriculture, Maritime and beyond.",
  keywords: [
    "Connexxion Group",
    "African conglomerate",
    "technology",
    "engineering",
    "energy",
    "fintech",
    "Nigeria",
  ],
  openGraph: {
    title: "Connexxion Group — Recreating Tomorrow Today",
    description:
      "A diversified African holding company building the future across multiple industries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${clash.variable} ${satoshi.variable} ${jbmono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
