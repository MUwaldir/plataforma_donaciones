import { Router } from "express";
import { cancelOrder, captureOrder, createOrder } from "../controllers/paypal.controller.js";

const routesPypal = Router();

routesPypal.post('/create-order/:id', createOrder )
routesPypal.get('/capture-order',captureOrder )
routesPypal.get('/cancele-order',cancelOrder )


export default routesPypal;