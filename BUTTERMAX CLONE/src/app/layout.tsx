import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Buttermax — The Gold Standard in Buttery Smooth Digital Production",
  description: "Explore Buttermax: Your Gateway to Buttery Smooth Digital Experiences. Award-winning creative development, 3D WebGL, and brand flagships.",
  openGraph: {
    title: "Buttermax — Digital Studio",
    description: "The Gold Standard in Buttery Smooth Digital Production",
    url: "https://buttermax.net",
    siteName: "Buttermax",
    images: [
      {
        url: "https://storage.googleapis.com/bx-site-cms/media/ogImage.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-dark-950 text-white antialiased min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
