const mongoose=require('mongoose');

const filmSchema=mongoose.Schema({
    title:String,
    description:String,
    genre:String,
    maturity:String,
    slug:String
})


module.exports=mongoose.model("Film",filmSchema);