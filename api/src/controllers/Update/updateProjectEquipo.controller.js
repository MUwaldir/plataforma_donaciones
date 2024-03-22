import Equipo from "../../models/EquipoSchema.js";

const updateProjectEquipo =async (req, res) => {
  const { idequipo } = req.params;

  try {
    const { cargo, descripcion,nombre } = req.body;

    // Buscar el testimonio existente en la base de datos
    const proyectoEquipo = await Equipo.findById(idequipo);
    if (!proyectoEquipo) {
      return res.status(404).json({ message: "Equipo no encontrado" });
    }

    // Actualizar los campos del Equipo
    proyectoEquipo.cargo = cargo;
    proyectoEquipo.descripcion = descripcion;
    proyectoEquipo.nombre = nombre;


    // Guardar el Equipo actualizado en la base de datos
    const EquipoActualizado = await proyectoEquipo.save();
    res.status(200).json({
      message: "Equipo actualizado correctamente",
      equipo: EquipoActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error);
    res.status(500).json({ message: "Error al actualizar el proyecto" });
  }
};

export default updateProjectEquipo;
