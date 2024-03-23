import React, { useState, useEffect } from "react";
import { getUsers, getRoles, deleteUser, updateRole } from "../utils/utils"; // Importa las funciones de la API para obtener y manipular datos
import Sidebar from "../components/Dashboard/Sidebar";

const UsersAndRoles = () => {
  // Define estados para almacenar los usuarios y los roles
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  // Carga los usuarios y los roles al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers(); // Llama a la función para obtener usuarios
      const rolesData = await getRoles(); // Llama a la función para obtener roles
      setUsers(usersData);
      setRoles(rolesData);
    };
    fetchData();
  }, []);

  // Función para eliminar un usuario
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId); // Llama a la función para eliminar un usuario
    // Actualiza la lista de usuarios después de eliminar uno
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Función para actualizar el rol de un usuario
  const handleUpdateRole = async (userId, roleId) => {
    await updateRole(userId, roleId); // Llama a la función para actualizar el rol de un usuario
    // Actualiza el estado de usuarios para reflejar el cambio de rol
    setUsers(
      users.map((user) => {
        if (user.id === userId) {
          return { ...user, roleId };
        }
        return user;
      })
    );
  };

  return (
    <div className="mt-16">
      <div>
        <Sidebar />
        <div className="ml-64">
          <h1>Users and Roles</h1>
          {/* Renderizar la lista de usuarios */}
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                {/* Botón para eliminar un usuario */}
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
                {/* Selección de roles para actualizar el rol de un usuario */}
                <select
                  onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                  value={user.roleId}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsersAndRoles;
