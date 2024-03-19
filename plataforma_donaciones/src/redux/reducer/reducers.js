const initialState = {
  movie: null,
  proyectos: [],
  proyectoDetail:null
};

const proyectosDonacionesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, movie: action.payload };

    case "FETCH_PROYECTOS":
      return { ...state, proyectos: action.payload };
    
    case "PROYECTO_DETAIL":
      const {proyectos} =state
      const data = proyectos.find((p) => p._id === action.payload)
      return  { ...state, proyectoDetail: data};
   
      
    default:
      return state;
  }
};

export default proyectosDonacionesReducer;
