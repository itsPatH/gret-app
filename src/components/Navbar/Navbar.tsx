"use client";
import React from "react";
import { Button } from "../ui/button"; 
import NavItem from "@/components/ui/navItem";
import { Navbar } from "@/components/ui/navbar";
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <Navbar className="p-4 shadow bg-color4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <h1 className="font-serif text-2xl text-color2">Gret Pediatra</h1>
        <ul className="flex space-x-4">
          <NavItem>
            <Link href="/" className="font-serif text-color2 hover:text-color1">Inicio</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" className="font-serif text-color2 hover:text-color1">Contacto</Link>
          </NavItem>
          <NavItem>
            <Link href="/about" className="font-serif text-color2 hover:text-color1">Acerca de</Link>
          </NavItem>
          <NavItem>
            <Button variant="outline" className="text-color2 hover:bg-color3 hover:text-white"> 
              Iniciar sesión
            </Button>
          </NavItem>
        </ul>
      </div>
    </Navbar>
  );
};

export default NavBar;
