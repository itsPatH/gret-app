import { FiInstagram } from "react-icons/fi";

const About = () => (
  <div className="w-full bg-white py-20 px-4 sm:px-8 text-gray-800">
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-purple-700 drop-shadow-lg">
        Conóceme
      </h1>

      <p className="max-w-4xl mx-auto mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-black text-justify px-4 sm:px-0">
        Soy <strong>Gretzalid Meléndez</strong>, médico egresada de la Universidad Centroccidental Lisandro Alvarado con mención <em>magna cum laude</em>. 
        Me especialicé en Pediatría en el Hospital Universitario Pediátrico Dr. Agustín Zubillaga. 
        Actualmente, soy docente en la <strong>UCLA</strong> y miembro del equipo del Servicio de Neonatología del <strong>HCUAMP</strong>, donde contribuyo al cuidado de los más pequeños desde sus primeros días de vida.
      </p>

      <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto mt-12">
        {/* Imagen preview Instagram */}
        <a
          href="https://www.instagram.com/gretpediatra"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full sm:w-48 h-48 sm:h-auto overflow-hidden shrink-0"
          aria-label="Instagram Gretzalid Meléndez"
        >
          <img
            src="/images/carousel3.jpg"
            alt="Vista previa Instagram Gretzalid Meléndez"
            className="w-full h-full object-cover"
          />
        </a>

        {/* Texto info */}
        <div className="p-6 flex flex-col justify-center text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center sm:justify-start gap-2 text-purple-700">
            <FiInstagram className="text-3xl" /> Sígueme en Instagram y conoce a Lulú 🐸
          </h2>
          <p className="text-base text-gray-600 max-w-md">
            Sígueme para acceder a podcasts informativos sobre pediatría, consejos de salud infantil, y mucho más. Actualizaciones semanales y contenido confiable para el cuidado de tus pequeños.
          </p>
          <a
            href="https://www.instagram.com/gretpediatra"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-5 py-2 bg-purple-700 text-white rounded-full shadow hover:bg-purple-600 transition-colors font-semibold cursor-pointer"
          >
            Ir a Instagram
          </a>
        </div>
      </div>
      
    </div>
  </div>
);

export default About;
