import express from 'express'
import { signUp } from './user.controller.js';
import { checkEmailExist } from '../../middleware/checkEmailExist.js';

const userRouter=express.Router();

userRouter.post('/signUp',checkEmailExist,signUp);

export{
    userRouter
}