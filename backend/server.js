import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Product from './models/product.model.js';
dotenv.config();

const app = express();
app.use(express.json());
app.post('/api/products',async(req,res)=>{
    const product = req.body;
    
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false, message:"please provide all the fields"
        });
    }
const newProduct = new Product(product);
try{
    await newProduct.save();
    res.status(200).json({ success:true, data: newProduct});
}
catch(error){
    console.log("Error in create Product: ", error.message);
    res.status(500).json({ success : false, message : " Server Error"});
}
});
connectDB();

app.listen(3000, ()=> {
  
    console.log("server started at port:3000 ");
})