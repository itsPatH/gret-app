import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Confirmed production domain; override via NEXT_PUBLIC_SITE_URL for
// staging/local if needed (see .env.example).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gretpediatra.com";

const title = "Gret Pediatra | Dra. Gretzalid Meléndez";
const description =
  "Consulta pediátrica de la Dra. Gretzalid Meléndez en Barquisimeto y Cabudare. Cuidado integral para tu pequeño.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_VE",
    siteName: "Gret Pediatra",
    images: ["/images/profilephoto.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/profilephoto.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Sin cookies y sin identificadores por visitante, así que no
            necesita banner de consentimiento. Solo emite datos cuando la
            app corre en Vercel; en local no hace nada. */}
        <Analytics />
      </body>
    </html>
  );
}
