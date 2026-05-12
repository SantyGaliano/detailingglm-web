import type { Metadata } from "next";
import { Bebas_Neue, Inter, Geist } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "detailingg.lm",
  description: "Premium Car Detailing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body
        className={`${bebas.variable} ${inter.variable} antialiased`}
      >
        {children}

        <Toaster
  position="top-right"
  richColors
  theme="dark"
/>
      </body>
    </html>
  );
}