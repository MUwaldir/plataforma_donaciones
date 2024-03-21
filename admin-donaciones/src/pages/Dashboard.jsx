import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import Sidebar from "../components/Dashboard/Sidebar";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("http://localhost:3001/api/getprojects");
      const data = await response.json();
      setProjects(data);
    };
    getProjects();
  }, []);
  return (
    
      <div className="container flex-grow  mt-16 ">
        <div className="flex relative">
          <Sidebar />
          <div className="ml-4 flex-1">
            <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
