// Modelo de Testimonio

import mongoose from "mongoose";

const TestimonioSchema = new mongoose.Schema({
  proyecto: { type: mongoose.Schema.Types.ObjectId, ref: "Proyecto" },
  nombre: { type: String, required: true },
  contenido: { type: String, required: true },
});

const Testimonio = mongoose.model("Testimonio", TestimonioSchema);

export default Testimonio;
