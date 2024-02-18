import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-white text-2xl font-bold">Plataforma de Educación en Línea</a>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <a href="/courses" className="text-white mr-4 hover:text-gray-400">Cursos</a>
          <a href="/about" className="text-white mr-4 hover:text-gray-400">Acerca de</a>
          <a href="/contact" className="text-white mr-4 hover:text-gray-400">Contacto</a>
          <a href="/login" className="text-white mr-4 hover:text-gray-400">Iniciar Sesión</a>
          <a href="/signup" className="text-white hover:text-gray-400">Registrarse</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
