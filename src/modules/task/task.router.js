import express from 'express'
import { addTask, deleteTask, updateTask } from './task.controller.js';

const taskRouter=express.Router();

taskRouter.post('/addTask',addTask);
taskRouter.put('/updateTask/:id',updateTask)
taskRouter.delete('/deleteTask/:id',deleteTask)
export{
    taskRouter
}