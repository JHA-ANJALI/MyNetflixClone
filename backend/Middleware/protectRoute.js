
import jwt from "jsonwebtoken";
import { User } from "../Models/user.model.js";
import { ENV_VARS } from "../Config/envVars.js";

export const protectRoute=async(req,res,next)=>{
    try {
        //get the token
        const token=req.cookies["jwt-netflix"]
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized - No Token Provided"})
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({success:false,message:"Unauthorized - Invalid Token Provided"})
        }

        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({success:false,message:"User not found"})
        }
        req.user=user;
        next();


        
    } catch (error) {
        console.log("Error in protecting middleware:",error.message)
        res.status(500).json({success:false,message:"Internal Server Error"})
        
    }

}
