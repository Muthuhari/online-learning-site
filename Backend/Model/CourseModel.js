
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const courseSchema =new Schema({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    description:{
        type:String,//dataType
        required:true,//validate
    },
    cost:{
        type:Number,//dataType
        required:true,//validate
    },
})

const CourseModel = mongoose.model(
    "CourseModel",//file name
    courseSchema // function name
)

export default CourseModel