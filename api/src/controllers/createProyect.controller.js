import Categoria from "../models/CategoriaSchema.js";
import Contacto from "../models/ContactoSchema.js";
import Equipo from "../models/EquipoSchema.js";
import Proyecto from "../models/ProyectoSchema.js";
import Testimonio from "../models/TestimonioSchema.js";

const createProyect = async (req, res, next) => {
  try {
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

    // Insertar la categoría
    let categoriaInsertada = await Categoria.findOne({ nombre: categoria });
    if (!categoriaInsertada) {
      categoriaInsertada = await Categoria.create({ nombre: categoria });
    }

    // Crear el proyecto con la referencia a la categoría
    const proyecto = new Proyecto({
      titulo,
      descripcion,
      monto_meta,
      organizacion,
      categoria: categoriaInsertada._id,
      ubicacion,
      miembros,
      imagenes,
      cuentas_bancarias,
      monederos_digitales,
    });

    // Guardar el proyecto en la base de datos
    const proyectoInsertado = await proyecto.save();

    // Guardar los IDs de los contactos relacionados con el proyecto
    const contactosIds = await Promise.all(contacto.map(async (contactoItem) => {
      const contactoNuevo = new Contacto({ ...contactoItem, proyecto: proyectoInsertado._id });
      const contactoGuardado = await contactoNuevo.save();
      return contactoGuardado._id;
    }));
    proyectoInsertado.contactos = contactosIds;

    // Guardar los IDs de los equipos relacionados con el proyecto
    const equiposIds = await Promise.all(equipo.map(async (equipoItem) => {
      const equipoNuevo = new Equipo({ ...equipoItem, proyecto: proyectoInsertado._id });
      const equipoGuardado = await equipoNuevo.save();
      return equipoGuardado._id;
    }));
    proyectoInsertado.equipo = equiposIds;

    // Guardar los IDs de los testimonios relacionados con el proyecto
    const testimoniosIds = await Promise.all(testimonio.map(async (testimonioItem) => {
      const testimonioNuevo = new Testimonio({ ...testimonioItem, proyecto: proyectoInsertado._id });
      const testimonioGuardado = await testimonioNuevo.save();
      return testimonioGuardado._id;
    }));
    proyectoInsertado.testimonios = testimoniosIds;

    // Guardar los cambios en el proyecto
    await proyectoInsertado.save();

    res.status(201).json({
      message: "Data insertada correctamente",
      proyecto: proyectoInsertado,
    });
  } catch (error) {
    console.error("Error al insertar la data:", error);
    res.status(500).json({ message: "Error al insertar la data" });
  }
};

export default createProyect;
