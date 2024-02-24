import React, { useState } from 'react';
import * as Yup from 'yup';
import Modal from '../Layout/Modal';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
    password: Yup.string().required('La contraseña es requerida').matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
        'La contraseña debe contener al menos una mayúscula, un carácter especial y tener al menos 8 caracteres'
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Debe confirmar la contraseña'),
  });

  const validateForm = async () => {
    try {
      await schema.validate({ email, password, confirmPassword }, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      return validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
    }
  };

  const handleSignup = async () => {
    const validationErrors = await validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Lógica de registro
      console.log('Registro exitoso');
      setModalOpen(true)
      console.log({email,
    password})
    }
  };
// modal 

const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmAction = () => {
    // Lógica para confirmar la acción
    console.log("Acción confirmada");
    navigate(`/login`)
    setModalOpen(false);
  };
  return (
    <div className="flex-grow flex flex-col justify-evenly items-center bg-blue-500 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Registrarse</h2>
      <div className="max-w-md w-full md:w-1/2 p-5">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            className={`w-full border rounded-md py-2 px-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-1">Contraseña</label>
          <input
            type="password"
            id="password"
            className={`w-full border rounded-md py-2 px-3 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            className={`w-full border rounded-md py-2 px-3 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleSignup}
        >
          Registrarse
        </button>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Educacion Online!"
        message={`Regsitro  Exitoso!`}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
};

export default Signup;
