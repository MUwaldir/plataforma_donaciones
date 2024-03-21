// api.js
const URL_API= 'http://localhost:3001/'
// Función para obtener la lista de usuarios desde el servidor
export const getUsers = async () => {
    // Lógica para hacer una solicitud al servidor y obtener la lista de usuarios
    const response = await fetch('/api/users');
    const data = await response.json();
    return data.users;
  };
  
  // Función para obtener la lista de roles desde el servidor
  export const getRoles = async () => {
    // Lógica para hacer una solicitud al servidor y obtener la lista de roles
    const response = await fetch('/api/roles');
    const data = await response.json();
    return data.roles;
  };
  
  // Función para eliminar un usuario en el servidor
  export const deleteUser = async (userId) => {
    // Lógica para hacer una solicitud al servidor y eliminar un usuario
    await fetch(`/api/users/${userId}`, { method: 'DELETE' });
  };
  
  // Función para actualizar el rol de un usuario en el servidor
  export const updateRole = async (userId, roleId) => {
    // Lógica para hacer una solicitud al servidor y actualizar el rol de un usuario
    await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleId }),
    });
  };
  