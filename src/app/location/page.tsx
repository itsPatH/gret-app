"use client";

import React from "react";

const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-6 text-2xl font-bold">Ubicación</h1>
      
      <div className="flex flex-col items-center w-full max-w-4xl md:flex-row md:items-start">
        <div className="w-full p-6 rounded-lg shadow-md bg-color5 md:w-1/3 md:mr-6">
          <p className="text-justify text-color2">
            Encuéntrame en C.C.P ROSANCAR piso 1, diagonal a Fin de Siglo y frente al Centro Comercial ARCA. <br /> Carrera 31 con Calle 20, Barquisimeto.
          </p>
        </div>

        <div className="w-full overflow-hidden border-2 border-gray-300 rounded-lg md:w-2/3 h-96">
          <iframe
            title="Ubicación de Rosancar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3994370399795!2d-69.3128187!3d10.0782418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767a02e66b28b%3A0xcfae29d7ad1b1f0e!2sRosancar!5e0!3m2!1ses-419!2sve!4v1710000000000!5m2!1ses-419!2sve"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;