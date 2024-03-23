// Registro.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Registro = () => {
  return (
    <div className="max-w-md mx-auto my-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Registro</h2>
      <Formik
        initialValues={{ nombre: '', email: '', contrasena: '', rol: 'usuario' }}
        validationSchema={Yup.object({
          nombre: Yup.string().required('El nombre es requerido'),
          email: Yup.string().email('Email inválido').required('El email es requerido'),
          contrasena: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
          rol: Yup.string().oneOf(['admin', 'editor', 'usuario']).required('El rol es requerido'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
            <Field type="text" name="nombre" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <ErrorMessage name="nombre" component="p" className="text-red-500 text-sm mt-1" />
          </div>
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
          <div>
            <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
            <Field as="select" name="rol" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="admin">Administrador</option>
              <option value="editor">Editor</option>
              <option value="usuario">Usuario</option>
            </Field>
            <ErrorMessage name="rol" component="p" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300">Registrarse</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Registro;
