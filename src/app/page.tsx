import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

// Same domain fallback as src/app/layout.tsx.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gretpediatra.com";

// Opening hours are intentionally omitted — not yet confirmed. Add an
// "openingHoursSpecification" array here once they're available.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Gretzalid Meléndez",
  image: `${siteUrl}/images/profilephoto.png`,
  url: siteUrl,
  telephone: "+58-412-1176817",
  email: "gretpediatra@gmail.com",
  medicalSpecialty: "Pediatric",
  sameAs: [
    "https://www.instagram.com/gretpediatra",
    "https://www.tiktok.com/@gretzalidmelendez",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "Carrera 31 con Calle 20, Centro Comercial Profesional Rosancar, piso 1",
      addressLocality: "Barquisimeto",
      addressCountry: "VE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Calle 1 entre Avenida 4 y 5, Urbanización La Mata",
      addressLocality: "Cabudare",
      addressCountry: "VE",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="location"><Location /></section>
        <section id="contactform"><ContactForm /></section>
        <section id="footer"><Footer/></section>
      </main>
    </>
  );
}
