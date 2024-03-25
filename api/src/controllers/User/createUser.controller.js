import bcrypt from 'bcrypt';
import Usuario from '../../models/UsuarioSchema.js';

export const createUser = async (req, res) => {
  const { nombre, apellido, contrasena, email, rol } = req.body;

  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crear el usuario con la contraseña encriptada
    const crearUser = await Usuario.create({
      nombre,
      apellido,
      contrasena: hashedPassword, // Guardar la contraseña encriptada
      email,
      rol,
    });

    res.status(200).json({ message: "User created successfully", userCreado: crearUser });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};
