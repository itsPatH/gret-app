import { FiCalendar } from "react-icons/fi";

const Hero = () => (
  <div
    className="min-h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center bg-no-repeat pt-24 px-6 py-12"
    style={{ backgroundImage: 'url("/images/formbackground.jpg")' }}
  >
    <img
      src="/images/profilephoto.png"
      alt="Dra. Gretzalid Meléndez"
      className="rounded-full mb-8 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover shadow-2xl"
    />

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
      Dra. Gretzalid Meléndez
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold text-white drop-shadow-md">
      Pediatra
    </p>

    <a
      href="https://wa.me/584121176817"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10"
    >
      <button className="flex items-center gap-4 bg-white text-gray-900 px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition duration-300 text-lg sm:text-xl cursor-pointer font-semibold drop-shadow-md">
        <FiCalendar className="text-2xl sm:text-3xl" />
        Agenda tu hora acá
      </button>
    </a>
  </div>
);

export default Hero;
