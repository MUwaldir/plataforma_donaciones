import Usuario from "../../models/UsuarioSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const LoginUser = async (req, res, next) => {
  const { email, contrasena } = req.body;

  try {
    // Buscar el usuario en la base de datos por su email
    const usuario = await Usuario.findOne({ email });

    // Verificar si el usuario existe
    if (!usuario) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Verificar si la contraseña es válida utilizando bcrypt
    const isValidPassword = await bcrypt.compare(contrasena, usuario.contrasena);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Si el usuario y la contraseña son válidos, generar el token JWT
    const token = jwt.sign(
      { id: usuario._id, email: usuario.email, rol: usuario.rol },
      "secret",
      { expiresIn: "1h" }
    );

    // Devolver el token en la respuesta junto con los datos del usuario
    const dataUser = {
      nombre: usuario.nombre,
      rol: usuario.rol,
    };

    res.status(200).json({ token, dataUser });
  } catch (error) {
    console.error("Error al autenticar usuario:", error);
    res.status(500).json({ message: "Error al autenticar usuario" });
  }
};

export default LoginUser;
