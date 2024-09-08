import mongoose, { Types } from "mongoose";

const taskSchema= new mongoose.Schema({
    timeTask:String,
    description:String,
    createdBy:mongoose.Types.ObjectId
},{timestamps:true});

export const taskModel=mongoose.model('todaySchedule',taskSchema);