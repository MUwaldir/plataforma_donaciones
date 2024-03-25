import { Router } from "express";
import { createUser } from "../controllers/User/createUser.controller.js";
import getUsers from "../controllers/User/getUsers.controller.js";
import LoginUser from "../controllers/User/LoginUser.controller.js";
import { authenticateToken, verificarRol } from "../controllers/Autenticacion/AuthToken.controller.js";
import { updateUser } from "../controllers/User/updateUser.controller.js";
const routesUser = Router();

// LOGIN
routesUser.post('/login', LoginUser)

// creacion
routesUser.post('/createuser',authenticateToken,verificarRol(['superadmin']), createUser)
routesUser.patch('/updateuser/:iduser',authenticateToken,verificarRol(['superadmin']), updateUser)

routesUser.post('/getusers',authenticateToken,verificarRol(['admin',]) , getUsers)


routesUser.get('/', (req,res,next) => {
    res.send('Welcome to the first app platform donation page')
});

export default routesUser;