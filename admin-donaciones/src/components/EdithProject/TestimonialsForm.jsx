import React, { useState } from "react";
const URL_API = "http://localhost:3001/api";
const TestimonialsEditor = ({ testimonials}) => {
  const [editedTestimonials, setEditedTestimonials] = useState(testimonials);

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...editedTestimonials];
    updatedTestimonials[index][field] = value;
    setEditedTestimonials(updatedTestimonials);
  };

  const handleAddTestimonial = () => {
    setEditedTestimonials([...editedTestimonials, { nombre: "", contenido: "" }]);
  };

  const handleRemoveTestimonial = (index) => {
    const updatedTestimonials = [...editedTestimonials];
    updatedTestimonials.splice(index, 1);
    setEditedTestimonials(updatedTestimonials);
  };

  const handleSaveChanges =async (id) => {
    console.log(editedTestimonials)
    console.log(id)
    const updateTestimonio = await editedTestimonials.find((tes)=>tes._id === id)
    console.log(updateTestimonio)
    const response = await fetch(`${URL_API}/updatetestimonio/${id}`,
    {
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateTestimonio),

    })
    const data = await response.json()
    console.log(data)
    
  };

  return (
    <div className="w-full px-4">
      <h2 className="text-lg font-bold mb-4">Editar Testimonios</h2>
      {editedTestimonials.map((testimonial, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded-md p-4">
          <input
            type="text"
            value={testimonial.nombre}
            onChange={(e) => handleTestimonialChange(index, "nombre", e.target.value)}
            className="border-none bg-transparent focus:outline-none w-full text-lg mb-2"
            placeholder="Nombre"
          />
          <textarea
            value={testimonial.contenido}
            onChange={(e) => handleTestimonialChange(index, "contenido", e.target.value)}
            className="border-none bg-transparent focus:outline-none w-full text-lg"
            rows="4"
            placeholder="Contenido del testimonio"
          ></textarea>
          <button
            onClick={() => handleRemoveTestimonial(index)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Eliminar
          </button>
          <button
        onClick={() => handleSaveChanges(testimonial._id)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Guardar cambios
      </button>
        </div>
      ))}
      <button
        onClick={handleAddTestimonial}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Agregar testimonio
      </button>
      
    </div>
  );
};

export default TestimonialsEditor;
