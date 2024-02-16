import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto md:flex md:block justify-between items-center">
        <div className="w-full md:w-auto">
          <a href="/" className="text-white text-2xl font-bold">
            Plataforma de Donaciones
          </a>
        </div>
        <div className="mt-4  flex justify-between items-center md:items-center md:justify-end">
          <a href="/login" className="text-white mr-4">
            Iniciar Sesión
          </a>
          <a
            href="/signup"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6"
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
