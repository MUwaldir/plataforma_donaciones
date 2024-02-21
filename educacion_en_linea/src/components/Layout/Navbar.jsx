// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//           <a href="/" className="text-white text-2xl font-bold">Plataforma de Educación en Línea</a>
//         </div>
//         <div className="hidden lg:flex lg:items-center lg:justify-end">
//           <a href="/courses" className="text-white mr-4 hover:text-gray-400">Cursos</a>
//           <a href="/about" className="text-white mr-4 hover:text-gray-400">Acerca de</a>
//           <a href="/contact" className="text-white mr-4 hover:text-gray-400">Contacto</a>
//           <a href="/login" className="text-white mr-4 hover:text-gray-400">Iniciar Sesión</a>
//           <a href="/signup" className="text-white hover:text-gray-400">Registrarse</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// **************************************************
// **************************************************
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegar entre páginas

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to="/" className="text-white text-2xl font-bold">Plataforma de Educación en Línea</Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 overflow-auto z-50 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto pt-4">
            <Link to="/courses" onClick={toggleMenu} className="block text-white mb-4">Cursos</Link>
            <Link to="/about" onClick={toggleMenu} className="block text-white mb-4">Acerca de</Link>
            <Link to="/contact" onClick={toggleMenu} className="block text-white mb-4">Contacto</Link>
            <Link to="/login" onClick={toggleMenu} className="block text-white mb-4">Iniciar Sesión</Link>
            <Link to="/signup" onClick={toggleMenu} className="block text-white">Registrarse</Link>
          </div>
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




