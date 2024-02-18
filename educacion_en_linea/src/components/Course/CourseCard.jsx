import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div key={course.id} className="bg-white shadow-lg rounded-md p-4">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
        </div>
    );
}

export default CourseCard;
