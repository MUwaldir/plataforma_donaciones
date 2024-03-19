import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 px-4 h-24 md:h-20 z-50">
      <div className="container mx-auto md:flex h-24 md:h-20  justify-between items-center">
        <div className="w-full md:w-auto ">
          <Link
            className="text-white text-2xl md:text-3xl font-bold font-mono"
            to={"/"}
          >
            Plataforma de Donaciones
          </Link>
        </div>
        <div className="mt-4  md:mt-0 flex justify-between items-center md:items-center md:justify-end">
          <Link className="text-white mr-4" to={"/home"}>
            home
          </Link>
          <Link className="text-white mr-4" to={"/login"}>
            Iniciar Sesión
          </Link>

          <Link className="text-white mr-4" to={"/signup"}>
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
