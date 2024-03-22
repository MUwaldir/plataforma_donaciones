import Categoria from "../../models/CategoriaSchema.js";
import Proyecto from "../../models/ProyectoSchema.js";

const updateProjectGeneral = async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const {
      titulo,
      descripcion,
      monto_meta,
      organizacion,
      categoria,
      ubicacion,
      miembros,
      imagenes,
      cuentas_bancarias,
      monederos_digitales,
    } = req.body;

    // Buscar el proyecto existente en la base de datos
    const proyectoExistente = await Proyecto.findById(projectId);
    if (!proyectoExistente) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    // Actualizar los campos del proyecto
    proyectoExistente.titulo = titulo;
    proyectoExistente.descripcion = descripcion;
    proyectoExistente.monto_meta = monto_meta;
    proyectoExistente.organizacion = organizacion;

    // Insertar o actualizar la categoría
    let categoriaInsertada = await Categoria.findOne({ nombre: categoria });
    if (!categoriaInsertada) {
      categoriaInsertada = await Categoria.create({ nombre: categoria });
    }
    proyectoExistente.categoria = categoriaInsertada._id;

    proyectoExistente.ubicacion = ubicacion;
    proyectoExistente.miembros = miembros;
    proyectoExistente.imagenes = imagenes;
    proyectoExistente.cuentas_bancarias = cuentas_bancarias;
    proyectoExistente.monederos_digitales = monederos_digitales;

    // Guardar el proyecto actualizado en la base de datos
    const proyectoActualizado = await proyectoExistente.save();
    res.status(200).json({
      message: 'Proyecto actualizado correctamente',
      proyecto: proyectoActualizado,
    });
  } catch (error) {
    console.error('Error al actualizar el proyecto:', error);
    res.status(500).json({ message: 'Error al actualizar el proyecto' });
  }
};

export default updateProjectGeneral;
