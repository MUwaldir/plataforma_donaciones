import React from 'react';
import ProjectList from '../components/Projects/ProjectList';
// import ProjectList from '../components/Projects/ProjectList';

const Home = () => {
    const projects = [
        { id: 1, title: 'Construyendo Escuelas en África', description: 'Ayúdanos a construir nuevas escuelas para niños en comunidades desfavorecidas.', goal: 5000 },
        { id: 2, title: 'Alimentando a Personas sin Hogar', description: 'Proporciona comidas calientes y apoyo a personas sin hogar en tu comunidad.', goal: 3000 },
        { id: 3, title: 'Protegiendo la Vida Marina', description: 'Apoya nuestros esfuerzos para proteger y conservar la vida marina y los océanos.', goal: 8000 }
    ];

    return (
        <div className="container mx-auto py-8 ">
            <h1 className="text-3xl font-bold mb-8">Explora Proyectos</h1>
            <ProjectList projects={projects} />
        </div>
    );
}

export default Home;
