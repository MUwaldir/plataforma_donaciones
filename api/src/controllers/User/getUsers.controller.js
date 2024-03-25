import Usuario from "../../models/UsuarioSchema.js";

const getUsers = async (req, res) => {
  // const users = [
  //   {
  //     _id: "1",
  //     nombre: "Juan",
  //     apellido: "Pérez",
  //     email: "juan.perez@example.com",
  //     contrasena:"12345678",
  //     rol: "Administrador",
  //   },
  //   {
  //     _id: "2",
  //     nombre: "María",
  //     apellido: "García",
  //     email: "maria.garcia@example.com",
  //     contrasena:"12345678",
  //     rol: "Usuario",
  //   },
  //   {
  //     _id: "3",
  //     nombre: "Carlos",
  //     apellido: "López",
  //     email: "carlos.lopez@example.com",
  //     contrasena:"12345678",
  //     rol: "Usuario",
  //   },
  //   {
  //     _id: "4",
  //     nombre: "Laura",
  //     apellido: "Martínez",
  //     email: "laura.martinez@example.com",
  //     contrasena:"12345678",
  //     rol: "Usuario",
  //   },
  //   {
  //     _id: "5",
  //     nombre: "Pedro",
  //     apellido: "Rodríguez",
  //     email: "pedro.rodriguez@example.com",
  //     contrasena:"12345678",
  //     rol: "Administrador",
  //   },
  // ];
  const users = await Usuario.find({}, '-contrasena');
  res.status(200).json({ users: users });
};

export default getUsers;
