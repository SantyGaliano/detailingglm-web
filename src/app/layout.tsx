import type { Metadata } from "next";

import {
  Bebas_Neue,
  Inter,
  Geist,
} from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

import { cn } from "@/lib/utils";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import CustomCursor from "@/components/effects/CustomCursor";
import WhatsAppWidget from "@/components/widgets/WhatsAppWidget";

import BookingModal from "@/components/modals/BookingModal";
import SuccessModal from "@/components/modals/SuccessModal";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

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

    <html
      lang="es"
      className={cn(
        "font-sans",
        geist.variable
      )}
    >

      <body
        className={`${bebas.variable} ${inter.variable} antialiased`}
      >

        <CustomCursor />

        <WhatsAppWidget />

        <Header />

        {children}

        <Footer />

        <BookingModal />

        <SuccessModal />

        <Toaster
          position="top-right"
          richColors
          theme="dark"
        />

      </body>

    </html>

  );

}