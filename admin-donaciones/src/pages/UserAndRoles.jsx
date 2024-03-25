import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "../utils/utils";
import Sidebar from "../components/Dashboard/Sidebar";
import Modal from "../components/Layout/Modal";
import { useNavigate } from "react-router-dom";
const Usuarios = ({ openSlider, handleOpenSilder }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData(token);
  }, []);

  const fetchData = async (token) => {
    try {
      const data = await getUsers(token);
      console.log("Data:", data);
      if (data.message === "Token no válido") {
        navigate("/login");
        localStorage.removeItem("token");
      }
      if (data.message) {
        setMessage(data.message);
        setShowModal(true);
      }
      setUsuarios(data.users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setMessage("Error al obtener usuarios");
      setShowModal(true);
    }
  };

  const handleCrearUsuario = () => {
    setNuevoUsuario(true);
  };

  const handleCancelarCrearUsuario = () => {
    setNuevoUsuario(false);
    clearForm();
  };

  const clearForm = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setContrasena("");
    setRol("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createUser(
      {
        nombre,
        apellido,
        email,
        contrasena,
        rol,
      },
      token
    );
    // console.log({ nombre, apellido, email, contrasena, rol });
    console.log(response);
    if (response.message === "Acceso denegado. Rol no autorizado") {
      setMessage(response.message);
      setShowModal(true);
      return;
    }
    clearForm();
    setNuevoUsuario(false);
    fetchData(token); // Actualizamos la lista de usuarios después de crear uno nuevo
  };

  const handleEditarUsuario = async (id, updatedFields) => {
    const updatedUsers = usuarios.map((usuario) => {
      if (usuario._id === id) {
        return { ...usuario, ...updatedFields };
      }
      return usuario;
    });
    setUsuarios(updatedUsers);
  };

  const handleCancelarEdicion = async (id) => {
    const selectUser = usuarios.map((usuario) => {
      if (usuario._id === id) {
        delete usuario.editando;
      }
      return usuario;
    });
    setUsuarios(selectUser);
    fetchData();
  };
  const handleActualizarUsuario = async (id, updatedFields) => {
    const updatedUsers = await usuarios.map((usuario) => {
      if (usuario._id === id) {
        return { ...usuario, ...updatedFields };
      }
      return usuario;
    });
    await setUsuarios(updatedUsers);
    const usuarioData = await usuarios.find((user) => user._id === id);
    console.log(usuarioData)
    const response= await updateUser(id, usuarioData,token);
    if (response.message === "Acceso denegado. Rol no autorizado") {
      setMessage(response.message);
      setShowModal(true);
      
    }
    fetchData(token); // Actualizamos la lista de usuarios después de crear uno nuevo
  };
  const handleEliminarUsuario = async (id) => {
    await deleteUser(id);
    fetchData(); // Actualizamos la lista de usuarios después de eliminar uno
  };
  console.log(usuarios);
  return (
    <div className=" mt-16">
      <Sidebar openSlider={openSlider} handleOpenSilder={handleOpenSilder} />
      {usuarios && Object.keys(usuarios).length > 0 ? (
        <div
          className={`${openSlider ? "ml-20" : "ml-64"} flex flex-col px-2 `}
        >
          <button
            onClick={handleCrearUsuario}
            className="bg-blue-500 w-36 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          >
            Crear usuario
          </button>

          {nuevoUsuario && (
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input-field"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="input-field"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="input-field"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <div>
                  <select
                    className="input-field"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >
                    <option disabled value="">
                      Seleccionar rol
                    </option>
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                    <option value="usuario">Usuario</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                >
                  Crear
                </button>
                <button
                  type="button"
                  onClick={handleCancelarCrearUsuario}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}

          <div className=" overflow-x-auto ">
            <table className="table-auto w-full">
              <thead>
                <tr className="grid grid-cols-6 ">
                  <th className="px-4 py-2">Nombre</th>
                  <th className="px-4 py-2">Apellido</th>
                  <th className="px-4 py-2 ">Email</th>
                  {/* <th className="px-4 py-2">Contraseña</th> */}
                  <th className="px-4 py-2">Rol</th>
                  <th className="px-4 py-2 col-span-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr
                    key={usuario._id}
                    className="grid grid-cols-6 bg-slate-300"
                  >
                    <td className="px-4 py-2 l">
                      {usuario.editando ? (
                        <input
                          type="text"
                          value={usuario.nombre}
                          onChange={(e) =>
                            handleEditarUsuario(usuario._id, {
                              nombre: e.target.value,
                            })
                          }
                          className="w-full"
                        />
                      ) : (
                        usuario.nombre
                      )}
                    </td>
                    <td className="px-4 py-2">
                      {usuario.editando ? (
                        <input
                          type="text"
                          value={usuario.apellido}
                          onChange={(e) =>
                            handleEditarUsuario(usuario._id, {
                              apellido: e.target.value,
                            })
                          }
                          className="w-full"
                        />
                      ) : (
                        usuario.apellido
                      )}
                    </td>
                    <td className="px-4 py-2 ">
                      {usuario.editando ? (
                        <input
                          type="email"
                          value={usuario.email}
                          onChange={(e) =>
                            handleEditarUsuario(usuario._id, {
                              email: e.target.value,
                            })
                          }
                          className="w-full"
                        />
                      ) : (
                        usuario.email
                      )}
                    </td>
                    {/* <td className="px-4 py-2 ">
                    {usuario.editando ? (
                      <input
                        type="password"
                        value={usuario.contrasena}
                        onChange={(e) =>
                          handleEditarUsuario(usuario._id, {
                            contrasena: e.target.value,
                          })
                        }
                      />
                    ) : (
                      usuario.contrasena
                    )}
                  </td> */}
                    <td className="px-4 py-2">
                      {usuario.editando ? (
                        <select
                          value={usuario.rol}
                          onChange={(e) =>
                            handleEditarUsuario(usuario._id, {
                              rol: e.target.value,
                            })
                          }
                          className="w-full"
                        >
                          <option value="admin">Administrador</option>
                          <option value="editor">Editor</option>
                          <option value="usuario">Usuario</option>
                        </select>
                      ) : (
                        usuario.rol
                      )}
                    </td>
                    <td className="px-4 py-2 col-span-2 flex justify-center">
                      {usuario.editando ? (
                        <div className="flex">
                          <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={() =>
                              handleActualizarUsuario(usuario._id, {
                                editando: false,
                              })
                            }
                          >
                            Guardar
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => handleCancelarEdicion(usuario._id)}
                          >
                            Cancelar
                          </button>
                        </div>
                      ) : (
                        <div className="flex">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                            onClick={() =>
                              handleEditarUsuario(usuario._id, {
                                editando: true,
                              })
                            }
                          >
                            Editar
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => handleEliminarUsuario(usuario._id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div
          className={`${openSlider ? "ml-20" : "ml-64"} flex flex-col px-2 `}
        >
          <h2>esta vacio</h2>
        </div>
      )}
      {showModal && (
        <Modal message={message} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Usuarios;
