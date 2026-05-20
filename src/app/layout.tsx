import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex Gym | Train Hard. Become Unstoppable.",
  description: "Experience premium, state-of-the-art training facilities, elite level trainers, and high-performance membership plans at Apex Gym. Push your limits today.",
  keywords: ["gym", "fitness", "personal training", "elite coaches", "luxury fitness", "weight training", "cardio", "fat loss", "Apex Gym"],
  openGraph: {
    title: "Apex Gym | Train Hard. Become Unstoppable.",
    description: "Premium fitness experience designed to push your limits. Join elite trainers and active members today.",
    siteName: "Apex Gym",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-dark-bg text-white overflow-x-hidden w-full relative`}>
        {children}
      </body>
    </html>
  );
}
