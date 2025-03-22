import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { JSX } from "react";

interface SocialLink {
  href: string;
  icon: JSX.Element; 
}

const socialLinks: SocialLink[] = [
  { href: "https://www.tiktok.com/@gretzalidmelendez", icon: <FaTiktok size={24} /> },
  { href: "https://www.threads.net/@gretpediatra", icon: <FaThreads size={24} /> },
  { href: "https://www.instagram.com/gretpediatra/", icon: <FaInstagram size={24} /> },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 text-color2 hover:text-color4"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
