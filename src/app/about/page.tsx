"use client";

import React from "react";
import Image from "next/image";
import SocialLinks from "@/src/components/SocialLinks/SocialLinks";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 sm:py-12 sm:px-6 md:flex-row md:gap-10 md:py-16 md:px-8 lg:px-12 bg-gradient-to-b from-purple-600 via-indigo-500 to-purple-400">
      <div className="w-full max-w-sm p-4 bg-white border shadow-xl sm:p-6 rounded-xl md:w-80 lg:w-96">
        <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
          <Image
            src="/images/profilephoto.png"
            alt="Dra. Gretzalid Meléndez - Médico cirujano y pediatra"
            width={256}
            height={256}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className="text-xl font-bold text-center text-purple-800 sm:text-2xl md:text-3xl">
          Gretzalid Meléndez
        </h2>
        <p className="mt-3 text-base text-center text-purple-600 sm:mt-4 sm:text-lg md:text-xl">
          MÉDICO CIRUJANO CON ESPECIALIDAD EN PEDIATRÍA
        </p>
        <div className="flex justify-center p-2 mt-4 bg-white shadow-md sm:mt-6 rounded-xl">
          <SocialLinks />
        </div>
      </div>

      <div className="w-full max-w-lg mt-6 text-center md:text-left md:mt-0 lg:max-w-2xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Conóceme
        </h2>
        <div className="mt-4 space-y-4 text-base text-white sm:mt-6 sm:text-lg md:text-xl lg:text-2xl">
          <p className="leading-relaxed">
            Soy Médico Cirujano egresada de la Universidad Centroccidental Lisandro Alvarado (UCLA), 
            mención <i>magna cum laude</i>, con especialidad en Pediatría del Hospital Universitario 
            Pediátrico Dr. Agustín Zubillaga. Además, soy docente en la UCLA y adjunta del Servicio 
            de Neonatología en el HCUAMP.
          </p>
          <p className="leading-relaxed">
            Fuera del hospital, me apasiona la educación médica y la creación de contenido educativo 
            sobre salud infantil en mi canal de TikTok y cuenta de Instagram, donde ofrezco consejos 
            sobre el bienestar y cuidado de los niños.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
