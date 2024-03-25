import { Router } from "express";
import { getProject } from "../controllers/getProject.controller.js";
import createProyect from "../controllers/createProyect.controller.js";
import getProyects from "../controllers/getProyects.controller.js";
import updateProject from "../controllers/Update/updateProyectId.controller.js";
import getProjectId from "../controllers/getProyectId.controller.js";
import updateProjectGeneral from "../controllers/Update/updateProjectGeneral.controller.js";


import updateProjectEquipo from "../controllers/Update/updateProjectEquipo.controller.js";
import updateProjectTestimonio from "../controllers/Update/updateProjectTestimonios.controller.js";
import updateProjectContacto from "../controllers/Update/updateProjectContactos.controller.js";
import createEquipo from "../controllers/Create/createEquipo.controller.js";
import deleteProyect from "../controllers/Delete/deleteProyect.controller.js";

import deleteTestimonio from "../controllers/Delete/deleteTestimonio.controller.js";
import deleteContacto from "../controllers/Delete/deleteContacto.controller.js";
import deleteEquipo from "../controllers/Delete/deleteEquipo.controller.js";
import createTestimonio from "../controllers/Create/createTestimonio.controller.js";
import createContacto from "../controllers/Create/createContacto.controller.js";
import { authenticateToken, verificarRol } from "../controllers/Autenticacion/AuthToken.controller.js";

const routesProjects = Router();

routesProjects.get('/project/:id', getProject)
routesProjects.post('/createproject',authenticateToken,verificarRol(['admin','editor','superadmin']),createProyect )
routesProjects.post('/getprojects',authenticateToken,verificarRol(['admin','editor','superadmin']),getProyects )
routesProjects.get('/getprojectid/:id',authenticateToken,verificarRol(['admin','editor','superadmin']),getProjectId )

routesProjects.put('/updateproject/:id',authenticateToken,verificarRol(['admin','editor','superadmin']),updateProject )
// update proyecto general
routesProjects.patch('/updateprojectgeneral/:id',authenticateToken,verificarRol(['admin','editor','superadmin']),updateProjectGeneral )

// update contactos
routesProjects.patch('/updatecontacto/:idcontacto',authenticateToken,verificarRol(['admin','editor','superadmin']),updateProjectContacto )

// update testimonios
routesProjects.patch('/updatetestimonio/:idtestimonio',authenticateToken,verificarRol(['admin','editor','superadmin']),updateProjectTestimonio )

// update equipo integrantes
routesProjects.patch('/updateequipo/:idequipo',authenticateToken,verificarRol(['admin','editor','superadmin']),updateProjectEquipo )

// CREATE EQUIPO
routesProjects.post('/createequipo/:ideproject',authenticateToken,verificarRol(['admin','editor','superadmin']),createEquipo )
// CREATE TESTIMONIO
routesProjects.post('/createtestimonio/:ideproject',authenticateToken,verificarRol(['admin','editor','superadmin']),createTestimonio )
// CREATE cONATCTO
routesProjects.post('/createcontacto/:ideproject',authenticateToken,verificarRol(['admin','editor','superadmin']),createContacto)


// DELETE
routesProjects.delete('/deleteproyecto/:id',authenticateToken,verificarRol(['admin','editor','superadmin']),deleteProyect )
routesProjects.delete('/deletetestimonio/:idtestimonio',authenticateToken,verificarRol(['admin','editor','superadmin']),deleteTestimonio )
routesProjects.delete('/deletecontacto/:idcontacto',authenticateToken,verificarRol(['admin','editor','superadmin']),deleteContacto )
routesProjects.delete('/deleteequipo/:idequipo',authenticateToken,verificarRol(['admin','editor','superadmin']),deleteEquipo )


export default routesProjects;