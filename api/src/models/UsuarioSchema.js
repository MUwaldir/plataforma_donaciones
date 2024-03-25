import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Define el esquema del usuario
const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'editor', 'usuario','superadmin'], default: 'usuario' },
    // Otros campos del usuario según sea necesario
});

// Crea el modelo de usuario a partir del esquema
const Usuario = mongoose.model("Usuario", UsuarioSchema);

export default Usuario;
