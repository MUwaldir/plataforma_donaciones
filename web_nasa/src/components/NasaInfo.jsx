import React from 'react';

const NasaInfo = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <img src={imageUrl} alt={title} className="rounded-lg" />
    </div>
  );
}

export default NasaInfo;
