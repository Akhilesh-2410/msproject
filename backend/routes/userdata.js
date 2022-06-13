const express = require('express');
const router=express.Router();
const mongoose = require('mongoose');
const requirelogin = require('./middleware.js');
const userpost=mongoose.model("UserPosts");
const cloudinary=require("../cloudinary");
const upload=require("../multer");

router.post("/upload", upload.single("file"), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(req);
      console.log(result)
      res.status(200).send({
        name: req.file.originalname,
        url: result.secure_url,
      });
    } catch (err) {
      console.log(err);
    }
  });

router.post("/postdoc",requirelogin,(req,res)=>{
    const a=req.body;
    if(!a||!a.userid||!a.requirementType)
        return res.status(422).json({error:"please add all of the fields"});
    const document={};
        if(a.url!=null && a.name!=null){
            document.requirementType=a.requirementType
            document.name=a.name
            document.url=a.url
        }
        const data={}
        if(a.data!=null)data=a.data
    const post=new userpost({
        userid,
        requirementType,
        data:a.data,
        document:document
    })
    post.save().then(result=>{
        res.json({post:result});
    }).catch(err=>{
        console.log(err);
    })
})

router.get("/getAllPost",requirelogin,(req,res)=>{
    userpost.find().then(posts=>{
        res.json(posts)
    }).catch(err=>{
        console.log(err);
    })
})

router.put("/updatedoc",requirelogin,(req,res)=>{
    const {requirementType,name,url}=req.body;
    const newcontent={
        name:name,
        url:url
    }
    userpost.findByIdAndUpdate(req.body._id,{
        $push:{data:newcontent}
    },{new:true}).exec((err,result)=>{
        if(err)
            return res.status(422).json({error:err})
        else
            res.json(result);
    })
})
module.exports=router;
