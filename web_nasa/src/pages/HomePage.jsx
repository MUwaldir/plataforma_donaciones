import React from "react";
import { Link } from "react-router-dom";
import NasaCard from "../components/Layout/NasaCard";
import Pagination from "../components/Layout/Pagination";
import SearchBar from "../components/Layout/SearchBar";

function HomePage({
  filteredNasaData,
  handleSearchChange,
  handleNextPage,
  handlePrevPage,
  handle,
  pagina,
}) {
  console.log(filteredNasaData);

  return (
    <div className="flex-grow w-full">
      <div className="flex flex-col justify-between sm:flex-row  sm:justify-around  items-center h-20">
        <h2 className="text-3xl font-bold mb-4">Camara Curiosity</h2>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          pagina={pagina}
          
        />
        <SearchBar
          placeholder="Buscar por página..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4">
        {filteredNasaData.map((item) => (
          <NasaCard
            key={item.id}
            name_camera={item.camera.name}
            fullname_camera={item.camera.full_name}
            fecha={item.earth_date}
            imageUrl={item.img_src}
            rover_name={item.rover.name}
            estado = {item.rover.status}
          />
        ))}
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pagina={pagina}
      />
    </div>
  );
}

export default HomePage;
