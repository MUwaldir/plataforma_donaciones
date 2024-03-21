import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectForm from "../components/EdithProject/ProjectForm";
import TestimonialsForm from "../components/EdithProject/TestimonialsForm";
import ContactsForm from "../components/EdithProject/ContactsForm";
import TeamForm from "../components/EdithProject/TeamForm";
import { getProject } from "../utils/utilsProjects";
// import { getProject, updateProject } from '../utils'; // Importa las funciones necesarias para obtener y actualizar el proyecto

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [section, setSection] = useState("project");

  useEffect(() => {
    const fetchProjectData = async (id) => {
      const fetchedProject = await getProject(id);
      setProject(fetchedProject);
    };
    fetchProjectData(id);
}, [id]);
// console.log(project);

//   const handleUpdateProject = async (updatedProject) => {
//     try {
//       //   await updateProject(id, updatedProject);
//       console.log("prject a aactaulizar: " + updatedProject);
//       console.log("Proyecto actualizado exitosamente");
//     } catch (error) {
//       console.error("Error al actualizar el proyecto:", error);
//     }
//   };

  const renderSection = () => {
    switch (section) {
      case "project":
        return Object.keys(project).length > 0 ?(<ProjectForm project={project}  />) :null

      case "testimonials":
        return (
          <TestimonialsForm
            testimonials={project.testimonios}
            
          />
        );
      case "contacts":
        return (
          <ContactsForm
            contacts={project.contactos}
            
          />
        );
      case "team":
        return (
          <TeamForm team={project.equipo}  />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold mb-4">Editar Proyecto</h1>
      {Object.keys(project).length > 0 ? (

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md focus:outline-none focus:bg-gray-300 ${
            section === "project" && "bg-gray-300"
          }`}
          onClick={() => setSection("project")}
        >
          Información General
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none focus:bg-gray-300 ${
            section === "testimonials" && "bg-gray-300"
          }`}
          onClick={() => setSection("testimonials")}
        >
          Testimonios
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none focus:bg-gray-300 ${
            section === "contacts" && "bg-gray-300"
          }`}
          onClick={() => setSection("contacts")}
        >
          Contactos
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none focus:bg-gray-300 ${
            section === "team" && "bg-gray-300"
          }`}
          onClick={() => setSection("team")}
        >
          Equipo
        </button>
      </div>
      ):(<h1>cargando ...</h1>)}
      {renderSection()}
    </div>
  );
};

export default EditProject;
