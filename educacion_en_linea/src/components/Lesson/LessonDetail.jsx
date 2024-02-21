import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
const lessons = [
  {
    id: 1,
    title: "Introducción al Álgebra",
    duration: "2 horas",
    videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU",
    content: {
      introduction:
        "¡Bienvenido a esta sesión introductoria sobre álgebra! En esta lección, exploraremos los conceptos básicos del álgebra y su importancia en las matemáticas y otras disciplinas.",
      definition: {
        title: "Definición de Álgebra",
        description:
          "El álgebra es una rama de las matemáticas que estudia las relaciones y las operaciones aritméticas utilizando variables y símbolos en lugar de números concretos.",
      },
      variablesAndConstants: {
        title: "Variables y Constantes",
        description:
          "En álgebra, las letras se utilizan para representar cantidades desconocidas o variables. Las constantes son valores fijos que no cambian, como los números concretos.",
      },
      algebraicExpressions: {
        title: "Expresiones Algebraicas",
        description:
          "Una expresión algebraica es una combinación de variables, constantes y operadores matemáticos.",
      },
      equationsAndInequalities: {
        title: "Ecuaciones y Desigualdades",
        description:
          "Una ecuación algebraica es una expresión que establece una igualdad entre dos expresiones algebraicas. Las desigualdades algebraicas establecen una relación de orden entre dos expresiones algebraicas.",
      },
    },
    images: [
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 1",
      },
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 2",
      },
    ],
  },
  {
    id: 2,
    title: "Introducción al Álgebra",
    duration: "2 horas",
    videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU",
    content: {
      introduction:
        "¡Bienvenido a esta sesión introductoria sobre álgebra! En esta lección, exploraremos los conceptos básicos del álgebra y su importancia en las matemáticas y otras disciplinas.",
      definition: {
        title: "Definición de Álgebra",
        description:
          "El álgebra es una rama de las matemáticas que estudia las relaciones y las operaciones aritméticas utilizando variables y símbolos en lugar de números concretos.",
      },
      variablesAndConstants: {
        title: "Variables y Constantes",
        description:
          "En álgebra, las letras se utilizan para representar cantidades desconocidas o variables. Las constantes son valores fijos que no cambian, como los números concretos.",
      },
      algebraicExpressions: {
        title: "Expresiones Algebraicas",
        description:
          "Una expresión algebraica es una combinación de variables, constantes y operadores matemáticos.",
      },
      equationsAndInequalities: {
        title: "Ecuaciones y Desigualdades",
        description:
          "Una ecuación algebraica es una expresión que establece una igualdad entre dos expresiones algebraicas. Las desigualdades algebraicas establecen una relación de orden entre dos expresiones algebraicas.",
      },
    },
    images: [
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description:
          "Descripción de la imagen 1 ... Descripción de la imagen 1 Descripción de la imagen 1 Descripción de la imagen 1 Descripción de la imagen 1",
      },
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 2",
      },
    ],
  },

  {
    id: 3,
    title: "Lección 3 de Matemáticas",
    content: {
      introduction:
        "¡Bienvenido a esta sesión introductoria sobre álgebra! En esta lección, exploraremos los conceptos básicos del álgebra y su importancia en las matemáticas y otras disciplinas.",
      definition: {
        title: "Definición de Álgebra",
        description:
          "El álgebra es una rama de las matemáticas que estudia las relaciones y las operaciones aritméticas utilizando variables y símbolos en lugar de números concretos.",
      },
      variablesAndConstants: {
        title: "Variables y Constantes",
        description:
          "En álgebra, las letras se utilizan para representar cantidades desconocidas o variables. Las constantes son valores fijos que no cambian, como los números concretos.",
      },
      algebraicExpressions: {
        title: "Expresiones Algebraicas",
        description:
          "Una expresión algebraica es una combinación de variables, constantes y operadores matemáticos.",
      },
      equationsAndInequalities: {
        title: "Ecuaciones y Desigualdades",
        description:
          "Una ecuación algebraica es una expresión que establece una igualdad entre dos expresiones algebraicas. Las desigualdades algebraicas establecen una relación de orden entre dos expresiones algebraicas.",
      },
    },
    images: [
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 1",
      },
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 2",
      },
    ],
    duration: "1.5 horas",
    videoUrl: "https://www.youtube.com/watch?v=ATHRCTVBI2M", // Agrega la URL del video para la lección 2
  },
  {
    id: 4,
    title: "Lección 4 de Matemáticas",
    content: {
      introduction:
        "¡Bienvenido a esta sesión introductoria sobre álgebra! En esta lección, exploraremos los conceptos básicos del álgebra y su importancia en las matemáticas y otras disciplinas.",
      definition: {
        title: "Definición de Álgebra",
        description:
          "El álgebra es una rama de las matemáticas que estudia las relaciones y las operaciones aritméticas utilizando variables y símbolos en lugar de números concretos.",
      },
      variablesAndConstants: {
        title: "Variables y Constantes",
        description:
          "En álgebra, las letras se utilizan para representar cantidades desconocidas o variables. Las constantes son valores fijos que no cambian, como los números concretos.",
      },
      algebraicExpressions: {
        title: "Expresiones Algebraicas",
        description:
          "Una expresión algebraica es una combinación de variables, constantes y operadores matemáticos.",
      },
      equationsAndInequalities: {
        title: "Ecuaciones y Desigualdades",
        description:
          "Una ecuación algebraica es una expresión que establece una igualdad entre dos expresiones algebraicas. Las desigualdades algebraicas establecen una relación de orden entre dos expresiones algebraicas.",
      },
    },
    images: [
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 1",
      },
      {
        url: "https://media.gcflearnfree.org/content/5d289a0017bf4859ec68b350_07_12_2019/Expresiones%20algebraicas.png",
        description: "Descripción de la imagen 2",
      },
    ],
    duration: "2 horas",
    videoUrl: "https://www.youtube.com/watch?v=9XV9OSnF8gU", // Agrega la URL del video para la lección 1
  },
];
const LessonDetail = () => {
  const { id } = useParams();

  // Función para extraer el ID del video de YouTube desde la URL
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };
  const lesson = lessons.find((l) => l.id === parseInt(id));

  const videoId = getYouTubeVideoId(lesson.videoUrl);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };

  // Obtener el índice de la lección actual
  const currentIndex = lessons.findIndex((l) => l.id === lesson.id);
  console.log(currentIndex);
  // Manejar el clic en el botón "Siguiente lección"
  const handleNextLesson = () => {
    // Verificar si hay una próxima lección disponible
    if (currentIndex < lessons.length - 1) {
      // Obtener el ID de la próxima lección
      const nextLessonId = lessons[currentIndex + 1].id;
      // Construir la URL de la próxima lección
      const nextLessonUrl = `/lessondetail/${nextLessonId}`;
      return nextLessonUrl;
    } else {
      // No hacer nada si no hay más lecciones disponibles

      // Construir la URL de la próxima lección

      return null;
    }
  };
  const handleBackLesson = () => {
    // Verificar si hay una próxima lección disponible
    if (currentIndex < lessons.length && currentIndex > 0) {
      // Obtener el ID de la próxima lección
      const backLessonId = lessons[currentIndex - 1].id;
      // Construir la URL de la próxima lección
      const backLessonUrl = `/lessondetail/${backLessonId}`;
      return backLessonUrl;
    } else {
      // No hacer nada si no hay más lecciones disponibles

      // Construir la URL de la próxima lección

      return null;
    }
  };

  const backLessonUrl = handleBackLesson();

  const nextLessonUrl = handleNextLesson();

  return (
    <div className="lesson-detail-container p-6 bg-sky-200">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p>Duración: {lesson.duration}</p>

      <div className="lesson-content mt-4">
        <h2 className="text-2xl font-bold mb-2">Introducción</h2>
        <p className="text-gray-700 mb-4">{lesson.content.introduction}</p>

        <h2 className="text-2xl font-bold mb-2">
          {lesson.content.definition.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {lesson.content.definition.description}
        </p>

        <h2 className="text-2xl font-bold mb-2">
          {lesson.content.variablesAndConstants.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {lesson.content.variablesAndConstants.description}
        </p>

        {/* Agrega más secciones de contenido según sea necesario */}

        <h2 className="text-2xl font-bold mb-2">Imágenes</h2>
        <div className="image-gallery grid grid-cols-1 md:grid-cols-2   gap-4 ">
          {lesson.images.map((image, index) => (
            <div key={index} className="mb-4 bg-slate-400  rounded-lg ">
              <img
                src={image.url}
                alt={image.description}
                className="w-full rounded-lg"
              />
              <p className="text-gray-700 mt-2 p-2">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
      {videoId && (
        <div className=" aspect-w-16 aspect-h-9 flex justify-center mt-4 ">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={_onReady}
            className=" inset-0 w-full h-full md:w-1/2 sm:h-80"
          />
        </div>
      )}

      <div className="flex justify-between">
        {nextLessonUrl && (
          <Link
            to={nextLessonUrl}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Siguiente Lección
          </Link>
        )}
        {backLessonUrl && (
          <Link
            to={backLessonUrl}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 righ-5 "
          >
            Anterior Lección
          </Link>
        )}
      </div>
    </div>
    // <div className=" w-full p-4 bg-white rounded-lg shadow-md ">
    //   <h4 className="text-lg font-semibold mb-2">{lesson.title}</h4>
    //   <p className="text-gray-600 mb-4">{lesson.content}</p>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
    //     quaerat harum voluptates qui architecto, dolorem, nemo tempore modi
    //     repudiandae, commodi autem. Dicta quos placeat cum aut tempore delectus
    //     dolor autem.
    //   </p>
    //   <p className="text-gray-600 mb-4">Duración: {lesson.duration}</p>

    //   <div className="flex justify-center">

    //   {videoId && (
    //     <div className=" aspect-w-16 aspect-h-9 md:w-1/2 ">
    //       <YouTube
    //         videoId={videoId}
    //         opts={opts}
    //         onReady={_onReady}
    //         className=" inset-0 w-full h-full "
    //       />
    //     </div>
    //   )}
    //   </div>
    // </div>
  );
};

export default LessonDetail;
