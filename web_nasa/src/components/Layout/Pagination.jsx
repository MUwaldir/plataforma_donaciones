import { useState } from "react";

function Pagination({handleNextPage,handlePrevPage,pagina}) {
   

    return (
        <div className="flex justify-center my-4">
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
          </div>
      );
}

export default Pagination;