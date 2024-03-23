import Equipo from "../../models/EquipoSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";

const deleteEquipo = async (req, res) => {
  const { idequipo } = req.params;
  try {
    const existEquipo = await Equipo.findById(idequipo);
    if (!existEquipo) {
      return res.status(404).json({ message: "Equipo not found" });
    }
    await Equipo.findByIdAndDelete(idequipo);

    const proyecto = await Proyecto.findById(existEquipo.proyecto);
    proyecto.equipo = proyecto.equipo.filter(
      (equipo) => equipo.toString() !== idequipo
    );
    await proyecto.save();

    res
      .status(200)
      .send({ success: true, message: "Equipo deleted successfully" });
  } catch (error) {
    console.error(
      "Error al eliminar el Equipo y actualizar el proyecto:",
      error
    );
    return {
      success: false,
      message: "Error al eliminar el Equipo y actualizar el proyecto.",
    };
  }
};

export default deleteEquipo;
