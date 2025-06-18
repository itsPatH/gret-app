"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { label: "Inicio", to: "hero" },
    { label: "Sobre mí", to: "about" },
    { label: "Ubicación", to: "location" },
  
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300",
        {
          "-translate-y-full": !showNavbar,
          "translate-y-0": showNavbar,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/lulu.png"
            alt="Logo Gret Pediatra"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-purple-700">
            Gret Pediatra
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="text-purple-700 text-2xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white shadow-md">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
