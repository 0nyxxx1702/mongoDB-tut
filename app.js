const express=require('express');
const app=express();
const userModel=require('./usermodel')


app.get('/', (req,res)=>{
    res.send("heyy")
});
app.get('/create', async (req,res)=>{
    let createduser=await userModel.create({
        name: "swas",
        username: "swas",
        email: "swastikrpanigrahi@gmail.com"
    })

    res.send(createduser);
});
app.get('/update', async (req,res)=>{
   let updateduser=await userModel.findOneAndUpdate({username: "swastik"}, {name:"swastik ranjan panigrahi"}, {new:true});
    res.send(updateduser);
});
app.get('/read', async (req,res)=>{
   let users=await userModel.find();
    res.send(users);
});
app.get('/delete', async (req,res)=>{
   let users=await userModel.findOneAndDelete({username: "swas"});
    res.send(`${users} has been deleted.`);
});
   
app.listen(3000);