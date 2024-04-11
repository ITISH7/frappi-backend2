const express = require("express");
const app = express();
const dbconnect = require('./config/dbconnect');
const specials = require("./modals/specialSchema")
const cors = require('cors');
const bodyparser = require('body-parser')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));
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