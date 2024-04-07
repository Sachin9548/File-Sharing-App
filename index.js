import express from "express";
import cors from "cors";
import router from "./Routes/routes.js";
import dbConnection from "./Database/db.js";
import path from "path";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());


app.use("/", router);

dbConnection();


// deployment
const __dirname1=path.resolve();

const NODE_ENV='production';
if(NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname1,'/clien/dist')));
  app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname1,'clien','dist','index.html'));
  });
}else{ 
  app.get('/', (req, res) => {
    res.send('Hellow World From server js'); 
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
