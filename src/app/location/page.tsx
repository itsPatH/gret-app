"use client";

import React from "react";
import Map from "../../components/Maps/Map";
import ContactForm from "../../components/Forms/ContactForm";

const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full p-4 pt-4 mt-10 md:p-8 md:pt-8 lg:pt-12 lg:mt-16">
      
  
      <div className="flex flex-col w-full max-w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        
        {/* Formulario de contacto */}
        <div className="w-full p-6 rounded-lg shadow-md md:w-1/2 bg-color5">
          <ContactForm />
        </div>

        {/* Mapa */}
        <div className="w-full md:w-1/2 h-80 md:h-96">
          <h2 className="mb-4 font-serif text-2xl text-justify text-color2">
          Me puedes encontrar en el Centro Comercial ROSANCAR, piso 1, diagonal a Fin de Siglo frente al Centro Comercial ARCA, Carrera 31 con Calle 20, Barquisimeto.
          </h2>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
