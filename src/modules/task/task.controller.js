import { taskModel } from "../../../Database/models/todaySchedule.model.js"



const addTask= async(req,res)=>{
    await taskModel.insertMany(req.body);
    res.json({message:"success"})
}
export{
    addTask
}