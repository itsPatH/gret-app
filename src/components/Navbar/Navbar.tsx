"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const whatsappLink = "https://wa.me/584121176817";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Evita renderizar en SSR

  return (
    <nav className="fixed top-0 z-50 w-full shadow bg-color5">
      <div className="flex items-center justify-between p-3 mx-auto max-w-7xl">
        <h1 className="font-serif text-2xl text-color2">LOGO</h1>

        <button
          className="md:hidden text-color2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="items-center hidden space-x-4 md:flex">
          <li>
            <Link href="/">
              <span className="font-serif text-color2 hover:text-color4">Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="font-serif text-color2 hover:text-color4">Acerca de mí</span>         
            </Link>
          </li>
          <li>
            <Link href="/location">
              <span className="font-serif text-color2 hover:text-color4">Contacto</span> 
            </Link>
          </li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="text-color2 hover:bg-color4 hover:text-white"
              >
                AGENDA
              </Button>
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center p-4 space-y-4 text-center md:hidden bg-color5">
          <li>
            <Link href="/">
              <span className="block font-serif text-color2 hover:text-color4">Inicio</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="block font-serif text-color2 hover:text-color4">Acerca de mí</span>
            </Link>
          </li>
          <li>
            <Link href="/location">
              <span className="block font-serif text-color2 hover:text-color4">Contacto</span>
            </Link>
          </li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-full text-color2 hover:bg-color4 hover:text-white"
              >
                AGENDA
              </Button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
