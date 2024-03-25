import express from 'express';
import routes from './routes/user.routes.js';
import cors from 'cors';
import morgan from 'morgan';
import routesPayment from './routes/payment.routes.js';
import routesProjects from './routes/projects.routes.js';
import routesPypal from './routes/paypal.routes.js';
import routesUser from './routes/user.routes.js';
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', routesUser)
app.use('/api', routesPayment)
app.use('/api', routesProjects)
app.use('/api', routesPypal)


export default app;