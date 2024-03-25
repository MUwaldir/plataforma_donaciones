// InicioSesion.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="  max-w-md mx-auto my-auto p-10 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <Formik
        initialValues={{ email: '', contrasena: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Email inválido').required('El email es requerido'),
          contrasena: Yup.string().required('La contraseña es requerida'),
        })}
        onSubmit={ async(values, { setSubmitting }) => {
          console.log(values);
          const data = await login(values)
          const token = data.token
          localStorage.setItem("token",token)
          console.log(data)
          navigate('/dashboard')
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        <Form className="space-y-4 ">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <Field type="password" name="contrasena" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <ErrorMessage name="contrasena" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Iniciar Sesión</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
