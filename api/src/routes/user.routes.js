import { Router } from "express";
const routes = Router();

routes.post('/login', (req, res) => {
    const { email,password} = req.body;
    const data = { email: email, password: password };
    console.log( email ,' ', password);
    res.status(200).json(data);
})
routes.get('/', (req,res,next) => {
    res.send('Welcome to the first app platform donation page')
});

export default routes;