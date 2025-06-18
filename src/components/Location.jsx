import { IoLocationOutline } from "react-icons/io5";

const Location = () => (
  <div
    className="py-36 px-6 sm:px-10 text-center text-white bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: 'url("/images/background-extended.png")',
    }}
  >
    <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-xl mb-14">
     Ubicaciones
    </h2>

    <div className="flex flex-col gap-12 items-center max-w-5xl mx-auto">

      {/* Barquisimeto */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 text-left w-full max-w-2xl bg-white/90 backdrop-blur-md border-l-4 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <IoLocationOutline className="text-4xl text-purple-700 mt-1 shrink-0" />
        <div className="flex flex-col gap-3">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            <strong>Barquisimeto:</strong> Carrera 31 con Calle 20. Centro Comercial Profesional Rosancar, piso 1.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Centro+Comercial+Profesional+Rosancar+Barquisimeto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-max"
          >
            <button className="px-5 py-2.5 bg-purple-700 text-white rounded-full shadow hover:bg-purple-600 transition-all duration-300 text-sm sm:text-base cursor-pointer">
              🗺️ Ver en Google Maps
            </button>
          </a>
        </div>
      </div>

      {/* Cabudare */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7 text-left w-full max-w-2xl bg-white/90 backdrop-blur-md border-l-4 border-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <IoLocationOutline className="text-4xl text-purple-700 mt-1 shrink-0" />
        <div className="flex flex-col gap-3">
          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            <strong>Cabudare:</strong> Calle 1 entre Avenida 4 y 5. Urbanización La Mata.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Urbanización+La+Mata+Cabudare"
            target="_blank"
            rel="noopener noreferrer"
            className="w-max"
          >
            <button className="px-5 py-2.5 bg-purple-700 text-white rounded-full shadow hover:bg-purple-600 transition-all duration-300 text-sm sm:text-base cursor-pointer">
              🗺️ Ver en Google Maps
            </button>
          </a>
        </div>
      </div>

    </div>
  </div>
);

export default Location;
