import jwt from 'jsonwebtoken'


export const auth = (req,res,next)=>{
    let token=req.header('token');
    jwt.verify(token,'AyaAlaa',async(err,decoded)=>{
        if(err)return res.json({message:"error auth",err})
        else next();
})}