import express from 'express'
import { addTask } from './task.controller.js';

const taskRouter=express.Router();

taskRouter.post('/addTask',addTask);
export{
    taskRouter
}