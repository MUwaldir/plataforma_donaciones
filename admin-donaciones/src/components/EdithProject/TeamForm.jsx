import React, { useState } from "react";
const URL_API = "http://localhost:3001/api";
const urlpruebaiamgenes = "https://source.unsplash.com/random";
const TeamForm = ({ team ,idproyecto}) => {
  const [editedTeam, setEditedTeam] = useState(team);

 
  const handleTeamMemberChange = (index, field, value) => {
    console.log(index + " " + field + " " + value);
    const updatedTeam = [...editedTeam];
    updatedTeam[index][field] = value;
    setEditedTeam(updatedTeam);
  };

  const handleRemoveTeamMember = async (id,index) => {
    if (!id) {
        const updatedEquipo = [...editedTeam];
        updatedEquipo.splice(index, 1);
        setEditedTeam(updatedEquipo);
      } else {
        const response = await fetch(
          `http://localhost:3001/api/deleteequipo/${id}`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data =await response.json();
  
        if (data.success) {
          console.log(data);
          const updatedEquipo = [...editedTeam];
          updatedEquipo.splice(index, 1);
          setEditedTeam(updatedEquipo);
        } else {
          console.log("Error al elminar Testimonio");
        }
      }
    const updatedTeam = [...editedTeam];
    updatedTeam.splice(index, 1);
    setEditedTeam(updatedTeam);
  };

  const handleAddTeamMember = () => {
    setEditedTeam([...editedTeam, { nombre: "", cargo: "", descripcion: "" }]);
  };

  const handleSaveChanges = async (id, index) => {
    const updateEquipo = await editedTeam[index];
  
    if(!id){
        console.log(editedTeam)
        console.log(updateEquipo)
        const enviarData = await {...updateEquipo, imagen: urlpruebaiamgenes}
        console.log(enviarData)
        const response = await fetch(`${URL_API}/createequipo/${idproyecto}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enviarData),
          });
          const data = await response.json();
          editedTeam[index]  = data.equipo
          console.log(data);
    }else {

        try {
            
            const response = await fetch(`${URL_API}/updateequipo/${id}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updateEquipo),
            });
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error({error : error.message})
        }
    }
  };

  return (
    <div className="px-4">
      <h2 className="text-lg font-bold mb-4">Editar Equipo</h2>
      <div className="w-full">
        {editedTeam.map((member, index) => (
          <div
            key={index}
            className="mb-8 w-full grid grid-cols-3 gap-6 border border-spacing-2 border-gray-300 rounded-md"
          >
            <div>
              <div className="col-span-1">
                <label
                  className="block text-sm font-bold
               text-gray-700 "
                >
                  Nombre
                </label>
                <input
                  type="text"
                  value={member.nombre}
                  onChange={(e) =>
                    handleTeamMemberChange(index, "nombre", e.target.value)
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Nombre"
                />
              </div>
              <div className="col-span-1">
                <label
                  className="block text-sm font-bold
               text-gray-700"
                >
                  Cargo
                </label>
                <input
                  type="text"
                  value={member.cargo}
                  onChange={(e) =>
                    handleTeamMemberChange(index, "cargo", e.target.value)
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Cargo"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                className="block text-sm font-bold
               text-gray-700"
              >
                Descripción
              </label>
              <textarea
                value={member.descripcion}
                onChange={(e) =>
                  handleTeamMemberChange(index, "descripcion", e.target.value)
                }
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="4"
                placeholder="Descripción"
              ></textarea>
            </div>
            <div className="w-20">
                <img src={member.imagen} alt="" />
                <input type="file" />
            </div>
            <button
              onClick={() => handleRemoveTeamMember(member._id,index)}
              className="col-span-3 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none w-24"
            >
              Eliminar
            </button>
            <button
              onClick={() =>
                handleSaveChanges(member._id, index,)
              }
              className={`px-4 py-2  text-white rounded-md ${
                member._id
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-green-500 hover:bg-green-600"
              }  focus:outline-none`}
            >
              {member._id ? "Guardar cambios" : "Crear Miembro"}
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddTeamMember}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none mb-4"
      >
        Agregar miembro
      </button>
    </div>
  );
};

export default TeamForm;
