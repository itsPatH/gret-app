"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/lulu.png"
        alt="Lulu Logo"
        width={40}
        height={50}
        className="object-contain"
      />
      <span className="text-2xl font-bold tracking-wide font-['Baloo_2'] text-color2 hover:text-color4">
        GRET PEDIATRA
      </span>
    </Link>
  );
};

export default Logo;
