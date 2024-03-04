import { useEffect } from "react";
import { useState } from "react";

function ImagenOfDay() {
  const [data, setData] = useState(null);
  const API = "FTv2gz3c7DcSlr9FblUYzW2luWvAImpwfO1rNq36";

  const fetchNasaData = () => {
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchNasaData();
  }, []);

  return (
    <>
      <div className="flex-grow flex flex-col justify-evenly">
        <div>
          <h1 className="text-center text-3xl font-extrabold py-3">
            Imagen del día
          </h1>
        </div>
        {data ? (
          <div className="container mx-auto  h-3/4 px-2">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {data.title}
            </h2>
            {data.url.includes("youtube.com") ? (
              <div className="w-full aspect-w-16 aspect-h-9 ">
                <iframe
                  src={data.url}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                  allowFullScreen
                  className="w-full md:w-1/2 h-64 md:h-80 rounded-md  mx-auto "
                />
                <p className="text-gray-600 mb-4">{data.explanation}</p>
              </div>
            ) : (
              <>
                <img src={data.url} alt={data.title} className="w-full mb-4" />
                <p className="text-gray-600 mb-4">{data.explanation}</p>
                <p className="text-sm italic">{data.copyright}</p>
                <p className="text-sm">Date: {data.date}</p>
              </>
            )}
          </div>
        ) : (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="text-white text-2xl font-bold">Cargando...</div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImagenOfDay;
