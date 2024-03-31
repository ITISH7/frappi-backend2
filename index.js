const express = require("express");
const app = express();
const mongoose = require("mongoose");

  





mongoose.connect("mongodb+srv://itish_jain:12345@cluster0.vxfie1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
    dbName:"frappi"

}).then(()=>{
    console.log("database connected succesfully")
}).catch(err=>{
    console.log("error in connecting".err)
})









app.get("/",(req,res)=>{
    res.send("hello moto");
})

// data base ki connectivity 
app.listen(4040,()=>{
    let a=10;
    console.log(a);
});