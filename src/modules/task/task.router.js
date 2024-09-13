import express from 'express'
import { addTask, allTasks, deleteTask, updateTask } from './task.controller.js';
import { auth } from '../../middleware/auth.js';

const taskRouter=express.Router();

taskRouter.post('/addTask',auth,addTask);
taskRouter.put('/updateTask/:id',auth,updateTask)
taskRouter.delete('/deleteTask/:id',auth,deleteTask)
taskRouter.get('/allTasks',auth,allTasks)
export{
    taskRouter
}