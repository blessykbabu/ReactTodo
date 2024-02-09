import express from "express";
import cors from "cors";
import router from "../server/router/router.js";
import conn from "../server/connection.js";
import dotenv from "dotenv"
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api",router);


conn()
.then(()=>{
    app.listen(process.env.PORT,error=>{
        if(error){
            console.log(error);
        }else{
            console.log("server startted at port " +process.env.PORT);
        }
    })
})
.catch(error=>{
    console.log(error);
})