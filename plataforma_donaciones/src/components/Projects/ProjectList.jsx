import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  // console.log("dfsd");
  // console.log(projects);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      {projects && projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
