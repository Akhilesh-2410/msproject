const express = require('express');
const cors = require('cors');
const app=express();
const postdata=require("./firebase_config");
app.use(express.json());
app.use(cors());

app.post("/create",async(req,res)=>{
    const data=req.body;
    await postdata.add(data);
    res.send('user added');
})
app.get("/",(req,res)=>{
    res.send("Helooo broooooo");
})
app.listen(5000,(req,res)=>{
    console.log("Server is running at 5000");
})