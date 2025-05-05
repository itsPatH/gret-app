"use client";

import React from "react";

const Map: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Ubicación Centro de Especialidades Médicas ID */}
      <div className="relative w-full max-w-full mx-auto overflow-hidden border-2 border-gray-300 rounded-lg">
        <h2 className="p-4 text-lg font-semibold text-center text-gray-700">
          Centro de Especialidades Médicas ID - Cabudare
        </h2>
        <iframe
          title="Ubicación del Centro de Especialidades Médicas ID"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7103963783793!2d-69.2855015!3d10.0504037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767254d556abf%3A0xfae18d489e891733!2sCentro%20de%20Especialidades%20M%C3%A9dicas%20ID!5e0!3m2!1ses-419!2sve!4v1714770000000!5m2!1ses-419!2sve"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Ubicación Rosancar */}
      <div className="relative w-full max-w-full mx-auto overflow-hidden border-2 border-gray-300 rounded-lg">
        <h2 className="p-4 text-lg font-semibold text-center text-gray-700">
          Rosancar
        </h2>
        <iframe
          title="Ubicación de Rosancar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3994370399795!2d-69.3128187!3d10.0782418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767a02e66b28b%3A0xcfae29d7ad1b1f0e!2sRosancar!5e0!3m2!1ses-419!2sve!4v1710000000000!5m2!1ses-419!2sve"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;