import app from "./src/app.js";
const PORT = 3001

app.listen(PORT, () =>{
    console.log(`listening on http://localhost:${PORT}`);
})