import bcrypt from 'bcrypt';
import Usuario from '../../models/UsuarioSchema.js';

export const updateUser = async (req, res) => {
    const { iduser } = req.params;
    const { nombre, apellido, contrasena, email, rol } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const userToUpdate = await Usuario.findById(iduser);
        if (!userToUpdate) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verificar si se proporcionó una nueva contraseña y validarla
        let hashedcontrasena = userToUpdate.contrasena; // Mantener la contraseña existente por defecto
        if (contrasena) {
            // Verificar la validez de la nueva contraseña
            if (!isValidContrasena(contrasena)) {
                return res.status(400).json({ message: "Invalid contrasena. It should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character." });
            }
            // Encriptar la nueva contraseña
            hashedcontrasena = await bcrypt.hash(contrasena, 10);
        }

        // Actualizar los datos del usuario en la base de datos
        userToUpdate.nombre = nombre;
        userToUpdate.apellido = apellido;
        userToUpdate.email = email;
        userToUpdate.rol = rol;
        userToUpdate.contrasena = hashedcontrasena;

        const updatedUser = await userToUpdate.save();

        res.status(200).json({ message: "User updated successfully", usuarioActualizado: updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user" });
    }
};

// Función para validar la contraseña
function isValidContrasena(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;
    return passwordRegex.test(password);
}
