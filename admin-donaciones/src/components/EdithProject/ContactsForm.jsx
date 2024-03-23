import React, { useState } from "react";
const URL_API = "http://localhost:3001/api";
const ContactsForm = ({ contacts, idproyecto }) => {
  const [editedContacts, setEditedContacts] = useState(contacts);

  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...editedContacts];
    updatedContacts[index][field] = value;
    setEditedContacts(updatedContacts);
  };

  const handleRemoveContact = (index) => {
    const updatedContacts = [...editedContacts];
    updatedContacts.splice(index, 1);
    setEditedContacts(updatedContacts);
  };

  const handleAddContact = () => {
    setEditedContacts([...editedContacts, { tipo: "", valor: "" }]);
  };

  const handleSaveChanges = async (id, index) => {
    if (!id) {
      const updateContacto = await editedContacts[index];

      const response = await fetch(`${URL_API}/createcontacto/${idproyecto}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateContacto),
      });
      const data = await response.json();
      setEditedContacts[index] = data.contacto;
      console.log(data);
    } else {
      try {
        const updateContacto = await editedContacts[index];
        const response = await fetch(`${URL_API}/updatecontacto/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateContacto),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error({ error: error.message });
      }
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Editar Contactos</h2>
      {editedContacts.map((contact, index) => (
        <div key={index} className="mb-4 flex items-center">
          <input
            type="text"
            value={contact.tipo}
            onChange={(e) => handleContactChange(index, "tipo", e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2"
            placeholder="Tipo"
          />
          <input
            type="text"
            value={contact.valor}
            onChange={(e) =>
              handleContactChange(index, "valor", e.target.value)
            }
            className="border border-gray-300 rounded-md p-2 mr-2"
            placeholder="Valor"
          />
          <button
            onClick={() => handleRemoveContact(index)}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Eliminar
          </button>
          <button
            onClick={() => handleSaveChanges(contact._id, index)}
            className={`px-4 py-2  text-white rounded-md ${
              contact._id
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-green-500 hover:bg-green-600"
            }  focus:outline-none`}
          >
            {contact._id ? "Guardar cambios" : "Crear Conatcto"}
          </button>
        </div>
      ))}
      <button
        onClick={handleAddContact}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Agregar contacto
      </button>
    </div>
  );
};

export default ContactsForm;
