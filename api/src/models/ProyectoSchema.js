// Modelo de Categoría
import mongoose from "mongoose";

const ProyectoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  monto_meta: { type: Number, required: true },
  organizacion: { type: String, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  ubicacion: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
    direccion: { type: String, required: true },
  },
  miembros: { type: Number, required: true },
  imagenes: [{ type: String, required: true }],
  cuentas_bancarias: [{ type: mongoose.Schema.Types.Mixed, required: true }],
  monederos_digitales: [{ type: mongoose.Schema.Types.Mixed, required: true }],
  testimonios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Testimonio' }],
  contactos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacto' }],
  equipo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipo' }]
});

const Proyecto = mongoose.model("Proyecto", ProyectoSchema);

export default Proyecto;
