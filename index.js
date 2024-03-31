const express = require("express");
const app = express();



app.get("/",(req,res)=>{
    res.send("hello moto");
})


app.listen(4040,()=>{
    let a=10;
    console.log(a);
});