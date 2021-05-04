const router=require('express').Router()
const signin=require('../controllers/signin');
const signup=require("../controllers/signup")
const otp=require("../controllers/otp")

router.post("/signup-username",signup.signUpWithUsername);
router.post("/signup-mobile",signup.signUpWithMobile)
router.post("/signup-fb",signup.signUpWithFacebook)
router.post("/signup-google",signup.signUpWithGoogle);

router.put("/login-username",signin.signInWithUsername);
router.put("/login-mobile",signin.signInWithMobile)
router.put("/login-fb",signin.signInWithFacebook)
router.put("/login-google",signin.signInWithGoogle)


router.post("/sendOtp",otp.sendOtp)
router.post("/verifyOtp",otp.verifyOtp)



module.exports=router;