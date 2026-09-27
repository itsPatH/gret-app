import { FiInstagram, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

/**
 * Antes la biografía y la tarjeta de Instagram iban apiladas: 170 px de texto
 * y 473 px de tarjeta dentro de una sección de 1020 px. En dos columnas cabe
 * lo mismo en poco más de media pantalla.
 */
const About = () => (
  <section className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-4">
          Sobre mí
        </h2>
        <div className="w-16 h-px bg-borde-fuerte mx-auto"></div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-start">
        {/* Biografía */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-cuerpo font-light">
            Soy{" "}
            <span className="font-medium text-titulo">Gretzalid Meléndez</span>,
            médico egresada de la Universidad Centroccidental Lisandro Alvarado
            con mención <em className="text-suave">magna cum laude</em>. Me
            especialicé en Pediatría en el Hospital Universitario Pediátrico Dr.
            Agustín Zubillaga.
          </p>

          <p className="text-lg leading-relaxed text-cuerpo font-light">
            Actualmente, soy docente en la{" "}
            <span className="font-medium text-titulo">UCLA</span> y pediatra
            adjunto de la Policlínica de Cabudare, donde contribuyo al cuidado
            de los más pequeños desde sus primeros días de vida.
          </p>
        </div>

        {/* Instagram */}
        <div className="bg-superficie rounded-lg overflow-hidden shadow-sm border border-borde">
          <a
            href="https://www.instagram.com/gretpediatra"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/carousel3.jpg"
              alt="Vista previa Instagram"
              fill
              sizes="(min-width: 768px) 420px, calc(100vw - 3rem)"
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 w-10 h-10 bg-superficie/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiExternalLink className="text-cuerpo text-sm" />
            </div>
          </a>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 shrink-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FiInstagram className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-titulo leading-tight">
                  Sígueme en Instagram
                </h3>
                <p className="text-sm text-suave">@gretpediatra</p>
              </div>
            </div>

            <p className="text-cuerpo leading-relaxed text-sm">
              Contenido educativo sobre pediatría, consejos de salud infantil y
              Lulú 🐸.
            </p>

            <a
              href="https://www.instagram.com/gretpediatra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accion text-accion-texto rounded-full hover:opacity-90 transition-opacity font-medium text-sm group"
            >
              Visitar perfil
              <FiExternalLink className="text-sm transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
