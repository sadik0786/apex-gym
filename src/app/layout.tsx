import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.business.name,
    type: "website",
    images: [{ url: siteConfig.seo.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{
      "--color-neon": siteConfig.theme.primary,
      "--color-neon-dim": siteConfig.theme.secondary,
      "--color-neon-glow": `${siteConfig.theme.primary}26`, // roughly 15% opacity
    } as React.CSSProperties}>
      <body className={`${poppins.variable} font-sans antialiased bg-dark-bg text-white overflow-x-hidden w-full relative`}>
        {children}
      </body>
    </html>
  );
}
