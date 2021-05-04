const User=require('../models/user');
const {successHandler,failureHandler}=require("../helpers/response")
const {createHash}=require("../helpers/passwordHandler")
const {sendMail}=require("../helpers/nodemailer")
const {issueJwt}=require("../helpers/jwt");

exports.signUpWithUsername=async(req,res)=>{
   let {name,username,password}=req.body
    if(!username || !password){
        return failureHandler(res,"Missing Fields",400);
    }
   try{
    let user=await User.findOne({username:username});
    if(user){
        return failureHandler(res,"Username already exists,please login!",400);
    }
    let {salt,hash}=createHash(password);
    let newUser=new User({name,username,salt,hash})
    user= await User.create(newUser)
    if(!user){
        return failureHandler(res,"Unable to register,try again",500)
    }
    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return  successHandler(res,docs,200,"Registration Successfull!!")
         }
    })
   }
   catch(e){
    return failureHandler(res,e.message,500)
   }
   
  // let result= sendMail("18bcs017@iiitdwd.ac.in","Verify Email","email verified successfully")
    //  transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });
}

exports.signUpWithMobile=async(req,res)=>{
    let {phoneNumber}=req.body;
    if(!phoneNumber){
        return failureHandler(res,"Phone Number Missing",400)
    }
    try{
        let user=await User.findOne({phoneNumber})
    if(user){
        return failureHandler(res,"Phone Number already exists,please login!",400);
    }
    let newUser=new User({phoneNumber})
    user= await User.create(newUser)
    if(!user){
        return failureHandler(res,"Unable to register,try again",500)
    }
    let token=issueJwt(user._id);
    await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
         if(err){
            return failureHandler(res,err.statusCode,err.message);
         }
         else{
            return successHandler(res,docs,200,"Registration Successfull!!")
         }
    })
    }
    catch(e){
        return failureHandler(res,e.message,400)
    }
}

exports.signUpWithFacebook=async(req,res)=>{
    let {fbId,name,username}=req.body;
    if(!fbId|| !name || !username){
        return failureHandler(res,"Missing Fields",400);
    }
    try{
        let user=await User.findOne({facebookId:fbId});
        if(user){
            return failureHandler(res,"User already exists,please login!",400);
        }
        let newUser=new User({name,username,facebookId:fbId})
        user= await User.create(newUser)
        if(!user){
            return failureHandler(res,"Unable to register,try again",500)
        }
        let token=issueJwt(user._id);
        await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
             if(err){
                return  failureHandler(res,err.statusCode,err.message);
             }
             else{
                return  successHandler(res,docs,200,"Registration Successfull!!")
             }
        })
       }
       catch(e){
        return failureHandler(res,e.message,400)
       }
}

exports.signUpWithGoogle=async(req,res)=>{
    let {googleId,name,username}=req.body;
    if(!googleId|| !name || !username){
        return  failureHandler(res,"Missing Fields",400);
    }
    try{
        let user=await User.findOne({googleId});
        if(user){
            return  failureHandler(res,"User already exists,please login!",400);
        }
        let newUser=new User({name,username,googleId})
        user= await User.create(newUser)
        if(!user){
            return failureHandler(res,"Unable to register,try again",500)
        }
        let token=issueJwt(user._id);
        await User.findByIdAndUpdate(user._id,{token:token},{new:true},function(err,docs){
             if(err){
                return failureHandler(res,err.statusCode,err.message);
             }
             else{
                return successHandler(res,docs,200,"Registration Successfull!!")
             }
        })
       }
       catch(e){
        return failureHandler(res,e.message,400)
       }
}



