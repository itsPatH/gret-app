import { IoLocationOutline, IoNavigateOutline } from "react-icons/io5";
import Image from "next/image";

const Location = () => (
  <section className="relative py-24 px-6 overflow-hidden">
    {/* Background with overlay */}
    <Image
      src="/images/background-extended.jpg"
      alt=""
      fill
      sizes="100vw"
      loading="lazy"
      className="object-cover"
    />
    {/* El velo arrancaba en white/10, que aclaraba un mural ya de por sí
        claro: el texto blanco quedaba en 1.16:1 sobre las zonas de cielo.
        Con este degradado el h2 mide 4.98:1 y el subtítulo 5.4:1. */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/60 to-black/70" />
    
    <div className="relative z-10 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
          Ubicaciones
        </h2>
        <div className="w-16 h-px bg-white/40 mx-auto"></div>
        <p className="text-white mt-6 font-light">
          Encuentra la consulta más cercana a ti
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid gap-8 md:gap-12">
        
        {/* Barquisimeto */}
        <div className="group">
          <div className="bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-black/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <IoLocationOutline className="text-2xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Barquisimeto
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Carrera 31 con Calle 20<br />
                    Centro Comercial Profesional Rosancar, piso 1
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Profesional+Rosancar+Barquisimeto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium group/btn"
                >
                  <IoNavigateOutline className="text-sm transition-transform group-hover/btn:rotate-12" />
                  Ver ubicación
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Cabudare */}
        <div className="group">
          <div className="bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-black/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <IoLocationOutline className="text-2xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Cabudare
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    Calle 1 entre Avenida 4 y 5<br />
                    Urbanización La Mata
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Urbanización+La+Mata+Cabudare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium group/btn"
                >
                  <IoNavigateOutline className="text-sm transition-transform group-hover/btn:rotate-12" />
                  Ver ubicación
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Decorative element */}
      <div className="flex justify-center mt-16">
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/60"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </div>

    </div>
  </section>
);

export default Location;