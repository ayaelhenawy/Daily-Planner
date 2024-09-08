import { userModel } from "../../Database/models/user.model.js"


export const checkEmailExist=async(req,res,next)=>{
    let user= await userModel.findOne({email:req.body.email});
    if(user) return res.json({message:"This user is exist"})
        next()
}