"use client";

import React from "react";

const Map: React.FC = () => {
  return (
    <div className="relative flex justify-center w-full max-w-full mx-auto mb-8 overflow-hidden border-2 border-gray-300 rounded-lg h-80 md:mb-16">
      <iframe
        title="Ubicación de Rosancar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3994370399795!2d-69.3128187!3d10.0782418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767a02e66b28b%3A0xcfae29d7ad1b1f0e!2sRosancar!5e0!3m2!1ses-419!2sve!4v1710000000000!5m2!1ses-419!2sve"
        width="100%"
        height="100%"
        style={{
          zIndex: 3,
          position: "absolute",
          top: 0,
          left: 0,
          padding: "0px",
          borderWidth: "0px",
          margin: "0px",
          touchAction: "pan-x pan-y",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
