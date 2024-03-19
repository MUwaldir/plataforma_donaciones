import React, { useState } from "react";
import { useSelector } from "react-redux";

const URL_API = "http://localhost:3001/api/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const message = useSelector((state) => state.nuevomensaje)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión
    console.log({
      email,
      password,
    });
    const dataLogin = {
      email,
      password,
    };
    const response = await fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Puedes ajustar los encabezados según lo necesites
      },
      body: JSON.stringify(dataLogin),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <section className="flex justify-center">
        {message && message}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 border-spacing-1 border-x-2 mt-3 md:w-1/3"
      >
        <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block bg-slate-200 w-full mt-1 p-2 border-gray-100 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block bg-slate-200 w-full mt-1 p-2 border-gray-100 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </section>
  );
};

export default Login;
