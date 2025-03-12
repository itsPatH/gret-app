"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="py-6 bg-color5 text-color2">
      <div className="container flex flex-col items-center max-w-screen-lg px-6 mx-auto text-center md:flex-row md:justify-between md:text-left">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-color2">Gretzalid Meléndez</h2>
          <p className="text-sm">© {year} Todos los derechos reservados.</p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="transition-colors duration-300 text-color2 hover:text-color4">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="transition-colors duration-300 text-color2 hover:text-color4">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}