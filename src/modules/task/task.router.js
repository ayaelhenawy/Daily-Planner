import express from 'express'
import { addTask, updateTask } from './task.controller.js';

const taskRouter=express.Router();

taskRouter.post('/addTask',addTask);
taskRouter.put('/updateTask/:id',updateTask)
export{
    taskRouter
}