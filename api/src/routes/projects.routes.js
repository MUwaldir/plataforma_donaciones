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



export default routesProjects;