const express = require("express");
const { loginUser, signupUser, getMe } = require("../controllers/authController");
const {auth}=require("../middleware/auth")
const router = express.Router();
router.route("/login").post(loginUser);
router.route("/signup").post(signupUser);
router.route("/profile").get(auth,getMe);
module.exports=router