import express from "express";
import { client } from "./db";

const app=express();
app.use(express.json());

app.post('/',async(req,res)=>{
const user=await client.user.create({
    data:{
        name:Math.random.toString(),
        password:Math.random.toString()
    }
})
res.json({
    message:"user is created",
    user
})
})
app.get("/",async (req,res)=>{
    const user=await client.user.findFirst();
    res.json({
        message:"hello",
        user
    })
})
app.listen(3000,()=>{
    console.log("server is running on 3000");
})