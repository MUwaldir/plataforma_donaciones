import React, { useState } from "react";
import * as Yup from "yup";
import Modal from "../Layout/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const validateForm = async () => {
    try {
      await schema.validate({ email, password }, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      return validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
    }
  };

  const handleLogin = async () => {
    const validationErrors = await validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Lógica de inicio de sesión
      console.log("Inicio de sesión exitoso");
      setModalOpen(true);
    }
  };

  //   modal

//   const [modalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmAction = () => {
    // Lógica para confirmar la acción
    console.log("Acción confirmada");
    setModalOpen(false);
  };
  return (
    // <div className=" flex flex-col justify-center " style={{height:'74vh'}}>
    <div className="flex-grow  h-full flex flex-col justify-evenly p-4 bg-blue-500 text-white">
      <h2 className="text-2xl font-bold  text-center ">Iniciar Sesión</h2>
      <div className="max-w-md mx-auto w-full md:w-1/2">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className={`w-full border rounded-md py-2 px-3 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-semibold mb-1"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className={`w-full border rounded-md py-2 px-3 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>
      </div>
      {/* Botón para abrir el modal */}
      {/* <button onClick={handleOpenModal}>Abrir Modal</button> */}

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Hola de nuevo!"
        message={`Bienvenidod ${email} a estudiar!`}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
};

export default Login;
