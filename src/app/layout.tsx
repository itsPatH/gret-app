import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gret Pediatra",
  description: "Una web para la pediatra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[60vh] lg:w-full lg:pt-2">


          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}