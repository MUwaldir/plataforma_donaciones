
import Contacto from "../../models/ContactoSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";

const createContacto = async (req, res, next) => {
  const { ideproject } = req.params;
  try {
    const { tipo,valor } = req.body;

    const existProject = await Proyecto.findById(ideproject);
    if (!existProject) {
      return res.status(404).json({ message: "El proyecto no se encutrado" });
    }

    const ContactoCreado = await Contacto.create({
        tipo,
        valor,
        proyecto:ideproject
    });

    existProject.contactos = [...existProject.contactos, ContactoCreado._id]
    await existProject.save()
    res.status(200).json({
        message: "Contacto creado correctamente",
        Contacto: ContactoCreado,
      });

  } catch (error) {
    console.error("Error al crear el Contacto:", error);
    res.status(500).json({ message: "Error al crear el Contacto" });
  }
};

export default createContacto;
