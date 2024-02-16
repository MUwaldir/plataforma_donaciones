import React, { useState } from 'react';
const donationImage ='https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; // Importa la imagen de donaciones

const DonationForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para procesar la donación
    }

    return (
        <section className="bg-gray-100 min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="md:w-1/2">
                <img src={donationImage} alt="Imagen de donaciones" className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Realizar Donación</h2>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-gray-700">Cantidad:</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="block w-full mt-1 p-2 border-gray-300 rounded-lg bg-gray-200" />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">Donar</button>
            </div>
        </section>
    );
}

export default DonationForm;
