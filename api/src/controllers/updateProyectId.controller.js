import Categoria from "../models/CategoriaSchema.js";
import Contacto from "../models/ContactoSchema.js";
import Equipo from "../models/EquipoSchema.js";
import Proyecto from "../models/ProyectoSchema.js";
import Testimonio from "../models/TestimonioSchema.js";

const updateProject = async (req, res, next) => {
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
      contacto,
      equipo,
      testimonio,
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

  

    // Actualizar los contactos relacionados con el proyecto
    await Contacto.deleteMany({ proyecto: projectId });
    const nuevosContactos = await Contacto.create(contacto.map(contactoItem => ({
      ...contactoItem,
      proyecto: projectId,
    })));
    
    const idContactos = nuevosContactos.map((n) => n._id)
    proyectoExistente.contactos = idContactos;

    // Actualizar los equipos relacionados con el proyecto
    await Equipo.deleteMany({ proyecto: projectId });
    const nuevosEquipos = await Equipo.create(equipo.map(equipoItem => ({
      ...equipoItem,
      proyecto: projectId,
    })));
    const idEquipos = nuevosEquipos.map((n) => n._id)

    proyectoExistente.equipo = idEquipos;

    // Actualizar los testimonios relacionados con el proyecto
    await Testimonio.deleteMany({ proyecto: projectId });
    const nuevosTestimonios = await Testimonio.create(testimonio.map(testimonioItem => ({
      ...testimonioItem,
      proyecto: projectId,
    })));
    const idTestimonios = nuevosTestimonios.map((n) => n._id)
    proyectoExistente.testimonios = idTestimonios;

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

export default updateProject;
