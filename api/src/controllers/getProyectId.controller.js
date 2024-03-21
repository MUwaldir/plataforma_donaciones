import Proyecto from "../models/ProyectoSchema.js";

const getProjectId = async (req, res, next) => {
  const projectId = req.params.id;
  try {
    const proyecto = await Proyecto.findById(projectId)
      .populate("categoria")
      .populate("contactos")
      .populate("equipo")
      .populate("testimonios");
    
    res.status(200).json(proyecto);
  } catch (error) {
    console.error("Error al obtener los proyectos:", error);
    res.status(500).json({ message: "Error al obtener los proyectos" });
  }
};

export default getProjectId;
