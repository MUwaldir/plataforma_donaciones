import Equipo from "../../models/EquipoSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";

const createEquipo = async (req, res, next) => {
  const { ideproject } = req.params;
  try {
    const { nombre, cargo, descripcion } = req.body;

    const existProject = await Proyecto.findById(ideproject);
    if (!existProject) {
      return res.status(404).json({ message: "El proyecto no se encutrado" });
    }

    const equipoCreado = await Equipo.create({
        nombre,
        cargo,
        descripcion,
        proyecto:ideproject
    });

    existProject.equipo = [...existProject.equipo, equipoCreado._id]
    const proyectoEquipoActualizado = await existProject.save()
    res.status(200).json({
        message: "equipo creado correctamente",
        equipo: equipoCreado,
      });

  } catch (error) {
    console.error("Error al crear el equipo:", error);
    res.status(500).json({ message: "Error al crear el equipo" });
  }
};

export default createEquipo;
