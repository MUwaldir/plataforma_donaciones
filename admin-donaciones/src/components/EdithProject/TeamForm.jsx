import React, { useState } from "react";
const URL_API = "http://localhost:3001/api";
const TeamForm = ({ team }) => {
  const [editedTeam, setEditedTeam] = useState(team);
  const idProject = team[0].proyecto;
 
  const handleTeamMemberChange = (index, field, value) => {
    console.log(index + " " + field + " " + value);
    const updatedTeam = [...editedTeam];
    updatedTeam[index][field] = value;
    setEditedTeam(updatedTeam);
  };

  const handleRemoveTeamMember = (index) => {
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
        const response = await fetch(`${URL_API}/createequipo/${idProject}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateEquipo),
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
            className="mb-8 w-full grid grid-cols-2 gap-6 border border-spacing-2 border-gray-300 rounded-md"
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
            <button
              onClick={() => handleRemoveTeamMember(index)}
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
