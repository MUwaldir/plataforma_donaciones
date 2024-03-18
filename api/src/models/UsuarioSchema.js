// Modelo de Usuario (si es necesario)

import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    contrasena: { type: String, required: true },
    // Otros campos de usuario según sea necesario
  });


const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;
