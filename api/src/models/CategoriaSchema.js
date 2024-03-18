// Modelo de Categoría
import mongoose from "mongoose";
const CategoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true }
  });
  
const Categoria = mongoose.model("Categoria", CategoriaSchema);

export default Categoria;
