"use client";

import React from 'react';

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <li>{children}</li>;
};

export default NavItem;
