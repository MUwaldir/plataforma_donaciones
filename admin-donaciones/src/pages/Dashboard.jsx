import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import Sidebar from "../components/Dashboard/Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ openSlider, handleOpenSilder }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("http://localhost:3001/api/getprojects",{
        method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      });
      const data = await response.json();
      if(data.message ==="Token no válido"){
        localStorage.removeItem("token");
        navigate('/login')
      }
      console.log(data);
      setProjects(data);
    };
    getProjects();
  }, []);
  const handleDeleteProject = async (id) => {
    const response = await fetch(
      `http://localhost:3001/api/deleteproyecto/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    if (data.message) {
      const proyectosActualizados = await projects.filter((p) => p._id !== id);
      setProjects(proyectosActualizados);
    }
  };

  return (
    <div className="container flex-grow mt-16">
      <div className="flex relative">
        <Sidebar openSlider={openSlider} handleOpenSilder={handleOpenSilder} />
        <div className={`${openSlider ? "ml-20":"ml-64"} flex flex-col `}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Proyectos</h2>
          
          </div>
          <ProjectList
            projects={projects}
            handleDeleteProject={handleDeleteProject}
          
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
