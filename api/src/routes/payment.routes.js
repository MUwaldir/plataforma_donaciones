import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";
const routesPayment = Router();

routesPayment.post("/create-checkout-session/:id",createSession)
routesPayment.get("/success", (req, res) => res.send("success"))
routesPayment.get("/cancel", (req, res) => res.send("cancel"))

export default routesPayment;