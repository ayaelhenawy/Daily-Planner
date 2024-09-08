import { taskModel } from "../../../Database/models/todaySchedule.model.js"



const addTask= async(req,res)=>{
    await taskModel.insertMany(req.body);
    res.json({message:"success"})
}


const updateTask =async(req,res)=>{
    let task= await taskModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({message:"success",task})
}


export{
    addTask, updateTask
}