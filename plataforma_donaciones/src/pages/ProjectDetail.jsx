import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../components/Donate/DonationForm";
import { useEffect } from "react";
const URL_API = "http://localhost:3001/api/project/"
const ProjectDetail = () => {
  const { id } = useParams();
  const [dataProject, setDataProject] = useState([]);
  const [dataImages, setDataImages] = useState([]);
 


  useEffect(() => {
    const getDataProject = async (id) => {
      try {
        
        const response = await fetch(URL_API+id)
        const data =await response.json();
        setDataProject(data);
        setDataImages(data.images)
      } catch (error) {
        console.error(error)
      }
    };

    getDataProject('2024')
  }, []);



  return (
    <div className="container mx-auto py-8 bg-green-500">
      <h1 className="text-3xl text-white font-bold ml-8 mb-8">{dataProject.title}</h1>

      <div className=" bg-slate-200 rounded-md mb-4 text-center p-3">
        {/* <p className="text-black font-bold text-left ps-3">Descripción:</p> */}
        <p className="text-black text-2xl">{dataProject.description}</p>
      </div>
      <div className="bg-slate-200 p-4 rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        <div>
          <p className="text-blue-600 font-bold">Meta:</p>
          <p className="text-gray-600">${dataProject.goal}</p>
        </div>
        <div>
          <p className="text-green-600 font-bold">Fecha de inicio:</p>
          <p className="text-gray-600">{dataProject.startDate}</p>
        </div>
        <div>
          <p className="text-red-600 font-bold">Fecha límite:</p>
          <p className="text-gray-600">{dataProject.endDate}</p>
        </div>
        <div>
          <p className="text-purple-600 font-bold">Creado por:</p>
          <p className="text-gray-600">{dataProject.creator}</p>
        </div>
        <div>
          <p className="text-yellow-600 font-bold">Estado:</p>
          <p className="text-gray-600">{dataProject.status}</p>
        </div>
        <div>
          <p className="text-indigo-600 font-bold">Categoría:</p>
          <p className="text-gray-600">{dataProject.category}</p>
        </div>
        <div>
          <p className="text-pink-600 font-bold">Ubicación:</p>
          <p className="text-gray-600">{dataProject.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        {dataImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-1 rounded-md"
          />
        ))}
      </div>

      <div className="my-8 md:m-8">
        {/* Agregar el mapa de Google Maps */}
        <p>
          <iframe
            id="map-canvas"
            className="w-full"
            width="600"
            height="450"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=africa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            Powered by{" "}
            <a href="https://www.googlemapsgenerator.com">google maps embed</a>{" "}
            and{" "}
            <a href="https://utaninkomst.se/">
              sms lån direkt utbetalning utan inkomst
            </a>
          </iframe>
        </p>
      </div>
      <DonationForm nombre={dataProject.title} description={dataProject.description} id={id} />
    </div>
  );
};

export default ProjectDetail;
