

import Proyecto from "../../models/ProyectoSchema.js";
import Testimonio from "../../models/TestimonioSchema.js";

const createTestimonio = async (req, res, next) => {
  const { ideproject } = req.params;
  try {
    const { nombre,contenido } = req.body;

    const existProject = await Proyecto.findById(ideproject);
    if (!existProject) {
      return res.status(404).json({ message: "El proyecto no se encutrado" });
    }

    const TestimonioCreado = await Testimonio.create({
        nombre,
        contenido,
        proyecto:ideproject
    });

    existProject.testimonios = [...existProject.testimonios, TestimonioCreado._id]
    await existProject.save()
    res.status(200).json({
        message: "Testimonio creado correctamente",
        Testimonio: TestimonioCreado,
      });

  } catch (error) {
    console.error("Error al crear el Testimonio:", error);
    res.status(500).json({ message: "Error al crear el Testimonio" });
  }
};

export default createTestimonio;
