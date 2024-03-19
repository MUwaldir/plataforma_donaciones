import { Router } from "express";
import { getProject } from "../controllers/getProject.controller.js";
import createProyect from "../controllers/createProyect.controller.js";
import getProyects from "../controllers/getProyects.controller.js";
import updateProject from "../controllers/updateProyectId.controller.js";
import getProjectId from "../controllers/getProyectId.controller.js";

const routesProjects = Router();

routesProjects.get('/project/:id', getProject)
routesProjects.post('/createproject',createProyect )
routesProjects.get('/getprojects',getProyects )
routesProjects.get('/getprojectid/:id',getProjectId )

routesProjects.put('/updateproject/:id',updateProject )



export default routesProjects;