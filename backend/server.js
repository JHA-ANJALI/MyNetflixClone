import express from 'express'; //esm module type
import cookieParser from 'cookie-parser';



// import dotenv from "dotenv"

import authRoute from "./routes/auth.route.js";
import movieRoute from "./routes/movie.route.js"
import tvRoute from "./routes/tv.route.js";
import searchRoute from './routes/search.route.js'

import { ENV_VARS } from './Config/envVars.js';
import { connectDB } from './Config/db.js';
import { protectRoute } from './middleware/protectRoute.js';




// dotenv.config();

const app=express();

const PORT= ENV_VARS.PORT


// console.log("MONGO_URI: ", process.env.MONGO_URI)

// app.get("/api/v1/signup",(req,res)=>{
//     res.send("signup route")
// })

// app.get("/api/v1/login",(req,res)=>{
//     res.send("login route")
// })

// app.get("/api/v1/logout",(req,res)=>{
//     res.send("logout route")
// })

app.use(express.json());//will allow us to parse req.body
app.use(cookieParser())




app.use("/api/v1/auth",authRoute)
app.use("/api/v1/movie", protectRoute , movieRoute)
app.use("/api/v1/tv", protectRoute , tvRoute)
app.use("/api/v1/search", protectRoute , searchRoute)



app.listen(PORT,()=>{
    console.log("server started at http://localhost:"+PORT)
    connectDB();
})



// JQDhLxi5FURwZxaR


