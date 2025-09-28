"use client";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import clsx from "clsx";
import ContactForm from "./ContactForm/ContactForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { label: "Inicio", to: "hero" },
    { label: "Sobre mí", to: "about" },
    { label: "Ubicación", to: "location" },
    {label: "Contacto", to: "contactform" },
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
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-100 transition-all duration-300",
        {
          "-translate-y-full": !showNavbar,
          "translate-y-0": showNavbar,
        }
      )}
    >
      <div className="max-w-l mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-100">
            <Image
              src="/images/lulu.png"
              alt="Logo Gret Pediatra"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <span className="text-lg font-normal text-gray-900 tracking-tight">
            Gret Pediatra
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-200 group-hover:w-full" />
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
        >
          <span
            className={clsx(
              "w-5 h-0.5 bg-gray-700 transition-all duration-200",
              isOpen ? "rotate-45 translate-y-0.5" : ""
            )}
          />
          <span
            className={clsx(
              "w-5 h-0.5 bg-gray-700 transition-all duration-200 mt-1",
              isOpen ? "-rotate-45 -translate-y-0.5" : ""
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-100",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-3">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;