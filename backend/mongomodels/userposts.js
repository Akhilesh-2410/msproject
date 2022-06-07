const mongoose = require('mongoose');
const {ObjectId} =mongoose.Schema.Types;
const userpostschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true
        },
        dob:{
            type:Date,
            requird:true
        },
        requirementType:{
            type:String,
            required:true
        },
        data:{
            type:String,
            required:true
        }
    }
)
module.exports=mongoose.model("UserPosts",userpostschema);