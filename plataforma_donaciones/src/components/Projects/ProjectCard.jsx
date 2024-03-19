import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 m-4">
            <h2 className="text-xl font-bold">{project.titulo}</h2>
            <p className="text-gray-600">{project.descripcion}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 border-b-2 border-indigo-600 border-double hover:bg-sky-200 hover:rounded-md p-1 ">Meta: ${project.monto_meta}</span>
                <Link to={`/projects/${project._id}`}className="text-blue-500 hover:underline">Ver Detalles</Link>
                
            </div>
        </div>
    );
}

export default ProjectCard;
