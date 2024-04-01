const mongoose = require('mongoose');

const specialSchema = mongoose.Schema({

    imageLink:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required : true
    },
    description:{
        type:String,
        default:"not given"
    },
    price:{
        type:Number,
        min:0,
        required:true
    }
})
module.exports= mongoose.model('Special',specialSchema);