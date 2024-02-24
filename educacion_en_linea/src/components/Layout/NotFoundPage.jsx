import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center  bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página no encontrada</h1>
        <p className="text-lg text-gray-600">Lo sentimos, la página que estás buscando no existe.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
