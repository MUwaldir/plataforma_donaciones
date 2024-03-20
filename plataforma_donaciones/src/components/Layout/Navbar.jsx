import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-green-900 px-4 h-24 md:h-20 z-50">
      <div className="container mx-auto flex h-24 md:h-20  justify-between items-center">
        <div className="w-full md:w-auto ">
          <Link
            className="text-white text-2xl md:text-3xl font-bold font-mono"
            to={"/"}
          >
            Plataforma de Donaciones
          </Link>
        </div>
        <div className="  md:mt-0 flex justify-between items-center md:items-center md:justify-end">
          <Link className="text-white mr-4 shadow-2xl bg-black p-2 rounded-sm"  to={"/home"}>
            Home
          </Link>
          {/* <Link className="text-white mr-4" to={"/login"}>
            Iniciar Sesión
          </Link>

          <Link className="text-white mr-4" to={"/signup"}>
            Registrarse
          </Link> */}
          <div className="hidden md:flex items-center ">
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white mr-4">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
