import React, { useState } from 'react';
import LessonDetail from './LessonDetail';

const LessonList = ({ lessons }) => {
  

    return (
        <div>
            
            {lessons.map((lesson,index) => (
          <ol key={index}>

            <a  href={`/lessondetail/${lesson.id}`}>

            <li key={lesson.id}>{lesson.title}</li>

            </a>
          </ol>
        ))}
          
        </div>
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
        //     {lessons.map((lesson) => (
        //          <LessonDetail
        //          key={lesson.id}
        //          lesson={lesson}
             
        //         />
        //     ))}
        // </div>
    );
}

export default LessonList;
