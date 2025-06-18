"use client";

import { SlSocialInstagram } from "react-icons/sl";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";
import { SiGithubsponsors } from "react-icons/si";


const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t dark:border-gray-800 text-gray-800 dark:text-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
      >

        <div className="text-xl font-light text-black dark:text-black">
          Sígueme en mis redes sociales
        </div>

        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/gretpediatra/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <SlSocialInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <FaTiktok />
          </a>
        
        </div>
      </motion.div>

      <div className="border-t dark:border-gray-800 py-4 px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
          <p>
            © {new Date().getFullYear()} Dra. Gretzalid Meléndez. Todos los derechos reservados.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center gap-2">
            Creado por <a href="https://www.instagram.com/itsgabdev/" target="_blank" rel="noopener noreferrer" className=" hover:text-purple-600 dark:hover:text-purple-400">@itsgabdev</a>
            <SiGithubsponsors />
          </p>
        </div>
      </div>

      {showTopButton && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 p-2 bg-transparent hover:bg-purple-300 text-black rounded-full border shadow-lg transition-colors"
        >
          <BiChevronUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
