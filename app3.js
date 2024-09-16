const express=require('express');
const app=express();
const cookieParser=require('cookie-parser')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const path=require('path');

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));


app.get("/", (req,res)=>{
    let token=jwt.sign({email: "swastikp@example.com"}, "secret");
    res.cookie("token", token)
    res.send("done");
})
app.get("/read", (req,res)=>{
    let data=jwt.verify(req.cookies.token, "secret");
    console.log(data);
    
})

app.listen(3000);