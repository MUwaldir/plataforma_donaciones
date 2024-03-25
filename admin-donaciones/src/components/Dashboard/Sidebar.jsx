import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiPlusCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importa los iconos según sea necesario

const Sidebar = ({ openSlider, handleOpenSilder }) => {
  return (
    <div
      className={`fixed bg-gray-900 text-white h-screen ${
        openSlider ? "w-16" : "w-64"
      } flex justify-between`}
    >
      <div className="">
        <div className="py-4 px-2">
          {openSlider ? "" : <h2 className="text-2xl font-bold">Admin Dashboard</h2>}
        </div>
        <ul className="flex-1">
          <li className="py-4 px-2">
            <Link
              to="/dashboard"
              className={`flex items-center hover:bg-gray-800 rounded py-2 ${
                openSlider ? "" : "px-4"
              }`}
            >
              <FiHome className="text-xl" />
              {openSlider ? "" : <span>Dashboard</span>}
            </Link>
          </li>
          <li className="py-4 px-2">
            <Link
              to="/users"
              className={`flex items-center hover:bg-gray-800 rounded py-2 ${
                openSlider ? "" : "px-4"
              }`}
            >
              <FiUsers className="text-xl" />
              {openSlider ? "" : <span>Users</span>}
            </Link>
          </li>
          <li className="py-4 px-2">
            <Link
              to="/create-project"
              className={`flex items-center hover:bg-gray-800 rounded py-2 ${
                openSlider ? "" : "px-4"
              }`}
            >
              <FiPlusCircle className="text-xl" />
              {openSlider ? "" : <span>Crear Proyecto</span>}
            </Link>
          </li>
          {/* Agrega más enlaces para otras secciones si es necesario */}
        </ul>
      </div>
      <div className="flex items-center font-bold   ">
        <button type="button" onClick={handleOpenSilder}>
          {openSlider ? <FiChevronRight /> : <FiChevronLeft /> }
          
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
