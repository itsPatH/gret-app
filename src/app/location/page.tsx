"use client";

import React from "react";
import Map from "@/src/components/Maps/Map";
import ContactForm from "@/src/components/Forms/ContactForm";

const LocationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full p-1 pb-24 mt-10 md:p-8 md:pt-8 lg:pt-12 lg:mt-1"> {/* Espacio suficiente para evitar el solapamiento con el footer */}
      <div className="flex flex-col w-full max-w-full space-y-8 md:flex-row md:space-y-0 md:space-x-8">
  
        <div className="w-full p-6 rounded-lg shadow-md md:w-1/2">
          <ContactForm />
        </div>

        <div className="w-full md:w-1/2">
        <h1 className="mb-4 font-serif text-2xl font-semibold text-center text-color2">
            Encuéntrame aquí
            </h1>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
