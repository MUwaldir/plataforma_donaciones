export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_PROYECTOS = "FETCH_PROYECTOS";
export const MENSAJE_DEFAULT = "MENSAJE_DEFAULT";
export const PROYECTO_DETAIL = "PROYECTO_DETAIL";



const URL_API = "http://localhost:3001/api";

export const fetchMovie = (movie) => ({
  type: FETCH_MOVIE,
  payload: movie,
});

export const fetchProyectos = () => (dispatch) => {
  console.log("fetch de proyectos");
  fetch(URL_API + "/getprojects")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener proyectos");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: FETCH_PROYECTOS,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error en fetchProyectos:", error);
      // Puedes despachar una acción adicional aquí para manejar el error
    });
};

export const proyectoDetail = (id) => (dispatch) => {
  return dispatch({
    type: "PROYECTO_DETAIL",
    payload:id ,
  });
};

