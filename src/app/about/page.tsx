"use client";

import Image from "next/image";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 pt-20 md:flex-row md:gap-10 md:py-16 bg-gradient-to-b from-purple-600 via-indigo-500 to-purple-400">
      <div className="w-full max-w-sm p-6 bg-white border shadow-xl rounded-xl md:w-80">
        <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full md:w-64 md:h-64">
          <Image
            src="/images/profilephoto.png"
            alt="Dra. Gretzalid Meléndez - Médico cirujano y pediatra"
            width={256}
            height={256}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-purple-800">
          Gretzalid Meléndez
        </h2>
        <p className="mt-4 text-lg text-center text-purple-600">
          MÉDICO CIRUJANO CON ESPECIALIDAD EN PEDIATRÍA
        </p>
        <div className="flex justify-center p-2 mt-6 bg-white shadow-md rounded-xl">
          <SocialLinks />
        </div>
      </div>

      <div className="max-w-lg mt-6 text-center md:text-left md:mt-0">
        <h2 className="text-3xl font-bold text-white">
          Conóceme
        </h2>
        <p className="mt-4 text-lg text-white">
  Soy Médico Cirujano egresada de la Universidad Centroccidental Lisandro Alvarado (UCLA), mención <i>magna cum laude</i>, con especialidad en Pediatría del Hospital Universitario Pediátrico Dr. Agustín Zubillaga. Además, soy docente en la UCLA y adjunta del Servicio de Neonatología en el HCUAMP.
  <br /><br />
  Fuera del hospital, me apasiona la educación médica y la creación de contenido educativo sobre salud infantil en mi canal de TikTok y cuenta de Instagram, donde ofrezco consejos sobre el bienestar y cuidado de los niños.
</p>

      </div>
    </section>
  );
};

export default AboutMe;
