"use client";

import { useEffect, useState } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";


export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full py-1 mt-auto bg-color5 text-color2">
      <div className="container flex flex-col items-center max-w-screen-lg px-4 mx-auto text-center md:flex-row md:justify-between md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold text-color2">Gretzalid Meléndez</h2>
          <p className="text-sm">© {year} Todos los derechos reservados.</p>
        </div>

        <div className="flex gap-4">
        <SocialLinks />
        </div>
      </div>
    </footer>
  );
}