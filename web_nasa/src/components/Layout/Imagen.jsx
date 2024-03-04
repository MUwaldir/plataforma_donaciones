import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Imagen = ({ imageUrl, close }) => {
    const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startPosition.x;
      const deltaY = event.clientY - startPosition.y;
      setPosition({ x: position.x + deltaX, y: position.y + deltaY });
      setStartPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheelZoom = (event) => {
    const delta = event.deltaY > 0 ? -0.1 : 0.1;
    setZoom((prevZoom) => Math.max(0.5, prevZoom + delta));
  };

  const handleDoubleClickZoom = () => {
    setZoom((prevZoom) => (prevZoom === 1 ? 2 : 1));
  };
  return (
    // <div className="relative w-full h-full">
    //   <div
    //     className="w-full h-full bg-cover bg-center"
    //     style={{ backgroundImage: `url(${imageUrl})` }}
    //   >
    //     <img
    //       src={imageUrl}
    //       alt="A image to apply the ImageZoom plugin"
    //       className="opacity-0 w-full h-full hover:opacity-100 transition-opacity duration-300"
    //     />
    //   </div>
    //   <button
    //     className="text-white absolute top-0 right-0 z-10 bg-black w-10 h-10 flex justify-center items-center"
    //     onClick={close}
    //   >
    //     x
    //   </button>
    // </div>
    <div
    className="fixed inset-0 flex justify-center items-center bg-black"
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onWheel={handleWheelZoom}
    onDoubleClick={handleDoubleClickZoom}
  >
    <img
      ref={imageRef}
      src={imageUrl}
      alt="Zoomable Image"
      className="max-h-full max-w-full cursor-move"
      style={{
        transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
      }}
    />
     <button
        className="text-white absolute top-0 right-0 z-10 bg-black w-10 h-10 flex justify-center items-center"
        onClick={close}
      >
        x
      </button>
  </div>
  );
};

export default Imagen;
