const mongoose = require("mongoose");

const dbconnect=()=>{

mongoose.connect("mongodb+srv://itish_jain:12345@cluster0.vxfie1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
{
    dbName:"frappi"

}).then(()=>{
    console.log("database connected succesfully")
}).catch(err=>{
    console.log("error in connecting",err)
})

}

module.exports =dbconnect;