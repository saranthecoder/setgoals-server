const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    
    units:{
        type:Number
    }
},{versionKey:false})
const userModel=mongoose.model('user',userSchema)
module.exports=userModel