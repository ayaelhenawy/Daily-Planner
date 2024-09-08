import mongoose, { Types } from "mongoose";

const taskSchema= new mongoose.Schema({
    timeTask:String,
    description:String,
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true});

export const taskModel=mongoose.model('todaySchedule',taskSchema);