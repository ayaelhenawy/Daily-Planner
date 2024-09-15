import bcrypt from 'bcrypt'

// hashSync doesnot need Async Await
export const hashpasowrd =(req,res,next)=>{
    let hash= bcrypt.hashSync(req.body.password,8)
    req.body.password=hash;
    next();
    
}