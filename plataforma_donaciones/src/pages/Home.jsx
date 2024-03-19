import React, { useEffect, useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProyectos } from "../redux/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.proyectos);

  useEffect(() => {
    dispatch(fetchProyectos());
  }, []);
console.log(projects)
  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-8">Explora Proyectos</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Home;
