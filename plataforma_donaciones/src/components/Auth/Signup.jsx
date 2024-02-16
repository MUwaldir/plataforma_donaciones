import React, { useState } from 'react';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para registrarse
    }

    return (
        <div className='flex justify-center' >

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Registro</h2>
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Nombre Completo:</label>
                <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="block bg-slate-200 w-full mt-1 p-2 border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block bg-slate-200 w-full mt-1 p-2 border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Contraseña:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="block bg-slate-200 w-full mt-1 p-2 border-gray-300 rounded-lg" />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">Registrarse</button>
        </form>
        </div>
    );
}

export default Signup;
