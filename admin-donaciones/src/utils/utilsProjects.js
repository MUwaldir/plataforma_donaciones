// api.js
const URL_API= 'http://localhost:3001/'
// Función para obtener la lista de usuarios desde el servidor
export const getProject = async (id) => {
    // Lógica para hacer una solicitud al servidor y obtener la lista de usuarios
    const response = await fetch(`${URL_API}api/getprojectid/${id}`);
    const data = await response.json();
    // console.log(data);
    return data;
  };