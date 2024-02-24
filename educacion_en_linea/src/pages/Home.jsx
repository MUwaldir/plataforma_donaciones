import React from 'react';
import CourseList from '../components/Course/CourseList';

const Home = ({ importantCourses}) => {
  return (
    <div className="container mx-auto pt-8 bg-blue-500 pb-2">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la Plataforma de Educación en Línea</h1>
      <p className="text-gray-600 mb-4">Explora nuestros cursos y comienza tu viaje de aprendizaje hoy mismo.</p>
      <h2 className="text-3xl font-bold mb-4">Cursos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {importantCourses.map(course => (
          <a key={course.id} href={`courses/course/${course.id}`} className="block">
            <div className="bg-white shadow-lg rounded-md mx-4">
              <img src={course.image} alt={course.title} className="w-full h-auto rounded-md mb-4 " />
              <h3 className="text-lg font-semibold px-2">{course.title}</h3>
              <p className="text-gray-600 px-2">{course.description}</p>
              {/* Aquí podrías agregar más detalles del curso, como el instructor, la duración, etc. */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
