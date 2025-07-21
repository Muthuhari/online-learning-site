
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImgSchema =new Schema({
    
    image:{
        type:String,//dataType
        required:true,//validate
    },
})
module.exports = mongoose.model(
    "ImagModel",//file name
    ImgSchema // function name
)