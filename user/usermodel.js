const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    
    units:{
        type:Number
    },
    timestamp: { 
        type: Date,
        default: Date.now 
    },
},{versionKey:false})
const userModel=mongoose.model('user',userSchema)
module.exports=userModel