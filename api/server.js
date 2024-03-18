import app from "./src/app.js";
import {config} from 'dotenv';
import { connectDB } from "./src/bd.js";
config()
const PORT = process.env.PORT

app.listen(PORT, () =>{
    connectDB()
    console.log(`listening on http://localhost:${PORT}`);
})