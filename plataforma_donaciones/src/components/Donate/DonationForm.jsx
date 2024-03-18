import React, { useState } from "react";
import { FaCreditCard, FaPaypal, FaMoneyCheckAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const donationImage =
  "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const URL_API_STRIPE = "http://localhost:3001/api/create-checkout-session/";
const URL_API_PAYPAL = "http://localhost:3001/api/create-order/";

const DonationForm = ({ nombre, description, id }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataDonacion = {
      nombre,
      description,
      monto: amount,
    };
    console.log(dataDonacion);
    // console.log(URL_API+id)
    if (paymentMethod === "card") {
      const response = await fetch(URL_API_STRIPE + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud (en este caso, JSON)
        },
        body: JSON.stringify(dataDonacion),
      });
      const data = await response.json();
      window.location.href = data.url;
    } else if (paymentMethod === "paypal") {
      const response = await fetch(URL_API_PAYPAL + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tipo de contenido del cuerpo de la solicitud (en este caso, JSON)
        },
        body: JSON.stringify(dataDonacion),
      });
      const data = await response.json();
      window.location.href = data.links[1].href;

    }
    console.log(amount, paymentMethod);
    // Puedes agregar lógica adicional aquí, como enviar la donación a través de una API
  };

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center">
      <div className="md:w-2/3 lg:w-1/3">
        <img
          src={donationImage}
          alt="Imagen de donaciones"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="container mx-auto p-6 bg-white text-black shadow-lg rounded-lg lg:w-2/3 md:w-full lg:ms-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">
            ¡Ayúdanos a cambiar vidas con tu donación!
          </h2>
          <input
            type="number"
            placeholder="Ingresa el monto en dólares"
            className="block w-full md:w-1/2 bg-gray-200 rounded-lg p-2 mb-4"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="mb-4">
            <label className="block mb-2">Selecciona el método de pago:</label>
            <div className="flex items-center ">
              <input
                type="radio"
                id="card"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="mr-2  "
              />
              <label
                htmlFor="card"
                className="mr-4 cursor-pointer flex items-center"
              >
                <FaCreditCard className="mr-2" />
                Tarjeta de Crédito/Débito
              </label>
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="mr-2"
              />
              <label
                htmlFor="paypal"
                className="cursor-pointer flex items-center"
              >
                <FaPaypal className="mr-2" />
                PayPal
              </label>
            </div>
          </div>
          <p className="mb-4">
            ¡Tu donación ayuda a cambiar vidas! ¡Gracias por tu generosidad!
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 w-full md:w-1/2"
          >
            Donar
          </button>
        </form>
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-2 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div>
              <h3 className="text-lg font-bold mb-2">
                <FaMoneyCheckAlt className="inline-block mr-2 h-10 text-3xl" />
                Transferencia Bancaria
              </h3>
              <div className="flex items-center mb-2">
                <img
                  src="https://seeklogo.com/images/B/bcp-logo-71C5A56C13-seeklogo.com.png"
                  alt=""
                  className="h-8 mr-2 rounded-md"
                />
                <section>
                  <p>Número de cuenta dólares:</p>
                  <p>002-194-001967786134-96</p>
                  <p>Número de cuenta soles:</p>
                  <p>002-193-001853946025-15</p>
                </section>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                <FaMoneyCheckAlt className="inline-block mr-2 h-10 text-3xl" />
                Monederos digitales
              </h3>
              <div className="flex items-center mb-2">
                <img
                  src="https://seeklogo.com/images/Y/yape-logo-3E473EE7E5-seeklogo.com.png"
                  alt=""
                  className="h-8 mr-2 rounded-md"
                />
                <section>
                  <p>Yape : 976655255</p>
                  <p>Nombre: Nombre Nombre Apellido Apellido</p>
                </section>
              </div>
              <div className="flex items-center">
                <img
                  src="https://seeklogo.com/images/P/plin-logo-967A4AF583-seeklogo.com.png"
                  alt=""
                  className="h-8 mr-2 rounded-md"
                />
                <section>
                  <p>Plin : 976655255</p>
                  <p>Nombre: Nombre Nombre Apellido Apellido</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
