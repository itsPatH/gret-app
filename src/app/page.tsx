import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="location"><Location /></section>
        <section id="footer"><Footer/></section>
      </main>
    </>
  );
}
