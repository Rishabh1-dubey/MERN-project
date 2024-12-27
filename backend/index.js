import express  from "express"
import cookieParsar from "cookie-parser";
import userRoutes from "../backend/routes/userRoutes.js"
import dotenv from "dotenv";
import mongooseConnection from "./utils/database.js";


mongooseConnection()

dotenv.config({
    path:".env"
})

const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParsar())



//this is the function where you define your database


app.get("/",(req,res)=>{
res.status(401).json({
    Message:"hello i am coming from backend",
    success:true
})
})

//api
app.use("/api/v1/user", userRoutes)
//http:8080/api/v1/user/register



const PORT = 8080
app.listen(PORT,()=>{
    console.log(`server on listening on port no ${PORT}`)
})