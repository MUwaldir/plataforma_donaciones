import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handle = (destination) => {
    // Agrega la lógica para navegar a la página correspondiente
    console.log(`Navegando a ${destination}`);
  };

  console.log(showMenu)
  return (
    <header className="bg-gray-900 text-white py-4 px-8 w-full flex h-20 items-center justify-between ">
      <h1 className="text-3xl font-bold">
        <Link to={'/'} onClick={() => setShowMenu(false)}>NASA Info App</Link>
      </h1>
      <div className="md:hidden">
        <button className="block" onClick={toggleMenu}>
          { showMenu ? ( 
            /*<svg className="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6m0 12L6 6"/>
          </svg> */
           <svg className="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" d="M6 18 18 6m0 12L6 6"/>
         </svg>
          
          ) : (
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 6h16c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2zm0 5h16c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2zm0 5h16c1.1 0 2 .9 2 2s-.9 2-2 2H4c-1.1 0-2-.9-2-2s.9-2 2-2z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={` md:block ${showMenu ? 'block absolute inset-0 top-20' : 'hidden'}`}>
        <div className=" flex flex-col md:flex-row text-center bg-gray-900 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handle("curiosity")}>Curiosity</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => handle("earth")}>Exterior de la Tierra</button>
          <Link to={`/img_of_day`} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" onClick={() => setShowMenu(false)}>Imagen del Día</Link>
        </div>
        
      </div>
     
      
    </header>
  );
}

export default Header;