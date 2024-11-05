import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/',function(req,res){
    res.send("Server is Ready");
})
connectDB();

app.listen(3000, ()=> {
  
    console.log("server started at port:3000 ");
})