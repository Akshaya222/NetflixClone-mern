const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const {successHandler,failureHandler}=require("../helpers/response")

exports.sendOtp=(req,res)=>{
    let {phoneNumber}=req.body;
    if(!phoneNumber){
        return failureHandler(res,"Phone Number Missing",400)
    }
    client.verify.services(process.env.TWILIO_SERVICE_ID).verifications
    .create({
        to:`+91${req.body.phoneNumber}`,
        channel:"sms"
    }).then((data)=>{
        return  successHandler(res,"",200,"Otp send Successfully,verify it")
    }).catch((err)=>{
        return failureHandler(res,"Failed to send otp,try again",401)
    })
}

exports.verifyOtp=(req,res)=>{
    let {phoneNumber,otp}=req.body;
    if(!phoneNumber || !otp){
        return  failureHandler(res,"Missing Fields",400)
    }
    client.verify.services(process.env.TWILIO_SERVICE_ID)
    .verificationChecks.create({
        to:`+91${req.body.phoneNumber}`,
        code:req.body.otp
    }).then((data)=>{
        return  successHandler(res,data,200,"Otp verified successfully")
    }).catch((err)=>{
        return  failureHandler(res,"Invalid Otp",401)
    })
}