
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema =new Schema({
    name:{
        type:String,//dataType
        required:true,//validate
    },
    gmail:{
        type:String,//dataType
        required:true,//validate
    },
    password:{
        type:String,//dataType
        required:true,//validate
    }
})
const User = mongoose.model(
    "User",//file name
    userSchema // function name
)

export default User