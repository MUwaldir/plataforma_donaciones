import React from "react";
import { useParams } from "react-router-dom";
import DonationForm from "../components/Donate/DonationForm";

const ProjectDetail = () => {
  const YOUR_GOOGLE_MAPS_API_KEY = "dddddddddddddddddddddddddddd";
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
      <p className="text-gray-600">{project.description}</p>
      <p className="text-gray-600">Meta: ${project.goal}</p>
      <p className="text-gray-600">Fecha de inicio: {project.startDate}</p>
      <p className="text-gray-600">Fecha límite: {project.endDate}</p>
      <p className="text-gray-600">Creado por: {project.creator}</p>
      <p className="text-gray-600">Estado: {project.status}</p>
      <p className="text-gray-600">Categoría: {project.category}</p>
      <p className="text-gray-600">Ubicación: {project.location}</p>
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
        <img
          src="https://www.google.com/maps/d/thumbnail?mid=1u5ohaLlFfL6cQ6LV68zmIgLRCA8&hl=en_US"
          alt="Mapa de ubicación"
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
      </div>
      <DonationForm projectId={project.id} />
    </div>
  );
};

export default ProjectDetail;
