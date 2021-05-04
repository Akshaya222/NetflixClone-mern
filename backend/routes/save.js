const Series=require('../models/series');
const router=require('express').Router();
const Film=require("../models/film")

router.get("/films",(req,res)=>{
  Film.find({}).then((data)=>{
       res.status(200).send(data)
   }).catch((err)=>{
       res.status(400).send({
           message:"Unable to retrive data"
       })
   })
})

router.get("/series",(req,res)=>{
   Series.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send({
            message:"Unable to retrive data"
        })
    })
})

module.exports=router;