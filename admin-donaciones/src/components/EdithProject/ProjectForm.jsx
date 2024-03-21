import React, { useState } from "react";
import Imagenes from "./Imagenes";
const URL_API = "http://localhost:3001/api";

const ProjectForm = ({ project }) => {
  const [editProject, setEditProject] = useState(project);
 
  const handleProjectChange = (evente) => {
    console.log(evente.target.value);

    const { name, value } = evente.target;
    if (name === "categoria") {
      setEditProject({
        ...editProject,
        categoria: { ...editProject.categoria,  nombre: value },
      });
    }else {

        setEditProject({ ...editProject, [name]: value });
    }

    // console.log(editProject);
  };

  const handleUbicacionChange = (event) => {
    console.log(event.target.value);

    const { name, value } = event.target;
    switch (name) {
      case "direccion":
        setEditProject({
          ...editProject,
          ubicacion: { ...editProject.ubicacion, direccion: value },
        });

        break;
      case "latitud":
        setEditProject({
          ...editProject,
          ubicacion: { ...editProject.latitud, latitud: value },
        });

        break;
      case "longitud":
        setEditProject({
          ...editProject,
          ubicacion: { ...editProject.longitud, longitud: value },
        });

        break;

      default:
        break;
    }
  };

  const handleCuentasChange = (event) => {
    const { name, value } = event.target;
    const updateCuentas = [...editProject.cuentas_bancarias];
    switch (name) {
      case "soles":
        updateCuentas[0] = { ...updateCuentas[0], soles: value };
        setEditProject({
          ...editProject,
          cuentas_bancarias: updateCuentas,
        });

        break;
      case "dolares":
        updateCuentas[1] = { ...updateCuentas[1], dolares: value };
        setEditProject({
          ...editProject,
          cuentas_bancarias: updateCuentas,
        });

        break;

      default:
        break;
    }
  };

  const handleMonederoChange = (event) => {
    const { name, value } = event.target;
    const updateMonedero = [...editProject.monederos_digitales];
    console.log(name + "  " + value);
    switch (name) {
      case "0_yape":
        updateMonedero[0] = { ...updateMonedero[0], yape: value };
        setEditProject({ ...editProject, monederos_digitales: updateMonedero });
        break;
      case "0_nombre":
        updateMonedero[0] = { ...updateMonedero[0], nombre: value };
        setEditProject({ ...editProject, monederos_digitales: updateMonedero });

        break;
      case "1_plin":
        updateMonedero[1] = { ...updateMonedero[1], plin: value };
        setEditProject({ ...editProject, monederos_digitales: updateMonedero });
        break;
      case "1_nombre":
        updateMonedero[1] = { ...updateMonedero[1], nombre: value };
        setEditProject({ ...editProject, monederos_digitales: updateMonedero });
        break;
      default:
        break;
    }
  };

  const handleSaveChanges = async () => {
    const dataProject = {
      ubicacion: editProject.ubicacion,
      titulo: editProject.titulo,
      descripcion: editProject.descripcion,
      monto_meta: editProject.monto_meta,
      organizacion: editProject.organizacion,
      categoria: editProject.categoria.nombre,
      miembros: editProject.miembros,
      imagenes: editProject.imagenes,
      cuentas_bancarias: editProject.cuentas_bancarias,
      monederos_digitales: editProject.monederos_digitales,
    };
    const response = await fetch(`${URL_API}/updateprojectgeneral/${editProject._id}`,
    {
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataProject),

    })
    const data = await response.json()
    console.log(data);
};
console.log(editProject);
  //   console.log(editProject);
  return (
    <div className="container mx-auto py-8  px-4">
      {Object.keys(editProject).length > 0 ? (
        <div>
          <div className="mb-4">
            <label htmlFor="titulo" className="block text-lg font-bold mb-2">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={editProject.titulo}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="descripcion"
              className="block text-lg font-bold mb-2"
            >
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={editProject.descripcion}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">Monto Meta:</label>
            <input
              type="number"
              name="monto_meta"
              value={editProject.monto_meta}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold mb-2">
              Número de Miembros:
            </label>
            <input
              type="number"
              name="miembros"
              value={editProject.miembros}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="organizacion"
              className="block text-lg font-bold mb-2"
            >
              Organización
            </label>
            <input
              type="text"
              id="organizacion"
              name="organizacion"
              value={editProject.organizacion}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="block text-lg font-bold mb-2">
              Categoría
            </label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={editProject.categoria.nombre}
              onChange={handleProjectChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {/* ubicacion */}
          <div className="mb-4">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Latitud:</label>
              <input
                type="number"
                name="latitud"
                value={editProject.ubicacion.latitud}
                onChange={handleUbicacionChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Longitud:</label>
              <input
                type="number"
                name="longitud"
                value={editProject.ubicacion.longitud}
                onChange={handleUbicacionChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Dirección:</label>
              <input
                type="text"
                name="direccion"
                value={editProject.ubicacion.direccion}
                onChange={handleUbicacionChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>
          {/* iamgenes */}
          <Imagenes
            imagenes={editProject.imagenes}
            onUpdateImagenes={handleProjectChange}
          />

          {/* cuentas bancarias */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Cuentas Bancarias:
            </label>
            {editProject.cuentas_bancarias.map((account, index) => (
              <div key={`account_${index}`}>
                <label htmlFor="">Cuenta {Object.keys(account)[0]}</label>
                <input
                  key={index}
                  type="text"
                  name={Object.keys(account)[0]}
                  value={account.soles || account.dolares} // Mostrar el valor según el tipo de cuenta bancaria
                  onChange={handleCuentasChange}
                  className="w-full border rounded px-3 py-2 mb-2"
                  placeholder="Número de cuenta"
                />
              </div>
            ))}
          </div>

          {/* monedros digitales */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Monederos Digitales:
            </label>
            {editProject.monederos_digitales.map((mone, index) => (
              <div key={`mone_${index}`}>
                <label htmlFor="">{Object.keys(mone)[0]}</label>
                <input
                  type="text"
                  key={index + "_" + Object.keys(mone)[0]}
                  name={index + "_" + Object.keys(mone)[0]}
                  value={mone.yape || mone.plin}
                  className="w-full border rounded px-3 py-2 mb-2"
                  onChange={handleMonederoChange}
                  placeholder="Número de cuenta"
                />
                <label htmlFor="">{Object.keys(mone)[1]}</label>
                <input
                  type="text"
                  name={index + "_" + Object.keys(mone)[1]}
                  key={index + "_" + Object.keys(mone)[1]}
                  value={mone.nombre}
                  onChange={handleMonederoChange}
                  className="w-full border rounded px-3 py-2 mb-2"
                  placeholder="Número de cuenta"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleSaveChanges}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Guardar Cambios
          </button>
        </div>
      ) : (
        <div className="mt-16">
          <h1>Cargando ...</h1>
        </div>
      )}
    </div>
  );
};

export default ProjectForm;
