const User=require('../models/user');
const {successHandler,failureHandler}=require("../helpers/response")
const {verfiyPassword}=require("../helpers/passwordHandler")
const {issueJwt}=require("../helpers/jwt");

exports.signInWithUsername=async(req,res)=>{
   let {username,password}=req.body
    if(!username || !password){
       return failureHandler(res,"Missing Fields",400);
    }
   try{
    let user=await User.findOne({username:username});
    if(!user){
        return  failureHandler(res,"User not found,please register",404);
    }
    let valid=verfiyPassword(password,user.hash,user.salt)
    if(!valid){
        console.log("not valid")
        return failureHandler(res,"Incorrect password",400)
    }

    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return successHandler(res,docs,200,"Login Successfull!!")
         }
    })
   }
   catch(e){
    return failureHandler(res,"Incorrect password,try again",400)
   }
}
exports.signInWithMobile=async(req,res)=>{
    let {phoneNumber}=req.body;
    if(!phoneNumber){
        return failureHandler(res,"Phone Number Missing",400)
    }
    try{
        let user=await User.findOne({phoneNumber})
    if(!user){
        return failureHandler(res,"Phone Number doesn't exist,please register",400);
    }
  
    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return  successHandler(res,docs,200,"Login Successfull!!")
         }
    })
    }
    catch(e){
        return failureHandler(res,e.message,400)
    }
}

exports.signInWithFacebook=async(req,res)=>{
    let {fbId,name,username}=req.body;
    if(!fbId|| !name || !username){
        return failureHandler(res,"Missing Fields",400);
    }  
    try{
        let user=await User.findOne({facebookId:fbId})
    if(!user){
        return failureHandler(res,"User doesn't exist,please register",400);
    }
  
    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return successHandler(res,docs,200,"Login Successfull!!")
         }
    })
    }
    catch(e){
        return failureHandler(res,e.message,400)
    }
}

exports.signInWithGoogle=async(req,res)=>{
    let {googleId,name,username}=req.body;
    if(!googleId|| !name || !username){
        return failureHandler(res,"Missing Fields",400);
    }  
    try{
        let user=await User.findOne({googleId})
    if(!user){
        return failureHandler(res,"User doesn't exist,please register",400);
    }
  
    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return  successHandler(res,docs,200,"Login Successfull!!")
         }
    })
    }
    catch(e){
        return failureHandler(res,e.message,400)
    }
}

