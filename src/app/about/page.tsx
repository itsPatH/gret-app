"use client";

import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 md:flex-row md:gap-10">
      {/* Imagen de la doctora */}
      <div className="w-48 h-48 overflow-hidden border-4 rounded-full shadow-lg border-color4">
        <Image
          src="/images/doctora.jpg" // Ruta de la imagen (ajústala según tu proyecto)
          alt="Dra. Nombre Apellido"
          width={192}
          height={192}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Biografía */}
      <div className="max-w-lg mt-6 text-center md:text-left md:mt-0">
        <h2 className="text-3xl font-bold text-color2">Dra. Nombre Apellido</h2>
        <p className="mt-4 text-lg text-color3">
        Médico cirujano egresada de la Universidad Centroccidental Lisandro Alvarado (UCLA), con mención <i>magna cum laude</i>. Especialista en Pediatría en el Hospital Universitario Pediátrico Dr. Agustín Zubillaga. Docente en la UCLA y adjunta del Servicio de Neonatología del HCUAMP.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
