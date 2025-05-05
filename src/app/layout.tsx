import React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gret Pediatra | Consulta Pediátrica Especializada",
  description: "Consulta pediátrica especializada ofreciendo atención personalizada y profesional para el cuidado de la salud de tus hijos.",
  keywords: ["pediatra", "consulta pediátrica", "salud infantil", "pediatría"],
  authors: [{ name: "Gret Pediatra" }],
  openGraph: {
    title: "Gret Pediatra | Consulta Pediátrica Especializada",
    description: "Consulta pediátrica especializada ofreciendo atención personalizada y profesional para el cuidado de la salud de tus hijos.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gret Pediatra | Consulta Pediátrica Especializada",
    description: "Consulta pediátrica especializada ofreciendo atención personalizada y profesional para el cuidado de la salud de tus hijos.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="flex flex-col items-center justify-between min-h-screen sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-[100vh] w-full pt-0">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
