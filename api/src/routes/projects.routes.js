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

const routesProjects = Router();

routesProjects.get('/project/:id', getProject)
routesProjects.post('/createproject',createProyect )
routesProjects.get('/getprojects',getProyects )
routesProjects.get('/getprojectid/:id',getProjectId )

routesProjects.put('/updateproject/:id',updateProject )
// update proyecto general
routesProjects.patch('/updateprojectgeneral/:id',updateProjectGeneral )

// update contactos
routesProjects.patch('/updatecontacto/:idcontacto',updateProjectContacto )

// update testimonios
routesProjects.patch('/updatetestimonio/:idtestimonio',updateProjectTestimonio )

// update equipo integrantes
routesProjects.patch('/updateequipo/:idequipo',updateProjectEquipo )

// CREATE EQUIPO
routesProjects.post('/createequipo/:ideproject',createEquipo )
// CREATE TESTIMONIO
routesProjects.post('/createtestimonio/:ideproject',createTestimonio )
// CREATE cONATCTO
routesProjects.post('/createcontacto/:ideproject',createContacto)


// DELETE
routesProjects.delete('/deleteproyecto/:id',deleteProyect )
routesProjects.delete('/deletetestimonio/:idtestimonio',deleteTestimonio )
routesProjects.delete('/deletecontacto/:idcontacto',deleteContacto )
routesProjects.delete('/deleteequipo/:idequipo',deleteEquipo )


export default routesProjects;