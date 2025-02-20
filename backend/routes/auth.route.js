import express from 'express'
import { authCheck, login, logout, signup } from '../controller/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js'; 

const router = express.Router();


// router.get("/signup",(req,res)=>{
//     res.send("signup route")
// })

// router.get("/login",(req,res)=>{
//     res.send("login route")
// })

// router.get("/logout",(req,res)=>{
//     res.send("logout route")
// })


router.post("/signup",signup)

router.post("/login", login)

router.post("/logout",logout)

router.get("/authCheck", protectRoute, authCheck);

export default router;