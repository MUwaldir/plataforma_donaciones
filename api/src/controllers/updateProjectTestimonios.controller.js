import Testimonio from "../models/TestimonioSchema.js";

const updateProjectTestimonio = async (req, res) => {
  try {
    const testimonioId = req.params.idtestimonio;
    const {
      nombre,
      contenido
    } = req.body;

    // Buscar el testimonio existente en la base de datos
    const proyectoTestimonio = await Testimonio.findById(testimonioId);
    if (!proyectoTestimonio) {
      return res.status(404).json({ message: "Testimonio no encontrado" });
    }

    // Actualizar los campos del testimonio
    proyectoTestimonio.nombre= nombre;
    proyectoTestimonio.contenido = contenido;
   

    // Guardar el testimonio actualizado en la base de datos
    const testimonioActualizado = await proyectoTestimonio.save();
    res.status(200).json({
      message: "Testimonio actualizado correctamente",
      testimonio: testimonioActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error);
    res.status(500).json({ message: "Error al actualizar el proyecto" });
  }
};

export default updateProjectTestimonio;
