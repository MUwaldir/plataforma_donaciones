import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/Layout/SearchBar";
import NasaCard from "./components/Layout/NasaCard";
import NasaInfo from "./components/NasaInfo";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Pagination from "./components/Layout/Pagination";

const App = () => {
  const [nasaData, setNasaData] = useState([]);
  const [pagina, setPagina] = useState(1);
  const API = "FTv2gz3c7DcSlr9FblUYzW2luWvAImpwfO1rNq36";
  // const API_URL =
  //   `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API}`;

  // useEffect(() => {
  //   // Aquí puedes realizar una llamada a la API de la NASA para obtener los datos
  //   // y luego actualizar el estado con setNasaData
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNasaData(data.photos);
  //       console.log(data);
  //     });
  // }, []);
  const fetchNasaData = (page) => {
    const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setNasaData(data.photos);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchNasaData(pagina);
  }, [pagina]);

  const handleSearchChange = (e) => {
    const num = parseInt(e.target.value);
    if (!isNaN(num)) {
      setPagina(num);
    }
  };

  // const filteredNasaData = nasaData.filter((item) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handlePrevPage = () => {
    if (pagina > 1) {
      setPagina((prevPagina) => prevPagina - 1);
    }
  };

  const handleNextPage = () => {
    setPagina((prevPagina) => prevPagina + 1);
  };
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Header />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  filteredNasaData={nasaData}
                  handleSearchChange={handleSearchChange}
                  pagina={pagina}
                  handleNextPage={handleNextPage}
                  handlePrevPage={handlePrevPage}
                />
              }
            ></Route>
            <Route path="/info/:id" element={<NasaInfo />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>

          {/* <div className="flex justify-center my-4">
            <button
              onClick={handlePrevPage}
              disabled={pagina === 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
            >
              Anterior
            </button>
            <p className="bg-black text-white w-10 h-10 text-center p-2 rounded-md font-bold ">{pagina}</p>
            <button
              onClick={handleNextPage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
            >
              Siguiente
            </button>
          </div> */}
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
