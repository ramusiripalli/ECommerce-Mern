import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);




app.listen(3000, ()=> {
    connectDB();
    console.log("server started at port:3000 ");
})