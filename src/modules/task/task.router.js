import express from 'express'
import { addTask, allTasks, deleteTask, updateTask } from './task.controller.js';

const taskRouter=express.Router();

taskRouter.post('/addTask',addTask);
taskRouter.put('/updateTask/:id',updateTask)
taskRouter.delete('/deleteTask/:id',deleteTask)
taskRouter.get('/allTasks',allTasks)
export{
    taskRouter
}