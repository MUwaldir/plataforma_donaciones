import express from 'express';
import routes from './routes/user.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes)

export default app;