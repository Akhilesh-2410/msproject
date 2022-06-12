const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_Secret = "edwhfkwoddjfoiwdjfoijwdofijww";
const requirelogin = require("./middleware.js");
const admin = mongoose.model("Admin");

router.get("/protected", requirelogin, (req, res) => {
  res.send("HELLO boiiii");
});

router.post("/admin-signin",(req,res)=>{
    const {username,password}=req.body
    if(!username || !password)
        return res.json({error:"Please enter the fields"});
    admin.findOne({name:username}).then(saveduser=>{
            if(!saveduser)
                return res.status(422).json({error:"Only admins allowed"});
            bcryptjs.compare(password,saveduser.password).then(doMatch=>{
                if(doMatch){
                    const{_id,name,email,phone,password}=saveduser;
                    const token=jwt.sign({_id:saveduser._id},JWT_Secret)
                    res.json({token,user:{_id,email,name,phone,password}});
                }
                else
                return res.status(422).json({error:"Invalid name/password"});
            }).catch(err=>{
                console.log(err);
            })
        })
})

router.post("/admin-signup",(req,res)=>{
    const{name,email,password,phone}=req.body
    if(!email || !password ||!name ||!phone)
        return res.status(422).json({error:"You have to give information"});
    admin.findOne({name:name}).then(saveduser=>{
        if(saveduser){
            return res.status(200).json({error:"admin already exists"});
        }
        bcryptjs.hash(password,14).then(hashed=>{  
            const ad=new admin({
                email,
                password:hashed,
                name,
                phone
            })
            ad.save().then(ad=>{
                res.json({message:"saved succesfully"})
            }).catch(err=>{
                console.log(err)
            })
        })
    }).catch(err=>{
        console.log(err);
    })
})
router.post("/signup",(req,res)=>{
    const a=req.body
    console.log(a.uid);
    if(!a)
        return res.status(422).json({error:"You have to give information"});
    User.findOne({uid:a.uid}).then(saveduser=>{
        if(saveduser){
            return res.status(200).json({error:"User already exists"});
        }
        bcryptjs.hash(a.dob,14).then(hashed=>{ 
            a.dob=hashed; 
            const user=new User(a)
            user.save().then(user=>{
                res.json({message:"saved succesfully"})
            }).catch(err=>{
                console.log(err)
            })
        })
    }).catch(err=>{
        console.log(err);
      });
  });
});

router.post("/admin-signup", (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!email || !password || !name || !phone)
    return res.status(422).json({ error: "You have to give information" });
  admin
    .findOne({ name: name })
    .then((saveduser) => {
      if (saveduser) {
        return res.status(200).json({ error: "admin already exists" });
      }
      bcryptjs.hash(password, 14).then((hashed) => {
        const ad = new admin({
          email,
          password: hashed,
          name,
          phone,
        });
        ad.save()
          .then((ad) => {
            res.json({ message: "saved succesfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signup", (req, res) => {
  const a = req.body;
  console.log(a.uid);
  if (!a)
    return res.status(422).json({ error: "You have to give information" });
  User.findOne({ uid: a.uid })
    .then((saveduser) => {
      if (saveduser) {
        return res.status(200).json({ error: "User already exists" });
      }
      bcryptjs.hash(a.dob, 14).then((hashed) => {
        const user = new User(a);
        user
          .save()
          .then((user) => {
            res.json({ message: "saved succesfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { uid, dob } = req.body;
  if (!uid || !dob)
    return res.status(422).json({ error: "please add uid/dob" });
  User.findOne({ uid: uid }).then((saveduser) => {
    if (!saveduser)
      return res.status(422).json({ error: "please signup before signing in" });
    bcryptjs
      .compare(dob, saveduser.dob)
      .then((doMatch) => {
        if (doMatch) {
          const a = saveduser;
          const token = jwt.sign({ _id: a._id }, JWT_Secret);
          res.json({ token, user: a });
        } else {
          return res.status(422).json({ error: "Invalid uid/dob" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

<<<<<<< HEAD
router.put("/updateProfile", requirelogin, (req, res) => {
  const { _id, name, phone, email, dob } = req.body;
  bcryptjs.hash(dob, 14).then((hashed) => {
    User.findByIdAndUpdate(
      req.body._id,
      {
        $set: { name: name, phone: phone, email: email, dob: hashed },
      },
      { new: true }
    ).exec((err, result) => {
      if (err) return res.status(422).json({ error: err });
      else res.json(result);
    });
  });
});
module.exports = router;
=======
router.put("/updateProfile",requirelogin,(req,res)=>{
    const a=req.body;
    bcryptjs.hash(dob,14).then(hashed=>{
    User.findByIdAndUpdate(a._id,{
        $set:a
    },{new:true}).exec((err,result)=>{
        if(err)
            return res.status(422).json({error:err})
        else
            res.json(result);
    })})
})
module.exports=router;
>>>>>>> 2d08b29505559fae30ac32dea1669c4ec119aa75
