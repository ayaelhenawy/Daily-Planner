import express from 'express'
import { signin, signUp, verifyEmail } from './user.controller.js';
import { checkEmailExist } from '../../middleware/checkEmailExist.js';
import { hashpasowrd } from '../../middleware/hash.js';


const userRouter=express.Router();

userRouter.post('/signUp',checkEmailExist,hashpasowrd,signUp);
userRouter.post('/signin',signin);
userRouter.get('/verifyEmail/:token',verifyEmail)
export{
    userRouter
}