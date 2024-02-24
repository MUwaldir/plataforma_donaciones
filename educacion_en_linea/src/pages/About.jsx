import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-blue-500 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Acerca de Nosotros</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Ruta de la imagen de tu elección
            alt="About Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg text-white mb-4 text-justify  ">
            En nuestra plataforma de educación en línea, nos dedicamos a proporcionar acceso a
            contenido educativo de calidad en una amplia variedad de temas. Ya sea que estés
            buscando mejorar tus habilidades existentes, explorar nuevos intereses o prepararte
            para una carrera, tenemos recursos para ti.
          </p>
          <p className="text-lg text-white mb-4 text-justify">
            Nuestros cursos están diseñados por expertos en el campo y cubren una variedad de
            disciplinas, desde matemáticas y ciencias hasta arte y música. Utilizamos tecnología
            de vanguardia para ofrecer una experiencia de aprendizaje interactiva y enriquecedora.
          </p>
          <p className="text-lg text-white mb-4  text-justify">
            ¡Únete a nuestra comunidad de estudiantes y comienza tu viaje de aprendizaje hoy mismo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
