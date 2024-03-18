import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 border-b-2 border-indigo-600 border-double hover:bg-sky-200 hover:rounded-md p-1 ">Meta: ${project.goal}</span>
                <a href={`/projects/${project.id}`} className="text-blue-500 hover:underline">Ver Detalles</a>
            </div>
        </div>
    );
}

export default ProjectCard;
