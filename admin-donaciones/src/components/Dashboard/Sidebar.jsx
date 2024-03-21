// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUsers } from 'react-icons/fi'; // Importa los iconos según sea necesario

const Sidebar = () => {
  return (
    <div className= "fixed bg-gray-900 text-white h-screen w-64 flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      <ul className="flex-1">
        <li className="p-4">
          <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-gray-800 rounded py-2 px-4">
            <FiHome className="text-xl" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="p-4">
          <Link to="/users" className="flex items-center space-x-2 hover:bg-gray-800 rounded py-2 px-4">
            <FiUsers className="text-xl" />
            <span>Users</span>
          </Link>
        </li>
        {/* Agrega más enlaces para otras secciones si es necesario */}
      </ul>
    </div>
  );
};

export default Sidebar;
