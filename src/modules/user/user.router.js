import express from 'express'
import { signin, signUp } from './user.controller.js';
import { checkEmailExist } from '../../middleware/checkEmailExist.js';
import { hashpasowrd } from '../../middleware/hash.js';

const userRouter=express.Router();

userRouter.post('/signUp',checkEmailExist,hashpasowrd,signUp);
userRouter.post('/signin',signin);
export{
    userRouter
}