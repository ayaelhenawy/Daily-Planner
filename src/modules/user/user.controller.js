import { userModel } from "../../../Database/models/user.model.js"


const signUp=async(req,res)=>{
await userModel.insertMany(req.body);
res.json({message:'success'})
}
export{
    signUp
}