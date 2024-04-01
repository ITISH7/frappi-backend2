const express = require("express");
const app = express();
const dbconnect = require('./config/dbconnect');
const specials = require("./modals/specialSchema")

// database connectivity 
dbconnect();

app.get("/",(req,res)=>{
    res.send("hello moto");
})
app.post("/senddata",async(req,res)=>{
    const imagelink = req.body.imagelink;
    const price = req.body.price;
    const description=req.body.description;
    const title=req.body.title;
    const enteredvalue= await specials.create({
        imageLink:imagelink,
        price:price,
        description:description,
        title:title    
    })

   if(enteredvalue){
    res.send("data added successfully!!")
   }


})

// data base ki connectivity 
app.listen(4040,()=>{
    let a=10;
    console.log(a);
});