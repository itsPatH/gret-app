"use client";

import React from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  return (
    <nav className={`bg-color5 p-4 ${className || ""}`}>
      {children}
    </nav>
  );
};
