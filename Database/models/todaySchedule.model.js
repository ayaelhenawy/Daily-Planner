import mongoose, { Types } from "mongoose";

const scheduleSchema= new mongoose.Schema({
    timeSchedule:String,
    description:String,
    createdBy:mongoose.Types.ObjectId
},{timestamps:true});

export const scheduleModel=mongoose.model('todaySchedule',scheduleSchema);