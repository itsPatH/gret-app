"use client";

import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import clsx from "clsx";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  // "Ubicación" y "Contacto" eran dos entradas para dos secciones que ahora
  // son una sola; dejarlas apuntando al mismo ancla sería confuso.
  const links = [
    { label: "Inicio", to: "hero" },
    { label: "Sobre mí", to: "about" },
    { label: "Visítame", to: "visitame" },
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

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-superficie/90 border-b border-borde transition-all duration-300",
        {
          "-translate-y-full": !showNavbar,
          "translate-y-0": showNavbar,
        }
      )}
    >
      <div className="max-w-l mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-borde">
            <Image
              src="/images/lulu.png"
              alt="Logo Gret Pediatra"
              width={32}
              height={32}
              priority
              className="object-cover"
            />
          </div>
          <span className="text-lg font-normal text-titulo tracking-tight">
            Gret Pediatra
          </span>
        </div>

        {/* Un solo bloque a la derecha: los enlaces se ocultan en móvil, pero
            el botón de tema es único. Con una instancia por breakpoint, cada
            copia llevaba su propio estado y al redimensionar la ventana la
            otra aparecía con el icono y el aria-pressed desfasados. */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                href={`#${link.to}`}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-sm font-medium text-suave hover:text-titulo transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-titulo transition-all duration-200 group-hover:w-full" />
              </ScrollLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
            >
              <span
                className={clsx(
                  "w-5 h-0.5 bg-cuerpo transition-all duration-200",
                  isOpen ? "rotate-45 translate-y-0.5" : ""
                )}
              />
              <span
                className={clsx(
                  "w-5 h-0.5 bg-cuerpo transition-all duration-200 mt-1",
                  isOpen ? "-rotate-45 -translate-y-0.5" : ""
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-superficie/95 backdrop-blur-md border-b border-borde",
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-3">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              href={`#${link.to}`}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-suave hover:text-titulo transition-colors font-medium py-2"
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