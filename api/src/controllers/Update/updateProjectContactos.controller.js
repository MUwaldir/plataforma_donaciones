import Contacto from "../../models/ContactoSchema.js";

const updateProjectContacto = async (req, res) => {
  const { idcontacto } = req.params;
  try {
    const { tipo, valor } = req.body;

    // Buscar el testimonio existente en la base de datos
    const proyectoContacto = await Contacto.findById(idcontacto);
    if (!proyectoContacto) {
      return res.status(404).json({ message: "contacto no encontrado" });
    }

    // Actualizar los campos del contacto
    proyectoContacto.tipo = tipo;
    proyectoContacto.valor = valor;

    // Guardar el contacto actualizado en la base de datos
    const contactoActualizado = await proyectoContacto.save();
    res.status(200).json({
      message: "contacto actualizado correctamente",
      contacto: contactoActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error);
    res.status(500).json({ message: "Error al actualizar el proyecto" });
  }
};

export default updateProjectContacto;
