const mongoose = require('mongoose');
const {ObjectId} =mongoose.Schema.Types;
const userschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            requird:true
        },
        phone:{
            type:String,
            required:true
        },
    }
)
module.exports=mongoose.model("User",userschema);
