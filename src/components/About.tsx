import { FiInstagram, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const About = () => (
  <section className="py-24 px-6 bg-gradient-to-b from-fondo-alt to-fondo">
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-4">
          Sobre mí
        </h2>
        <div className="w-16 h-px bg-borde-fuerte mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="space-y-16">
        
        {/* Bio Section */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-cuerpo font-light text-justify">
            Soy{" "}
            <span className="font-medium text-titulo">Gretzalid Meléndez</span>,
            médico egresada de la Universidad Centroccidental Lisandro Alvarado con mención{" "}
            <em className="text-suave">magna cum laude</em>.
            Me especialicé en Pediatría en el Hospital Universitario Pediátrico Dr. Agustín Zubillaga.
          </p>
          
          <p className="text-lg leading-relaxed text-cuerpo font-light mt-6 text-justify">
            Actualmente, soy docente en la{" "}
            <span className="font-medium text-titulo">UCLA</span> y pediatra adjunto
            de la Policlínica de Cabudare, donde contribuyo al cuidado de los más pequeños 
            desde sus primeros días de vida.
          </p>
        </div>

        {/* Instagram Section */}
        <div className="bg-superficie rounded-3xl p-8 sm:p-10 shadow-sm border border-borde">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative group overflow-hidden rounded-2xl aspect-square">
                <Image
                  src="/images/carousel3.jpg"
                  alt="Vista previa Instagram"
                  fill
                  sizes="(min-width: 768px) 400px, calc(100vw - 7rem)"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiExternalLink className="text-gray-700 text-sm" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <FiInstagram className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-titulo">
                    Sígueme en Instagram
                  </h3>
                  <p className="text-sm text-suave">@gretpediatra</p>
                </div>
              </div>
              
              <p className="text-cuerpo leading-relaxed">
                Accede a contenido educativo sobre pediatría, consejos de salud infantil 
                y conoce a Lulú 🐸. Actualizaciones regulares con información confiable 
                para el cuidado de tus pequeños.
              </p>

              <a
                href="https://www.instagram.com/gretpediatra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accion text-accion-texto rounded-full hover:opacity-90 transition-opacity font-medium group"
              >
                Visitar perfil
                <FiExternalLink className="text-sm transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

export default About;