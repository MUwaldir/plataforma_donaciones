import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const dataOrder = searchParams.get("orderData");
  console.log(dataOrder);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // setDataOrden(JSON.parse(dataOrder))
    if (dataOrder) {
      // Convertir la cadena JSON a un objeto de JavaScript
      const parsedOrderData = JSON.parse(decodeURIComponent(dataOrder));

      setOrderData(parsedOrderData);
    }
  }, []);
  console.log(orderData);
  return (
    <div className="flex-grow w-full  flex  items-center justify-center bg-gradient-to-b from-green-500 to-green-400">
      <div className="z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">¡Donación exitosa!</h1>
        {orderData && (
          <>
            <p className="text-lg mb-8">
              ¡Gracias por tu generosidad! {orderData.nombre}{" "}
              {orderData.surname}
            </p>
            <p className="bg-white text-3xl font-bold text-green-500  py-2 mb-2 px-4 rounded-full hover:bg-green-100 transition duration-300">
              {orderData.monto} US
            </p>
          </>
        )}
        <Link to="/">
          <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-full hover:bg-green-100 transition duration-300">
            Hacer otra donación
          </button>
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};

export default Success;
