import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.route.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/products", productRoutes);




app.listen(PORT, ()=> {
    connectDB();
    console.log("server started at https://localhost:" + PORT);
})