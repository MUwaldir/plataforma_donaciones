import React from 'react';

const NasaCard = ({ name_camera,rover_name,fecha, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{name_camera}</h2>
      {/* <p className="text-gray-700 mb-4">{description}</p> */}
      <h3>{fecha}</h3>
      <p>{rover_name}</p>
      <img src={imageUrl} alt={name_camera} className="rounded-lg" />
    </div>
  );
}

export default NasaCard;
