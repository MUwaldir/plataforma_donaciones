// Modelo de Donación
// Modelo de Categoría
import mongoose from "mongoose";

const DonacionSchema = new mongoose.Schema({
  proyecto: { type: mongoose.Schema.Types.ObjectId, ref: "Proyecto" },
  monto: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  metodo_pago: { type: String, required: true },
});

const Donacion = mongoose.model("Donacion", DonacionSchema);

export default Donacion;
