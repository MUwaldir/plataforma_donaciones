import React from "react";
const  contactBackground = "https://media.istockphoto.com/id/1311598658/es/foto/empresario-negocia-mercado-de-valores-en-l%C3%ADnea-en-pantalla-teblet-concepto-de-inversi%C3%B3n-digital.jpg?s=612x612&w=0&k=20&c=5sYDHhjv2qQfNnTHnytKNxe-qDlhYh8GyOt3tzEMpyU="; // Importa la imagen de fondo de tu elección

const Contact = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">¡Contáctanos!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Estamos aquí para ayudarte en lo que necesites. Si tienes alguna
          pregunta, comentario o sugerencia, no dudes en ponerte en contacto con
          nosotros.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full px-4 py-2 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
// function Contact() {
//     return ( <></> );
// }

// export default Contact;
