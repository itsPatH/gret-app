import { FiInstagram, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { Aparecer } from "./Movimiento";
import Recorrido from "./Recorrido";

/**
 * Título a la izquierda, como en Visítame, y la tarjeta de Instagram en
 * horizontal desde sm. Con la foto encima, la tarjeta medía 480 px junto a
 * 190 px de biografía y dejaba un hueco de 300 px bajo el texto; tumbada
 * mide lo mismo que la biografía y la foto, que es vertical, se recorta menos.
 */
const About = () => (
  <section className="py-12 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-3">
        Sobre mí
      </h2>
      <div className="w-16 h-px bg-borde-fuerte mb-8"></div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Biografía: una frase de entrada y el recorrido en tres etapas */}
        <Aparecer className="space-y-8">
          <p className="text-2xl leading-snug font-light text-titulo">
            Soy <span className="font-medium">Gretzalid Meléndez</span> y cuido
            a los más pequeños desde sus primeros días de vida.
          </p>

          <Recorrido />
        </Aparecer>

        {/* Instagram, un instante después que la biografía */}
        <Aparecer
          retraso={0.08}
          className="flex flex-col sm:flex-row bg-superficie rounded-lg overflow-hidden shadow-sm border border-borde"
        >
          <a
            href="https://www.instagram.com/gretpediatra"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/3] sm:aspect-auto sm:w-2/5 sm:min-h-64 shrink-0 overflow-hidden"
          >
            {/* En móvil va encima en un hueco 4:3 y centrada le cortaría la
                cabeza, de ahí el 27%. Tumbada, el hueco es casi tan alto como
                ancho y el mismo encuadre sirve. */}
            <Image
              src="/images/instagram.jpg"
              alt="La Dra. Gretzalid Meléndez con un bebé en brazos, frente al mural de la consulta"
              fill
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, calc(100vw - 3rem)"
              loading="lazy"
              className="object-cover object-[50%_27%] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 w-10 h-10 bg-superficie/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiExternalLink className="text-cuerpo text-sm" />
            </div>
          </a>

          <div className="p-6 flex flex-col justify-center gap-4">
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
              className="self-start inline-flex items-center gap-2 px-5 py-2.5 bg-accion text-accion-texto rounded-full hover:opacity-90 transition-opacity font-medium text-sm group"
            >
              Visitar perfil
              <FiExternalLink className="text-sm transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Aparecer>
      </div>
    </div>
  </section>
);

export default About;
