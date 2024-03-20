import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 py-2 text-white  w-full h-32 md:h-20">
      <div className="flex flex-col md:flex-row px-4 md:p-0  md:justify-around  md:items-center">
        <div className="mb-4 md:m-0">
          <p className="text-sm">
            © 2024 Mi Empresa. Todos los derechos reservados.
          </p>

          <p className="text-sm">Teléfono: +1234567890</p>
          <p className="text-sm">Correo electrónico: info@miempresa.com</p>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-lg mr-4">Síguenos en:</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white md:mr-4"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white md:mr-4"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white md:mr-4"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white md:mr-4"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
