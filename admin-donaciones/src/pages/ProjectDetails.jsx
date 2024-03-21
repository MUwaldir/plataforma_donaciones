import React, { useEffect, useState } from "react";
import { getProject } from "../utils/utilsProjects";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    const fetchProject = async (id) => {
      const fetchProject = await getProject(id); // Llama a la función para obtener el proyexto

      setProject(fetchProject);
    };
    fetchProject(id);
  }, [id]);

//   console.log(project);
  return (
    <>
      {Object.keys(project).length > 0 ? (
        <div className="container mx-auto py-8 mt-16">
          <h1 className="text-3xl font-bold mb-8">{project.titulo}</h1>
          <Link
            to={`/projectedit/${project._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Editar
          </Link>
          <div className="bg-gray-100 rounded-md p-4 mb-8">
            <p className="text-lg font-bold mb-2">Descripción:</p>
            <p>{project.descripcion}</p>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {project.imagenes.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Imagen ${index + 1}`}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 m-1 rounded-md"
              />
            ))}
          </div>
          <div className="max-w-4xl mx-auto p-4 mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Categoría:</h2>
              <p>{project.categoria.nombre}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Organización:</h2>
              <p>{project.organizacion}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Ubicación:</h2>
              <p>{project.ubicacion.direccion}</p>
              <p>Latitud: {project.ubicacion.latitud}</p>
              <p>Longitud: {project.ubicacion.longitud}</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-4 mb-8">
            <h2 className="text-xl font-bold mb-4">Testimonios:</h2>
            {project.testimonios.map((testimonio, index) => (
              <div key={index} className="mb-4">
                <p>{testimonio.nombre}</p>
                <p>{testimonio.contenido}</p>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Contacto:</h2>
            {project.contactos.map((contacto, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{contacto.tipo}:</p>
                <p>{contacto.valor}</p>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Representantes:</h2>
            {project.equipo.map((miembro, index) => (
              <div key={index} className="mb-4">
                <p className="font-bold">{miembro.nombre}</p>
                <p>Cargo: {miembro.cargo}</p>
                <p>{miembro.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-16">
          <p>cargando ...</p>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
