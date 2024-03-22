// Modelo de Equipo
// Modelo de Categoría
import mongoose from "mongoose";


const EquipoSchema = new mongoose.Schema({
    proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    descripcion: { type: String },
    imagen: { type: String, required: true },

  });
  

const Equipo = mongoose.model("Equipo", EquipoSchema);

export default Equipo;
