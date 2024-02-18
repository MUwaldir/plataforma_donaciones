import React, { useState } from "react";
import YouTube from "react-youtube";

const LessonDetail = ({ lesson }) => {
  // Función para extraer el ID del video de YouTube desde la URL
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1];
  };

  const videoId = getYouTubeVideoId(lesson.videoUrl);

  const opts = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div className="relative">
      <h4 className="text-lg font-semibold mb-2">{lesson.title}</h4>
      <p className="text-gray-600 mb-4">{lesson.content}</p>
      <p className="text-gray-600 mb-4">Duración: {lesson.duration}</p>
      {videoId && (
        <div className="w-full h-64 relative">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={_onReady}
            className="w-full h-full absolute inset-0"
          />
          
        </div>
      )}
    </div>
  );
};

export default LessonDetail;
