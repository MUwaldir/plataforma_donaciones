import React from 'react';
import CourseList from '../components/Course/CourseList';

const Courses = ({ courses }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Todos los Cursos</h2>
    
        <CourseList courses={courses}/>
        
      
    </div>
  );
}

export default Courses;
