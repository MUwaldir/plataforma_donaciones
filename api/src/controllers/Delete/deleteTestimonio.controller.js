import Proyecto from "../../models/ProyectoSchema.js";
import Testimonio from "../../models/TestimonioSchema.js";


const deleteTestimonio = async (req, res) => {
  const { idtestimonio } = req.params;
  try {
    const existTestimonio = await Testimonio.findById(idtestimonio);
    if (!existTestimonio) {
      return res.status(404).json({ message: "Testimonio not found" });
    }
    await Testimonio.findByIdAndDelete(idtestimonio);

    const proyecto = await Proyecto.findById(existTestimonio.proyecto);
    proyecto.testimonios = proyecto.testimonios.filter(
      (testimonio) => testimonio.toString() !== idtestimonio
    );
    await proyecto.save();

    res
      .status(200)
      .send({ success: true, message: "Testimonio deleted successfully" });
  } catch (error) {
    console.error(
      "Error al eliminar el Testimonio y actualizar el proyecto:",
      error
    );
    return {
      success: false,
      message: "Error al eliminar el Testimonio y actualizar el proyecto.",
    };
  }
};

export default deleteTestimonio;
