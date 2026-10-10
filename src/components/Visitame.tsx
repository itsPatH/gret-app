import Location from "./Location";
import ContactForm from "./ContactForm/ContactForm";

/**
 * Dos columnas con encabezado propio cada una. Ubicaciones y contacto siguen
 * en la misma sección —responden a la misma pregunta y por separado empujaban
 * el formulario hasta 3,4 pantallas de scroll— pero cada bloque se lee como
 * lo que es en lugar de compartir un título común.
 */
const Visitame = () => (
  <section className="py-12 px-6">
    <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-14">
      <div>
        <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-3">
          Visítame
        </h2>
        <div className="w-16 h-px bg-borde-fuerte mb-8"></div>
        <Location />
      </div>

      {/* Las dos columnas se estiran a la misma altura y el formulario la
          rellena, así que en escritorio termina a ras de la última dirección. */}
      <div className="flex flex-col">
        <h2 className="text-3xl sm:text-4xl font-light text-titulo mb-3">
          Contáctame
        </h2>
        <div className="w-16 h-px bg-borde-fuerte mb-8"></div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Visitame;
