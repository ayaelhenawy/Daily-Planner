import { userModel } from "../../../Database/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendEmails } from "../../emails/sendEmails";

const signUp=async(req,res)=>{
await userModel.insertMany(req.body);
sendEmails(req.body.email);
res.json({message:'success'})
}

const signin=async(req,res)=>{
    let user= await userModel.findOne({email:req.body.email});
    if(user&&bcrypt.compareSync(req.body.password,user.password)){
        let token =jwt.sign({userId:user.id,role:user.role},'AyaAlaa')//هنا بطبه ال توكن بس عشان اشوف شكله
        return res.json({message:"Login ....",token})
    }
    res.json({message:"Incorrect Email or Password"})
    }

const verifyEmail= async(req,res)=>{
    let token =req.params.token;
    jwt.verify(token,'Ayaalaa',async(err,decoded)=>{
        if(err)  res.json(err);
        else {
            let user= await userModel.findOneAndUpdate({email:decoded.email},{isverify:true})
            res.json({message:'success'})
        }
    })
    
}




export{
    signUp,signin,verifyEmail
}