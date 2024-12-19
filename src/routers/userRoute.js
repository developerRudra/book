const express = require("express");
const router = express.Router();

const {registerUser,otpVerification,logIn,getAllUser,getUserProfile,logOut} = require("../controllers/userController")

router.post("/register", registerUser);
router.post("/otpVerification", otpVerification);
router.post("/logIn", logIn);
router.get("/getAllUser", getAllUser);
router.get("/getUserProfile", getUserProfile);
router.post("/logOut", logOut);
module.exports = router;