import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-900 px-4 h-24 md:h-20 z-50">
      <div className="container mx-auto md:flex h-24 md:h-20  justify-between items-center">
        <div className="w-full md:w-auto ">
          <a href="/" className="text-white text-2xl md:text-3xl font-bold font-mono">
            Plataforma de Donaciones
          </a>
        </div>
        <div className="mt-4  md:mt-0 flex justify-between items-center md:items-center md:justify-end">
          <a href="/login" className="text-white mr-4">
            Iniciar Sesión
          </a>
          <a
            href="/signup"
            className="text-white md:bg-blue-500 hover:bg-blue-600 md:rounded-full py-2 px-6"
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
