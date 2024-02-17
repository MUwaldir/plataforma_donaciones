import React from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../components/Donate/DonationForm";

const ProjectDetail = () => {
//   const YOUR_GOOGLE_MAPS_API_KEY = "dddddddddddddddddddddddddddd";
  // Obtener el ID del proyecto de los parámetros de la URL
  const { id } = useParams();

  // Simular datos del proyecto usando el ID
  const project = {
    id: id,
    title: "Construyendo Escuelas en África",
    description:
      "Ayúdanos a construir nuevas escuelas para niños en comunidades desfavorecidas.",
    goal: 5000,
    startDate: "01/01/2024",
    endDate: "31/12/2024",
    creator: "Organización sin fines de lucro XYZ",
    status: "En progreso",
    category: "Educación",
    location: "África",
    images: [
      "https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9628111/pexels-photo-9628111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/9628112/pexels-photo-9628112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{project.title}</h1>
      {/* <div className="bg-slate-300 p-4 rounded-sm flex flex-wrap justify-between">
  <p className="text-gray-800 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">
    Descripción:
  </p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.description}</p>
  <p className="text-blue-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Meta:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">${project.goal}</p>
  <p className="text-green-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Fecha de inicio:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.startDate}</p>
  <p className="text-red-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Fecha límite:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.endDate}</p>
  <p className="text-purple-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Creado por:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.creator}</p>
  <p className="text-yellow-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Estado:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.status}</p>
  <p className="text-indigo-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Categoría:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.category}</p>
  <p className="text-pink-600 font-bold w-full md:w-1/2 lg:w-1/3 mb-2">Ubicación:</p>
  <p className="text-gray-600 w-full md:w-1/2 lg:w-2/3 mb-2">{project.location}</p>
</div> */}
  <div className=" bg-gray-800 rounded-md mb-4 text-center p-3">
    <p className="text-white font-bold text-left ps-3">Descripción:</p>
    <p className="text-white text-2xl">{project.description}</p>
  </div>
<div className="bg-slate-200 p-4 rounded-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>
    <p className="text-blue-600 font-bold">Meta:</p>
    <p className="text-gray-600">${project.goal}</p>
  </div>
  <div>
    <p className="text-green-600 font-bold">Fecha de inicio:</p>
    <p className="text-gray-600">{project.startDate}</p>
  </div>
  <div>
    <p className="text-red-600 font-bold">Fecha límite:</p>
    <p className="text-gray-600">{project.endDate}</p>
  </div>
  <div>
    <p className="text-purple-600 font-bold">Creado por:</p>
    <p className="text-gray-600">{project.creator}</p>
  </div>
  <div>
    <p className="text-yellow-600 font-bold">Estado:</p>
    <p className="text-gray-600">{project.status}</p>
  </div>
  <div>
    <p className="text-indigo-600 font-bold">Categoría:</p>
    <p className="text-gray-600">{project.category}</p>
  </div>
  <div>
    <p className="text-pink-600 font-bold">Ubicación:</p>
    <p className="text-gray-600">{project.location}</p>
  </div>
</div>

      <div className="flex flex-wrap justify-center mt-4">
        {project.images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Imagen ${index + 1}`}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-1 rounded-md"
          />
        ))}
      </div>

      <div className="mt-8">
        {/* Agregar el mapa de Google Maps */}
        {/* Reemplaza 'YOUR_GOOGLE_MAPS_API_KEY' con tu clave de API */}
        {/* <iframe
                    title="Mapa de ubicación"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=${YOUR_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(project.location)}`}
                    allowFullScreen
                ></iframe> */}
        {/* <img
          src="https://www.google.com/maps/d/thumbnail?mid=1u5ohaLlFfL6cQ6LV68zmIgLRCA8&hl=en_US"
          alt="Mapa de ubicación"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        /> */}
        <p><iframe id="map-canvas"  className="w-full" width="600"  height="450"   scrolling="no"  src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=africa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com">google maps embed</a> and <a href="https://utaninkomst.se/">sms lån direkt utbetalning utan inkomst</a></iframe></p>
      </div>
      <DonationForm projectId={project.id} />
    </div>
  );
};

export default ProjectDetail;
