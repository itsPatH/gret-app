import { FiCalendar, FiMapPin } from "react-icons/fi";
import Image from "next/image";

/**
 * Sin fotografía de fondo. El degradado de atardecer que había aquí era la
 * pieza más genérica del sitio y la fuente del tinte lila de toda la página;
 * el retrato real hace mejor ese trabajo y es material propio.
 *
 * 85vh en lugar de pantalla completa: que asome el borde de la sección
 * siguiente es la señal más barata de que hay más abajo.
 */
const Hero = () => (
  <section className="min-h-[85vh] flex items-center px-6 pt-28 pb-16">
    <div className="max-w-5xl mx-auto w-full grid gap-10 md:gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
      {/* Texto */}
      <div className="order-2 md:order-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-titulo leading-tight">
          Hola, soy la{" "}
          <span className="font-medium">Dra. Gretzalid Meléndez</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-cuerpo font-light leading-relaxed">
          Especialista en pediatría comprometida con el cuidado integral de tu
          pequeño
        </p>

        <div className="mt-9 flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href="https://wa.me/584121176817"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-accion text-accion-texto px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            <FiCalendar className="text-lg transition-transform group-hover:scale-110" />
            Agendar consulta
          </a>

          {/* Ancla normal: html tiene scroll-behavior smooth, así que no hace
              falta convertir el Hero en componente de cliente. */}
          <a
            href="#visitame"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-borde-fuerte text-cuerpo hover:text-titulo hover:border-suave transition-colors font-medium"
          >
            <FiMapPin className="text-lg" />
            Ver ubicaciones
          </a>
        </div>
      </div>

      {/* Retrato, montado como una fotografía: marco blanco, esquinas rectas
          y sombra. El marco es blanco en ambos temas, como lo sería una foto
          de verdad sobre una mesa. */}
      <div className="order-1 md:order-2">
        <figure className="m-0 w-full max-w-sm mx-auto bg-white p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
          <div className="relative aspect-square">
            <Image
              src="/images/profilephoto.jpg"
              alt="Dra. Gretzalid Meléndez"
              fill
              priority
              sizes="(min-width: 768px) 420px, (min-width: 640px) 384px, 90vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </div>
  </section>
);

export default Hero;
