const Router = require("express").Router();

Router.post("/senddata",async(req,res)=>{
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


module.exports=Router;