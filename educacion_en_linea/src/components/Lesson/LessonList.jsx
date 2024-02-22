import React, { useState } from "react";
import LessonDetail from "./LessonDetail";

const LessonList = ({ lessons }) => {
  return (
    <div className="">
      <ol className="list-decimal list-inside">
        {lessons.map((lesson) => (
          <li key={lesson.id}className="my-2" >
            <a className="hover:text-2xl hover:text-slate-900 hover:font-bold " href={`/lessondetail/${lesson.id}`}>{lesson.title}</a>
          </li>
        ))}
      </ol>
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
};

export default LessonList;
