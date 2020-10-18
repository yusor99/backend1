
import * as express from "express";
import  v1 from '../route/app/v1'
import { Connection, createConnection } from 'typeorm';
const app=express();
const port=3000;


createConnection().then(async(Connection)=>{
  
app.use(express.json());
app.use("/v1",v1);

app.listen(port,()=>{
    console.log(`running at ${port}`)  
});

});

