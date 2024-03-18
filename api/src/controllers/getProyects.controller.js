import Proyecto from "../models/ProyectoSchema.js";

const getProjects = async (req, res, next) => {
  try {
    const proyectos = await Proyecto.find()
      .populate('categoria')
      .populate('contactos')
      .populate('equipo')
      .populate('testimonios');
      
    res.status(200).json({ proyectos });
  } catch (error) {
    console.error("Error al obtener los proyectos:", error);
    res.status(500).json({ message: "Error al obtener los proyectos" });
  }
};

export default getProjects;

