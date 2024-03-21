import { Router } from "express";
import { getProject } from "../controllers/getProject.controller.js";
import createProyect from "../controllers/createProyect.controller.js";
import getProyects from "../controllers/getProyects.controller.js";
import updateProject from "../controllers/updateProyectId.controller.js";
import getProjectId from "../controllers/getProyectId.controller.js";
import updateProjectGeneral from "../controllers/updateProjectGeneral.controller.js";


import updateProjectEquipo from "../controllers/updateProjectEquipo.controller.js";
import updateProjectTestimonio from "../controllers/updateProjectTestimonios.controller.js";
import updateProjectContacto from "../controllers/updateProjectContactos.controller.js";

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


export default routesProjects;