import Contacto from "../../models/ContactoSchema.js";
import Equipo from "../../models/EquipoSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";
import Testimonio from "../../models/TestimonioSchema.js";

const deleteProyect = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const existProyect = await Proyecto.findById(id);
    if (!existProyect) {
      return res.status(404).json({ message: "proyecto not found" });
    }

    // eliminar las relaciones

    // Eliminar los testimonios relacionados con el proyecto
    await Testimonio.deleteMany({ proyecto: id });
    // Eliminar los equipos relacionados con el proyecto
    await Equipo.deleteMany({ proyecto: id });
    // Eliminar los contactos relacionados con el proyecto

    await Contacto.deleteMany({ proyecto: id });
    // Eliminar el proyecto en sí mismo
    await Proyecto.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Proyecto y relaciones eliminados exitosamente" });
  } catch (error) {
    console.error("Error al eliminar el proyecto y sus relaciones:", error);
    res
      .status(500)
      .json({ message: "Error al eliminar el proyecto y sus relaciones" });
  }
};

export default deleteProyect;
