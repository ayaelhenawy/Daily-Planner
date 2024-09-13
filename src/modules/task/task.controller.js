import { taskModel } from "../../../Database/models/todaySchedule.model.js"
import jwt from 'jsonwebtoken'


const addTask= async(req,res)=>{
    await taskModel.insertMany(req.body);
    res.json({message:"success"})
}


const updateTask =async(req,res)=>{
    let task= await taskModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(task)
        res.json({message:"success",task})
        else res.json({message:"this task not found.."})
}

const deleteTask =async(req,res)=>{
    let task= await taskModel.findByIdAndDelete(req.params.id)
    if(task)
    res.json({message:"success",task})
    else res.json({message:"this task not found.."})

}

const allTasks =async(req,res)=>{
            let task= await taskModel.find().populate('createdBy','name -_id')
            if(task)
            res.json({message:"success",task})
            else res.json({message:"No task is founded.."})
    }

export{
    addTask, updateTask,deleteTask,allTasks
}