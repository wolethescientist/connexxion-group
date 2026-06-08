import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Chatbot } from "@/components/ui/Chatbot";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Cursive script used for the emerald accent words
const script = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
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
    default: "Connexxion Group — Recreating Africa's Tomorrow Today",
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
    title: "Connexxion Group — Recreating Africa's Tomorrow Today",
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
      className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} ${script.variable}`}
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
