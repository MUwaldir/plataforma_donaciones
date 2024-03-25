import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const token = localStorage.getItem('token');
const Navbar = () => {
  const navigate= useNavigate()
  const handleCerrarSesion = () => {
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <nav className="fixed w-full bg-gray-800 shadow-lg h-16 flex items-center z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex items-center">
             
            <Link to="/dashboard" className="text-white font-bold">
              DonacionesApp
            </Link>
       
          </div>

          {/* Menu de navegación */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-4">
              <li>
                <Link to="/dashboard" className="text-white hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/users" className="text-white hover:text-gray-300">
                  Usuarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Botón de inicio de sesión */}
          <div className="flex items-center">
            {token ?
            
            <Link
            onClick={handleCerrarSesion}
              to="/login"
              className="text-white font-semibold bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600"
            >
              cerrar Session
            </Link>
            :
            
            <Link
              to="/login"
              className="text-white font-semibold bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600"
            >
              Iniciar sesión
            </Link>
            }
            {/* <Link
              to="/registro"
              className="text-white font-semibold bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600"
            >
              Registro
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
