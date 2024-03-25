// api.js
const URL_API = "http://localhost:3001/";
// const token = localStorage.getItem("token");
// login user
export const login = async (dataUser) => {
  const response = await fetch(URL_API + "api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataUser),
  });
  const data = await response.json();
  return data;
};
// Función para obtener la lista de usuarios desde el servidor
export const getUsers = async (token) => {
  // Lógica para hacer una solicitud al servidor y obtener la lista de usuarios
  try {
    const response = await fetch(URL_API + "api/getusers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
   console.log(data);
    return data;
    
  } catch (error) {
    console.error(error)
  }
};

// Función para obtener la lista de roles desde el servidor
export const getRoles = async () => {
  // Lógica para hacer una solicitud al servidor y obtener la lista de roles
  const response = await fetch("/api/roles");
  const data = await response.json();
  return data.roles;
};

// Función para eliminar un usuario en el servidor
export const deleteUser = async (userId) => {
  // Lógica para hacer una solicitud al servidor y eliminar un usuario
  await fetch(`/api/users/${userId}`, { method: "DELETE" });
};

export const updateUser = async (id, dataUpdate,token) => {
  console.log(token)
  const response = await fetch(URL_API + "api/updateuser/" + id, {
    method: "PATCH",
    headers: {"Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dataUpdate),
  });
  const data = await response.json();
  return data;
};
export const createUser = async (datauser,token) => {
  const response = await fetch(URL_API + "api/createuser/", {
    method: "POST",
    headers: { "Content-Type": "application/json" ,Authorization: `Bearer ${token}`,},
    body: JSON.stringify(datauser),
  });
  const data = await response.json();
  return data;
};

// Función para actualizar el rol de un usuario en el servidor
export const updateRole = async (userId, roleId) => {
  // Lógica para hacer una solicitud al servidor y actualizar el rol de un usuario
  await fetch(`/api/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roleId }),
  });
};
