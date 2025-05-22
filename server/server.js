import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";


// connect db
connectDB();

const app = express();

app.use(cors());

// UYODfIAvEGSgXvlG



app.get('/', (req, res)=>{
    res.send("API is working")
})

const PORT = process.env.PORT || 5005;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
    
})
