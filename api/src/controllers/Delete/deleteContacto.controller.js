import Contacto from "../../models/ContactoSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";

const deleteContacto = async (req, res) => {
  const { idcontacto } = req.params;
  try {
    const existContacto = await Contacto.findById(idcontacto);
    if (!existContacto) {
      return res.status(404).json({ message: "Contacto not found" });
    }
    await Contacto.findByIdAndDelete(idcontacto);

    const proyecto = await Proyecto.findById(existContacto.proyecto);
    proyecto.contactos = proyecto.contactos.filter(
      (contacto) => contacto.toString() !== idcontacto
    );
    await proyecto.save();

    res
      .status(200)
      .send({ success: true, message: "contacto deleted successfully" });
  } catch (error) {
    console.error(
      "Error al eliminar el contacto y actualizar el proyecto:",
      error
    );
    return {
      success: false,
      message: "Error al eliminar el contacto y actualizar el proyecto.",
    };
  }
};

export default deleteContacto;
