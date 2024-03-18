import React from "react";
import ProjectList from "../components/Projects/ProjectList";
// import ProjectList from '../components/Projects/ProjectList';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Construyendo Escuelas en África",
      description:
        "Ayúdanos a construir nuevas escuelas para niños en comunidades desfavorecidas.",
      goal: 5000,
    },
    {
      id: 2,
      title: "Alimentando a Personas sin Hogar",
      description:
        "Proporciona comidas calientes y apoyo a personas sin hogar en tu comunidad.",
      goal: 3000,
    },
    {
      id: 3,
      title: "Protegiendo la Vida Marina",
      description:
        "Apoya nuestros esfuerzos para proteger y conservar la vida marina y los océanos.",
      goal: 8000,
    },
  ];

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-3xl font-bold mb-8">Explora Proyectos</h1>
      <ProjectList projects={projects} />
      <div className="">
        <h1>ubicacion</h1>
        <iframe
        className="w-full p-20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.960705432335!2d-77.032167887706!3d-12.046224664941947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b447e77c71%3A0x5f6421e9ecda9af7!2sJir%C3%B3n%20de%20la%20Uni%C3%B3n%20s%2Fn%2C%20Lima%2015001!5e0!3m2!1ses!2spe!4v1710611047459!5m2!1ses!2spe"
        //   width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
