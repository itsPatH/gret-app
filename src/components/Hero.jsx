import { FiCalendar } from "react-icons/fi";

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background with overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/formbackground.jpg")' }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
    
    {/* Content */}
    <div className="relative z-10 mx-auto px-10 pt-20 text-center">
      {/* Profile Image */}
      <div className="mb-12">
        <div className="relative inline-block">
          <img
            src="/images/profilephoto.png"
            alt="Dra. Gretzalid Meléndez"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto shadow-2xl ring-4 ring-white/20"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/10" />
        </div>
      </div>

      {/* Text Content */}
      <div className="mb-12 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
          Hola, soy la{" "}
          <span className="font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Dra. Gretzalid Meléndez
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light leading-relaxed w-full">
          Especialista en pediatría comprometida con el cuidado integral de tu pequeño
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <a
          href="https://wa.me/584121176817"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105"
        >
          <FiCalendar className="text-xl transition-transform group-hover:scale-110" />
          Agendar Consulta
        </a>
      </div>
    </div>

  </section>
);

export default Hero;