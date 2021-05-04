const mongoose=require('mongoose');

const seriesSchema=mongoose.Schema({
    title:String,
    description:String,
    genre:String,
    maturity:String,
    slug:String
})


module.exports=mongoose.model("Series",seriesSchema);