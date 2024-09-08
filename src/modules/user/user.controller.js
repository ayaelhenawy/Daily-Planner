import { userModel } from "../../../Database/models/user.model.js"
import bcrypt from 'bcrypt'
const signUp=async(req,res)=>{
await userModel.insertMany(req.body);
res.json({message:'success'})
}

const signin=async(req,res)=>{
    let user= await userModel.findOne({email:req.body.email});
    if(user&&bcrypt.compareSync(req.body.password,user.password))
        return res.json({message:"Login ...."})
    res.json({message:"Incorrect Email or Password"})
    }
export{
    signUp,signin
}