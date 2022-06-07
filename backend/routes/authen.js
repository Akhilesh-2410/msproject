const express = require('express');
const router=express.Router();
const mongoose = require('mongoose');
const User=mongoose.model("User");
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_Secret="edwhfkwoddjfoiwdjfoijwdofijww";
const requirelogin =require("./middleware.js")

router.get("/protected",requirelogin,(req,res)=>{
    res.send("HELLO boiiii");
});

router.post("/admin-signin",(req,res)=>{
    const {username,password}=req.body
    if(!username || !password)
        return res.json({error:"Please enter the fields"});
    if(username!="adminmsproject" || password!="msprojects5")
        return res.json({error:"Only admins allowed"});
    res.json("Welcome admin");
})

router.post("/signup",(req,res)=>{
    const{name,email,dob,phone}=req.body
    if(!email || !dob ||!name ||!phone)
        return res.status(422).json({error:"You have to give information"});
    User.findOne({email:email}).then(saveduser=>{
        if(saveduser){
            return res.status(200).json({error:"User already exists"});
        }
        bcryptjs.hash(dob,14).then(hashed=>{  
            const user=new User({
                email,
                dob:hashed,
                name,
                phone
            })
            user.save().then(user=>{
                res.json({message:"saved succesfully"})
            }).catch(err=>{
                console.log(err)
            })
        })
    }).catch(err=>{
        console.log(err);
    })
})
router.post("/signin",(req,res)=>{
    const{uid,dob}=req.body;
    if(!uid || !dob)
        return res.status(422).json({error:"please add uid/dob"});
    User.findOne({_id:uid}).then(saveduser=>{
        if(!saveduser)
            return res.status(422).json({error:"please signup before signing in"});
        bcryptjs.compare(dob,saveduser.dob).then(doMatch=>{
            if(doMatch){
                const{_id,name,email,phone,dob}=saveduser;
                const token=jwt.sign({_id:saveduser._id},JWT_Secret)
                res.json({token,user:{_id,email,name,phone,dob}});
            }
            else
            return res.status(422).json({error:"Invalid uid/dob"});
        }).catch(err=>{
            console.log(err);
        })
    })
})

router.put("/updateProfile",requirelogin,(req,res)=>{
    const {_id,name,phone,email,dob}=req.body;
    bcryptjs.hash(dob,14).then(hashed=>{
    User.findByIdAndUpdate(req.body._id,{
        $set:{name:name,phone:phone,email:email,dob:hashed}
    },{new:true}).exec((err,result)=>{
        if(err)
            return res.status(422).json({error:err})
        else
            res.json(result);
    })})
})
module.exports=router;
