import NasaCard from "../components/Layout/NasaCard";
import Pagination from "../components/Layout/Pagination";
import SearchBar from "../components/Layout/SearchBar";

function HomePage({filteredNasaData,handleSearchChange,handleNextPage,handlePrevPage,handle,pagina}) {
  console.log(filteredNasaData);
    return ( 
        <div className="flex-grow  py-8">
        <h2 className="text-3xl font-bold mb-4">NASA Información</h2>
        <SearchBar placeholder="Buscar por pagina..." onChange={handleSearchChange} />
        <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        pagina={pagina}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {filteredNasaData.map((item) => (
            <NasaCard
              key={item.id}
              name_camera={item.camera.full_name}
              fecha={item.earth_date}
              // description={item.description}
              imageUrl={item.img_src}
              rover_name={item.rover.name}
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