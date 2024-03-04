import React from "react";
import { useState } from "react";
import Imagen from "./Imagen";

const NasaCard = ({
  name_camera,
  fullname_camera,
  rover_name,
  fecha,
  imageUrl,
  estado,
}) => {

  const [showFullScreen, setShowFullScreen] = useState(false);
 

  const handleImgClick = () => {
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    // <div className="bg-white rounded-lg shadow-md p-4">
    //   <h2 className="text-xl font-semibold mb-2">{name_camera}</h2>
    //   {/* <p className="text-gray-700 mb-4">{description}</p> */}
    //   <h3>{fecha}</h3>
    //   <p>{rover_name}</p>
    //   <img src={imageUrl} alt={name_camera} className="rounded-lg" />
    // </div>
    <>
     {showFullScreen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-90 " >
          {/* <img src={imageUrl} alt="Imagen completa" className="max-h-full max-w-full"  /> */}
          <Imagen imageUrl={imageUrl} close={handleCloseFullScreen} />
        </div>
        
      )}
    <div className="max-w-sm rounded overflow-hidden  shadow-xl my-2 bg-slate-200 hover:scale-110 hover:text-white hover:bg-zinc-600">
      <img
        className="w-full h-40"
        src={imageUrl}
        alt="Sunset in the mountains"
        onClick={handleImgClick}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name_camera}</div>
        <p className=" text-base ">{fullname_camera}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {fecha}
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {rover_name}
        </span>
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {estado}
        </span>
      </div>
    </div>
    </>
  );
};

export default NasaCard;
