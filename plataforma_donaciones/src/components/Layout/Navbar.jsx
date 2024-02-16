import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className={ `container mx-auto flex justify-between items-center ${
            isOpen ? "flex-col" : "block"
          } `}>
        <div>
          <a href="/" className="text-white text-2xl font-bold">
            Plataforma de Donaciones
          </a>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center lg:justify-end ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="/login" className="text-white mr-4 lg:inline">
            Iniciar Sesión
          </a>
          <a
            href="/signup"
            className="text-white bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6 lg:inline"
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
