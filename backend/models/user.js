const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    username:String,
    salt:String,
    hash:String,
    googleId:String,
    facebookId:String,
    phoneNumber:Number,
    token:String
})

module.exports=mongoose.model("User",userSchema);