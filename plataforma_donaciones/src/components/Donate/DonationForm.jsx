import React, { useState } from 'react';

const DonationForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para procesar la donación
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Realizar Donación</h2>
            <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700">Cantidad:</label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="block w-full mt-1 p-2 border-gray-300 rounded-lg" />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">Donar</button>
        </form>
    );
}

export default DonationForm;
