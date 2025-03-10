"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-color5 text-color2">
      <div className="container flex flex-col items-center justify-between px-6 mx-auto md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-color2">Gretzalid Meléndez</h2>
          <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>

        <div className="flex mt-4 space-x-4 md:mt-0">
          <a href="#" className="text-color2 hover:text-color4"><FaFacebook size={20} /></a>
          <a href="#" className="text-color2 hover:text-color4"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
