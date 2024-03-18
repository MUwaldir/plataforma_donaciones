import mongoose from "mongoose";
// Modelo de Contacto
const ContactoSchema = new mongoose.Schema({
    proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
    tipo: { type: String, required: true },
    valor: { type: String, required: true }
  });

const Contacto = mongoose.model("Contacto", ContactoSchema);

export default Contacto;
